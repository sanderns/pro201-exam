import { fetchJSON } from "../api/fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";
import React, { useState } from "react";
import { StudentDetailed } from "../components/StudentDetailed";
import { Modal } from "../components/wrappers/Modal";
import { Dialog } from "../components/ui/Dialog";
import { Alert } from "../components/ui/Alert";
import { Typography } from "../components/ui/Typography";
import { SearchBar } from "../components/ui/SearchBar";
import { Filter } from "../components/Filter";

export function MatchingStudents() {
  const [input, setInput] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [preferences, setPreferences] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const {
    loading,
    error,
    data: students,
  } = useLoading(async () => fetchJSON("/api/students"));

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

  function handlePreferences(university, subject, grade, time) {
    setShowFilter(false);
    setPreferences({
      university: university,
      subject: subject,
      grade: grade,
      time: time,
    });
  }

  function handleClick(student) {
    setSelectedStudent(student);
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
    <div className="flex flex-col p-5 gap-5">
      <Typography element={"h2"} weight={"bold"}>
        Students
      </Typography>
      <SearchBar onChange={setInput} onClick={() => setShowFilter(true)} />
      <div className="relative grid grid-cols-2 gap-5">
        {students.map(
          (student, index) =>
            student.name.toUpperCase().includes(input.toUpperCase()) && (
              <StudentCard
                key={index}
                student={student}
                onClick={handleClick}
              />
            )
        )}
        {showFilter && (
          <Modal onClose={() => setShowFilter(false)}>
            <Filter onSubmit={handlePreferences} />
          </Modal>
        )}
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <StudentDetailed
              student={selectedStudent}
              onClose={() => setShowModal(false)}
              onRequest={() => setShowRequest(true)}
            />
          </Modal>
        )}
        {showRequest && (
          <Modal onClose={() => setShowRequest(false)}>
            <Dialog
              onCancel={() => setShowRequest(false)}
              onSend={requestClick}
            >
              What should your first greeting be?
            </Dialog>
          </Modal>
        )}
        {showVerify && (
          <Modal onClose={() => setShowVerify(false)}>
            <Alert onOk={handleCloseAll}>Your request has been sent!</Alert>
          </Modal>
        )}
      </div>
    </div>
  );
}
