import { fetchJSON } from "../api/fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";
import React, { useState } from "react";
import { DetailedStudentCard } from "../components/DetailedStudentCard";

export function AllStudents() {
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
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

  return (
    <div className="relative">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} onClick={handleClick} />
      ))}
      {showModal && (
        <DetailedStudentCard
          student={selectedStudent}
          onClose={() => setShowModal(false)}
          onRequest={() => console.log("TODO: Make this button work")} // TODO: Make this button work
          onMessage={() => console.log("TODO: Make this button work")} // TODO: Make this button work
        />
      )}
    </div>
  );
}
