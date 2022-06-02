import { useLoading } from "../hooks/useLoading";
import { fetchJSON } from "../api/fetchJSON";
import { ContactCategory } from "../components/ContactCategory";

export function ListContacts() {
  const categories = ["Requests", "Uncategorized"];

  const {
    loading: l1,
    error: e1,
    data: students,
  } = useLoading(async () => fetchJSON("/api/students"));
  const {
    loading: l2,
    error: e2,
    data: groups,
  } = useLoading(async () => fetchJSON("/api/groups"));

  if (l1 || l2) {
    return <div>Loading...</div>;
  }

  if (e1 || e2) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  const contacts = {
    requests: [],
    uncategorized: [],
  };

  // TODO: Rename function to a more understandable name?
  function pickOne(contact) {
    const random = Math.floor(Math.random() * categories.length);
    if (random === categories.length - 1) {
      contacts.uncategorized.push(contact.name);
    } else {
      contacts.requests.push(contact.name);
    }
  }

  students.forEach((student) => {
    pickOne(student);
  });
  groups.forEach((group) => {
    pickOne(group);
  });

  return (
    <div className="p-5 flex flex-col gap-5">
      {categories.map((category, index) => (
        <ContactCategory key={index} name={category} contacts={contacts} />
      ))}
    </div>
  );
}
