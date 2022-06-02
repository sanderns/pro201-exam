import { fetchJSON } from "../api/fetchJSON";
import { useLoading } from "../hooks/useLoading";
import { GroupCard } from "../components/GroupCard";
import React, { useState } from "react";
import { ModalWrapper } from "../components/wrappers/ModalWrapper";
import { DetailedGroupCard } from "../components/DetailedGroupCard";

export function AllGroups() {
  const [selectedGroup, setSelectedGroup] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
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
            onRequest={() => console.log("TODO: Make this button work")} // TODO: Make this button work
            onMessage={() => console.log("TODO: Make this button work")} // TODO: Make this button work
          />
        </ModalWrapper>
      )}
    </div>
  );
}
