import { fetchJSON } from "../fetchJSON";
import { StudentCard } from "../components/StudentCard";
import { useLoading } from "../hooks/useLoading";

function StudentList({ student }) {
  const { name, study, subject, gradeGoal, studyTime, aboutMe } = student;

  return (
    <>
      <div>
        <StudentCard student={student} />
      </div>
      {/*<div>*/}
      {/*  <h2>Name: {name}</h2>*/}
      {/*  <h3>Study: {study}</h3>*/}
      {/*  <h3>Subjects: {subject}</h3>*/}
      {/*  <h3>Grade goal: {gradeGoal}</h3>*/}
      {/*  <h3>Study time: {studyTime}</h3>*/}
      {/*  <h3>About me: {aboutMe}</h3>*/}
      {/*</div>*/}
    </>
  );
}

export function AllStudents() {
  const { loading, error, data } = useLoading(async () =>
    fetchJSON("/api/students")
  );

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

  return (
    <div>
      <h1>List of students</h1>
      {data.map((student) => (
        <StudentList key={student.name} student={student} />
      ))}
    </div>
  );
}