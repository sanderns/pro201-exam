import { useLoading } from "../hooks/useLoading";
import { fetchJSON } from "../api/fetchJSON";
import { CategoryHeader } from "../components/CategoryHeader";
import { RequestCard } from "../components/RequestCard";
import { ContactCard } from "../components/ContactCard";
import React, { useState } from "react";
import { Modal } from "../components/wrappers/Modal";
import { ContactOptions } from "../components/ContactOptions";
import {Alert} from "../components/ui/Alert";

export function ListContacts() {
  const [showModal, setShowModal] = useState(false);
  const [showAccept, setShowAccept] = useState(false);
  const [showDeny, setShowDeny] = useState(false);

  const {
    loading: l1,
    error: e1,
    data: students,
  } = useLoading(async () => fetchJSON("/api/students"));
  const {
    loading: l2,
    error: e2,
    data: groups,
  } = useLoading(async () => fetchJSON("/api/groups"));

  if (l1 || l2) {
    return <div>Loading...</div>;
  }

  if (e1 || e2) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  const contacts = {
    requests: [],
    groups: [],
    students: [],
  };

  function pickRandomizedUser(contact, list) {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      contacts.requests.push(contact.name);
    } else {
      list.push(contact.name);
    }
  }

  students.forEach((student) => {
    pickRandomizedUser(student, contacts.students);
  });
  groups.forEach((group) => {
    pickRandomizedUser(group, contacts.groups);
  });

  function handleCloseAll() {
    setShowModal(false);
    setShowAccept(false);
    setShowDeny(false)
  }

  return (
    <div className="p-5 flex flex-col gap-5">
      {contacts.requests !== [] ? (
        <CategoryHeader name={"Requests"} canHide={true}>
          {contacts.requests.map((contact, index) => (
              <!-- TODO: Make requests interactive -->
            <RequestCard
                key={index}
                contact={contact}
                onAccept={() => setShowAccept(true)}
                onDeny={() => setShowDeny(true)}
            />
          ))}
        </CategoryHeader>
      ) : (
        ""
      )}
      {contacts.groups !== [] ? (
        <CategoryHeader name={"Groups"} canHide={true}>
          {contacts.groups.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              onClick={() => setShowModal(true)}
            />
          ))}
        </CategoryHeader>
      ) : (
        ""
      )}
      {contacts.students !== [] ? (
        <CategoryHeader name={"Students"} canHide={true}>
          {contacts.students.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              onClick={() => setShowModal(true)}
            />
          ))}
        </CategoryHeader>
      ) : (
        ""
      )}
      {showModal && (
        <div className="z-50">
          <Modal onClose={() => setShowModal(false)}>
            <ContactOptions onClose={() => setShowModal(false)} />
            {/* TODO: Delete conversations functionality etc. */}
          </Modal>
        </div>
      )}
      {showAccept && (
            <Modal onClose={() => setShowAccept(false)}>
              <Alert onOk={handleCloseAll}>Request has been accepted!</Alert>
            </Modal>
        )}
      {showDeny && (
            <Modal onClose={() => setShowDeny(false)}>
              <Alert onOk={handleCloseAll}>Request has been denied!</Alert>
            </Modal>
        )}
    </div>
  );
}
