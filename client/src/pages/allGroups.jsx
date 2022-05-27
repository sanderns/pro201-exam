import { fetchJSON } from "../fetchJSON";
import { useLoading } from "../hooks/useLoading";

function GroupList({
  group: { name, study, subject, gradeGoal, studyTime, aboutUs },
}) {
  return (
    <>
      <h2>Name: {name}</h2>
      <h3>About us: {aboutUs}</h3>
      <h3>Grade goal: {gradeGoal}</h3>
      <h3>Study: {study}</h3>
      <h3>Subjects: {subject}</h3>
      <h3>Study time: {studyTime}</h3>
    </>
  );
}

export function AllGroups() {
  const { loading, error, data } = useLoading(async () =>
    fetchJSON("/api/groups")
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
      <h1>List of Groups</h1>

      {data.map((group) => (
        <GroupList key={group.name} group={group} />
      ))}
    </div>
  );
}
