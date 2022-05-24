import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div>
      <h1>Please choose the option that suits your needs</h1>
      <ul>
        <li>
          <Link to={"/AllMatchingStudents"}>List all matching students </Link>
        </li>
        <li>
          <Link to={"/AllStudents"}>List all students</Link>
        </li>
        <li>
          <Link to={"/AllGroups"}>List all Groups</Link>
        </li>
      </ul>
    </div>
  );
}