import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { apiContext } from "../contexts/api-context";
import { FormInput } from "../components/FormInput";
import { FormTextArea } from "../components/FormTextArea";

export function CreateGroup() {
  const { groupContext } = useContext(apiContext);
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
      <FormTextArea label={"Text:"} value={aboutUs} setValue={setAboutUs} />
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
