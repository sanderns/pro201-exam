import { useLoading } from "../hooks/useLoading";
import { fetchJSON } from "../api/fetchJSON";
import { ContactCategory } from "../components/ContactCategory";

export function ListContacts() {
  const {
    loading,
    error,
    data: students,
  } = useLoading(async () => fetchJSON("/api/students"));
  const { data: groups } = useLoading(async () => fetchJSON("/api/groups"));

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

  console.log(students);
  console.log(groups);

  return (
    <div className="p-5">
      <ContactCategory />
    </div>
  );
}
