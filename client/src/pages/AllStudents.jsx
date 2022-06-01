import { fetchJSON } from "../api/fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";
import { DetailedStudentCard } from "../components/DetailedStudentCard";
import React, { useState } from "react";

export function AllStudents() {
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const {
    loading,
    error,
    data: students,
  } = useLoading(async () => fetchJSON("/api/students"));
  let aria = true;

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

  function handleSelectedStudent(student) {
    setSelectedStudent(student);
    setShowModal(true);
    aria = false;
  }

  function closeModal() {
    setShowModal(false);
    aria = true;
  }

  return (
    <div>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          student={student}
          onClick={handleSelectedStudent}
        />
      ))}
      {showModal && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden={aria}
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <DetailedStudentCard student={selectedStudent} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
