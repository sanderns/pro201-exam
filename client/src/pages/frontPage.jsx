import React, { useContext } from "react";
import DeviceContext from "../contexts/device-context";
import { Link } from "react-router-dom";

export function FrontPage() {
  const { isMobile } = useContext(DeviceContext);
  console.log(isMobile);

  return (
    <div>
      {isMobile ? ( // PRINTS FRONTPAGE IS THE DEVICE IS A MOBILE
        <>
          <h1>Please choose the option that suits your needs</h1>
          <ul>
            <li>
              <Link to={"/AllMatchingStudents"}>
                List all matching students{" "}
              </Link>
            </li>
            <li>
              <Link to={"/AllStudents"}>List all students</Link>
            </li>
            <li>
              <Link to={"/AllGroups"}>List all Groups</Link>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
