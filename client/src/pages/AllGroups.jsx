import { fetchJSON } from "../api/fetchJSON";
import { useLoading } from "../hooks/useLoading";
import { GroupCard } from "../components/GroupCard";
import React, { useState } from "react";
import { Modal } from "../components/wrappers/Modal";
import { GroupDetailed } from "../components/GroupDetailed";
import { Dialog } from "../components/Dialog";
import { Alert } from "../components/Alert";

export function AllGroups() {
  const [selectedGroup, setSelectedGroup] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
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
    setShowVerify(false);
  }

  return (
    <div className="relative grid grid-cols-2 p-5 gap-5">
      {groups.map((group) => (
        <GroupCard key={group.name} group={group} onClick={handleClick} />
      ))}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GroupDetailed
            group={selectedGroup}
            onClose={() => setShowModal(false)}
            onRequest={() => setShowRequest(true)}
          />
        </Modal>
      )}
      {showRequest && (
        <Modal onClose={() => setShowRequest(false)}>
          <Dialog onCancel={() => setShowRequest(false)} onSend={requestClick}>
            Make yourself stand out!
          </Dialog>
        </Modal>
      )}
      {showVerify && (
        <Modal onClose={() => setShowVerify(false)}>
          <Alert onOk={handleCloseAll}>Your request has been sent!</Alert>
        </Modal>
      )}
    </div>
  );
}
