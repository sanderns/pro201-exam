import { fetchJSON } from "../api/fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";
import React, { useState } from "react";
import { DetailedStudentCard } from "../components/DetailedStudentCard";
import { ModalWrapper } from "../components/wrappers/ModalWrapper";
import { RequestWrapper } from "../components/wrappers/RequestWrapper";
import {VerifyBox} from "../components/VerifyBox";
import {MessageBox} from "../components/MessageBox";
import {ConfirmationBox} from "../components/ConfirmationBox";

export function MatchingStudents() {
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [showModal,setShowModal] = useState(false);
  const [showRequest,setShowRequest] = useState(false);
  const [showMessage,setShowMessage] = useState(false);
  const [showVerify,setShowVerify] = useState(false);
  const [showConfirmation,setShowConfirmation] = useState(false);
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
  function confirmClick() {
    setShowConfirmation(true);
  }
  function requestClick() {
    setShowVerify(true);
  }

  return (
    <div className="relative grid grid-cols-2 p-5 gap-5">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} onClick={handleClick} />
      ))}
      {showModal && (
        <ModalWrapper onClose={() => setShowModal(false)}>
          <DetailedStudentCard
            student={selectedStudent}
            onClose={() => setShowModal(false)}
            onRequest={() => setShowRequest(true)} // TODO: Make this button work
            onMessage={() => setShowMessage(true)} // TODO: Make this button work
          />
        </ModalWrapper>
      )}
      {showRequest && (
          <ModalWrapper onClose={() => setShowRequest(false)}>
            <VerifyBox onClose={() => setShowRequest(false)} displayText={"Do you wish to proceed"}/>
          </ModalWrapper>
      )
    }
      {showMessage && (
          <ModalWrapper onClose={() => setShowMessage(false)}>
            <MessageBox onClose={() => setShowMessage(false)} displayText={"Send"} onYes={requestClick}/>
          </ModalWrapper>
      )}
      {showConfirmation && (
          <ModalWrapper onClose={() => setShowConfirmation(false)}>
            <ConfirmationBox onClose={() => setShowConfirmation(false)} displayText={"Your request has been sent"} onConfirm={confirmClick}/>
          </ModalWrapper>
      )

    }
    </div>
  );
}
