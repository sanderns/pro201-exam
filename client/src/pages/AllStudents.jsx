import { fetchJSON } from "../api/fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";
import React, { useState } from "react";
import { DetailedStudentCard } from "../components/DetailedStudentCard";
import { ModalWrapper } from "../components/wrappers/ModalWrapper";
import { SearchBar } from "../components/ui/SearchBar";
import { Button } from "../components/ui/Button";

function search(students, input) {
  // If input is "" then dont do anything
  if (input === "") {
    return students;
  }

  // Else check students for user input and return it
  const tempList = [];
  students.forEach((student) => {
    if (student.name === input) {
      tempList.push(student);
    }
  });

  return tempList;
}

export function AllStudents() {
  const [input, setInput] = useState(undefined);
  const [studentList, setStudentList] = useState();
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

  function handleSubmit(event) {
    event.preventDefault();
    setStudentList(search(students, input));
  }

  return (
    <div className="relative">
      {/* onSubmit runs Search function and onChange changes input / user preference */}
      <form onSubmit={handleSubmit} className="p-5">
        <SearchBar onChange={setInput} />
        <Button type={"flat"}>Submit</Button>
      </form>
      {/* Checks if studentList exists, if not: map students, else map studentList */}
      {!studentList
        ? students.map((student, index) => (
            <StudentCard key={index} student={student} onClick={handleClick} />
          ))
        : studentList.map((student, index) => (
            <StudentCard key={index} student={student} onClick={handleClick} />
          ))}
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      {showModal && (
        <ModalWrapper onClose={() => setShowModal(false)}>
          <DetailedStudentCard
            student={selectedStudent}
            onClose={() => setShowModal(false)}
            onRequest={() => console.log("TODO: Make this button work")} // TODO: Make this button work
            onMessage={() => console.log("TODO: Make this button work")} // TODO: Make this button work
          />
        </ModalWrapper>
      )}
    </div>
  );
}
