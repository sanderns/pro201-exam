import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { apiContext } from "../contexts/api-context";
import { Typography } from "../components/ui/Typography";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function CreateGroup() {
  const { groupContext } = useContext(apiContext);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [grade, setGrade] = useState("");
  const [study, setStudy] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    groupContext({
      name: title,
      aboutUs: about,
      gradeGoal: grade,
      study,
      subject,
      studyTime: time,
    });
    navigate("/");
  }

  return (
    <form
      className="grow flex flex-col justify-center p-5 gap-2.5"
      onSubmit={handleSubmit}
    >
      <Typography element={"h2"} weight={"bold"}>
        Create Group
      </Typography>
      <Input
        label={"Please enter your group title"}
        type={"text"}
        value={title}
        onChange={setTitle}
      />
      <Input
        label={"Tell us a little about your group"}
        type={"textarea"}
        value={about}
        onChange={setAbout}
      />
      <Input
        label={"What grade are you aiming for?"}
        type={"text"}
        value={grade}
        onChange={setGrade}
      />
      <Input
        label={"What subject is this group for?"}
        type={"text"}
        value={subject}
        onChange={setSubject}
      />
      <Input
        label={"What study does this subject belong to?"}
        type={"text"}
        value={study}
        onChange={setStudy}
      />
      <Input
        label={"What time of the day will this group be studying?"}
        type={"text"}
        value={time}
        onChange={setTime}
      />
      <div className="flex justify-end">
        <Button theme={"gradient"} type={"normal"}>
          Create group
        </Button>
      </div>
    </form>
  );
}
