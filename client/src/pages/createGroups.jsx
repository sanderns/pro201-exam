import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { createContext } from "../createContext";
import { FormInput } from "../formInput";
import { FormTextarea } from "../formTextArea";

export function CreateGroup() {
  const { groupContext } = useContext(createContext);
  const [name, setName] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [gradeGoal, setGradeGoal] = useState("");
  const [study, setStudy] = useState("");
  const [subject, setSubject] = useState("");
  const [studyTime, setStudyTime] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    groupContext({ name, aboutUs, gradeGoal, study, subject, studyTime });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Group</h2>

      <FormInput label={"name:"} value={name} onChangeValue={setName} />
      <FormTextarea label={"Text:"} value={aboutUs} setValue={setAboutUs} />
      <FormInput
        label={"gradeGoal:"}
        value={gradeGoal}
        onChangeValue={setGradeGoal}
      />
      <FormInput label={"study:"} value={study} onChangeValue={setStudy} />
      <FormInput
        label={"subject:"}
        value={subject}
        onChangeValue={setSubject}
      />
      <FormInput
        label={"studyTime:"}
        value={studyTime}
        onChangeValue={setStudyTime}
      />

      <div>
        <button>Save</button>
      </div>
    </form>
  );
}
