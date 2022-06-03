import { fetchJSON } from "../api/fetchJSON";
import { useLoading } from "../hooks/useLoading";
import { GroupCard } from "../components/GroupCard";
import React, { useState } from "react";
import { ModalWrapper } from "../components/wrappers/ModalWrapper";
import { DetailedGroupCard } from "../components/DetailedGroupCard";
import { VerifyBox } from "../components/VerifyBox";
import { MessageBox } from "../components/MessageBox";
import { ConfirmationBox } from "../components/ConfirmationBox";

export function AllGroups() {
  const [selectedGroup, setSelectedGroup] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const {
    loading,
    error,
    data: groups,
  } = useLoading(async () => fetchJSON("/api/groups"));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  function handleClick(group) {
    setSelectedGroup(group);
    setShowModal(true);
  }

  function requestClick() {
    setShowVerify(true);
  }

  function handleCloseAll() {
    setShowModal(false);
    setShowRequest(false);
    setShowMessage(false);
    setShowVerify(false);
  }

  return (
    <div className="relative grid grid-cols-2 p-5 gap-5">
      {groups.map((group) => (
        <GroupCard key={group.name} group={group} onClick={handleClick} />
      ))}
      {showModal && (
        <ModalWrapper onClose={() => setShowModal(false)}>
          <DetailedGroupCard
            group={selectedGroup}
            onClose={() => setShowModal(false)}
            onRequest={() => setShowRequest(true)} // TODO: Make this button work
            onMessage={() => setShowMessage(true)} // TODO: Make this button work
          />
        </ModalWrapper>
      )}
      {showRequest && (
        <ModalWrapper onClose={() => setShowRequest(false)}>
          <VerifyBox
            onClose={() => setShowRequest(false)}
            displayText={"Do you wish to proceed"}
            onYes={requestClick}
          />
        </ModalWrapper>
      )}
      {showMessage && (
        <ModalWrapper onClose={() => setShowMessage(false)}>
          <MessageBox
            onClose={() => setShowMessage(false)}
            displayText={"Send"}
          />
        </ModalWrapper>
      )}
      {showVerify && (
        <ModalWrapper onClose={() => setShowVerify(false)}>
          <ConfirmationBox
            onCloseAll={handleCloseAll}
            displayText={"Your request has been sent"}
          />
        </ModalWrapper>
      )}
    </div>
  );
}
