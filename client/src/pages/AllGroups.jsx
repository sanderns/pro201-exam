import { fetchJSON } from "../api/fetchJSON";
import { useLoading } from "../hooks/useLoading";

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
