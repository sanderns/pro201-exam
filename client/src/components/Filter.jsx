import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Typography } from "./ui/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export function Filter({ onSubmit }) {
  const [showField, setShowField] = useState(undefined);
  const [university, setUniversity] = useState(undefined);
  const [subject, setSubject] = useState(undefined);
  const [grade, setGrade] = useState(undefined);
  const [time, setTime] = useState(undefined);

  const filterFields = [
    {
      id: 1,
      title: "University or College",
      values: [
        "Høyskolen Kristiania",
        "Universitet i Oslo",
        "Handelshøyskolen BI",
      ],
      state: showField,
      setState: setShowField,
      value: university,
      setValue: setUniversity,
    },
    {
      id: 2,
      title: "Subject",
      values: ["E-business", "Frontend", "Programmering"],
      state: showField,
      setState: setShowField,
      value: subject,
      setValue: setSubject,
    },
    {
      id: 3,
      title: "Desired grade",
      values: ["A", "B", "C", "D", "E"],
      state: showField,
      setState: setShowField,
      value: grade,
      setValue: setGrade,
    },
    {
      id: 4,
      title: "Preferred working time",
      values: ["Morning", "Daytime", "Nighttime"],
      state: showField,
      setState: setShowField,
      value: time,
      setValue: setTime,
    },
  ];

  function handleSubmit() {
    onSubmit(university, subject, grade, time);
  }

  function handleClick(setValue, value) {
    setValue(value);
    setShowField(undefined);
  }

  return (
    <div className="flex flex-col gap-5">
      {filterFields.map(
        ({ id, title, values, state, setState, value, setValue }) => (
          <div className="flex w-64">
            <div className="flex grow flex-col gap-2.5">
              <Typography element={"p1"} weight="regular">
                {title}
              </Typography>
              <div
                className={`${
                  !state ? "rounded-full" : "rounded-2xl"
                } flex flex-col grow shadow shadow-purple-300`}
              >
                <button
                  className={`${
                    !value
                      ? "rounded-full text-gray-400"
                      : "rounded-t-2xl border-b text-black"
                  } py-1 px-3 flex justify-between items-center`}
                  onClick={
                    !state
                      ? () => setState(id)
                      : state === id
                      ? () => setState(undefined)
                      : () => setState(id)
                  }
                >
                  <Typography element={"p1"} weight="regular">
                    {!value ? "Choose an option" : value}
                  </Typography>
                  <div>
                    {!state ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </div>
                </button>
                {state === id &&
                  values.map((value) => (
                    <div className="flex flex-col last:rounded-b-2xl text-gray-400 py-1 px-3 border-b last:border-b-0">
                      <button
                        onClick={() => handleClick(setValue, value)}
                        className="flex justify-start text-black"
                      >
                        <Typography element={"p1"} weight={"regular"}>
                          {value}
                        </Typography>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )
      )}
      <Button theme={"gradient"} type={"normal"} onClick={handleSubmit}>
        Apply
      </Button>
    </div>
  );
}
