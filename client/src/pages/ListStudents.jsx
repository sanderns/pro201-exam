import { useLoading } from "../hooks/useLoading";
import { fetchJSON } from "../api/fetchJSON";
import { ContactCategory } from "../components/ContactCategory";

export function ListStudents() {
  const {
    loading,
    error,
    data: contacts,
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

  return (
    <div className="p-5">
      <ContactCategory />
    </div>
  );
}
