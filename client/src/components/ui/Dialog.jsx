import React, {useState} from "react";
import { Typography } from "./Typography";
import { Button } from "./Button";

export function Dialog({ onCancel, onSend, children }) {
    const [text, setText] = useState("");
    const [value, setValue] = useState("");
    const [showError, setShowError] = useState(false);

  return (
    <div className={"flex flex-col gap-5"}>
      <Typography element={"p1"} weight={"bold"}>
        {children}
      </Typography>
      <textarea className="border rounded p-2" placeholder="Hello!" onChange={(event) => setValue(event.target.value)}
      />
        {
            showError && <div> FormTextArea cant be empty
            </div>
        }
      <div className="flex gap-5 justify-end">
        <Button theme={"gradient"} type={"normal"} onClick={onCancel}>
          Cancel
        </Button>
        <Button disabled={text.length === 0} theme={"gradient"} type={"normal"} onClick={value ?onSend: () => setShowError(true)}>
          Send
        </Button>
      </div>
    </div>
  );
}
