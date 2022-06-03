import { fetchJSON } from "../api/fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";
import React, { useState } from "react";
import { DetailedStudentCard } from "../components/DetailedStudentCard";
import { Modal } from "../components/Modal";
import { VerifyBox } from "../components/VerifyBox";
import { MessageBox } from "../components/MessageBox";
import { ConfirmationBox } from "../components/ConfirmationBox";

export function AllStudents() {
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
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
    setShowMessage(false);
    setShowVerify(false);
  }

  return (
    <div className="relative grid grid-cols-2 p-5 gap-5">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} onClick={handleClick} />
      ))}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DetailedStudentCard
            student={selectedStudent}
            onClose={() => setShowModal(false)}
            onRequest={() => setShowRequest(true)} // TODO: Make this button work
            onMessage={() => setShowMessage(true)} // TODO: Make this button work
          />
        </Modal>
      )}
      {showRequest && (
        <Modal onClose={() => setShowRequest(false)}>
          <VerifyBox
            onClose={() => setShowRequest(false)}
            displayText={"Do you wish to proceed"}
            onYes={requestClick}
          />
        </Modal>
      )}
      {showMessage && (
        <Modal onClose={() => setShowMessage(false)}>
          <MessageBox
            onClose={() => setShowMessage(false)}
            displayText={"Send"}
          />
        </Modal>
      )}
      {showVerify && (
        <Modal onClose={() => setShowVerify(false)}>
          <ConfirmationBox
            onCloseAll={handleCloseAll}
            displayText={"Your request has been sent"}
          />
        </Modal>
      )}
    </div>
  );
}
