import { fetchJSON } from "../api/fetchJSON";
import { useLoading } from "../hooks/useLoading";
import { GroupCard } from "../components/GroupCard";
import React, { useState } from "react";
import { Modal } from "../components/Modal";
import { DetailedGroupCard } from "../components/DetailedGroupCard";
import {SearchBar} from "../components/ui/SearchBar";
import {Button} from "../components/ui/Button";

function search(groups, input) {
  // If input is "" then dont do anything
  if (input === "") {
    return groups;
  }

  //Else check students for user input and return it
  const tempList = [];
  groups.forEach((group) => {
    if (group.name === input) {
      tempList.push(group);
    }
  });

  return tempList;
}

export function AllGroups() {
  const [input, setInput] = useState(undefined);
  const [groupList, setGroupList] = useState();
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

  function handleSubmit(event) {
    event.preventDefault();
    setGroupList(search(groups, input));
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="p-5">
        <SearchBar onChange={setInput} />
        <Button type={"flat"}>Submit</Button>
      </form>
      {!groupList
          ? groups.map((group) => (
              <GroupCard key={group.name} group={group} onClick={handleClick} />
          ))
          : groupList.map((group) => (
              <GroupCard key={group.name} group={group} onClick={handleClick} />
          ))}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DetailedGroupCard
            group={selectedGroup}
            onClose={() => setShowModal(false)}
            onRequest={() => console.log("TODO: Make this button work")} // TODO: Make this button work
            onMessage={() => console.log("TODO: Make this button work")} // TODO: Make this button work
          />
        </Modal>
      )}
    </div>
  );
}
