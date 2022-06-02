import { SearchBar } from "../components/ui/SearchBar";
import { useState } from "react";
import { Button } from "../components/ui/Button";

export function Chat() {
  const [input, setInput] = useState(undefined);

  function search(event) {
    event.preventDefault();
    // TODO: Fix this
  }

  return (
    <form onSubmit={search} className="p-5">
      <SearchBar onChange={setInput} />
      {input}
      <Button type={"flat"}>Submit</Button>
    </form>
  );
}
