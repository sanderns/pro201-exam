import { Link } from "react-router-dom";
import React from "react";
import { navList } from "../navigation-config";

export function FrontPage() {
  return (
    <div>
      <h1>Please choose the option that suits your needs</h1>
      <ul>
        {navList.map(
          (item) =>
            item.frontpage && (
              <li>
                <Link to={item.path}>{item.frontpage.text}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
