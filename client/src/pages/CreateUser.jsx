import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { apiContext } from "../contexts/api-context";
import { FormInput } from "../components/ui/FormInput";
import { FormTextArea } from "../components/ui/FormTextArea";

export function CreateUser() {
  const { userContext } = useContext(apiContext);
  const [name, setName] = useState("");
  const [study, setStudy] = useState("");
  const [subject, setSubject] = useState("");
  const [gradeGoal, setGradeGoal] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    userContext({ name, study, subject, gradeGoal, studyTime, aboutMe });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>

      <FormInput label={"name:"} value={name} onChangeValue={setName} />
      <FormInput label={"study:"} value={study} onChangeValue={setStudy} />
      <FormInput
        label={"subject:"}
        value={subject}
        onChangeValue={setSubject}
      />
      <FormInput
        label={"gradeGoal:"}
        value={gradeGoal}
        onChangeValue={setGradeGoal}
      />
      <FormInput
        label={"studyTime:"}
        value={studyTime}
        onChangeValue={setStudyTime}
      />

      <FormTextArea label={"Text:"} value={aboutMe} setValue={setAboutMe} />
      <div>
        <button>Save</button>
      </div>
    </form>
  );
}
