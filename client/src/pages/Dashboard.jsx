import React from "react";
import { Typography } from "../components/Typography";
import { NavCard } from "../components/NavCard";
import { TopBar } from "../components/TopBar";
import { Navbar } from "../components/Navbar";

const navigation = [
  {
    href: "/AllMatchingStudents",
    child: "List all matching students",
  },
  {
    href: "/AllStudents",
    child: "List all students",
  },
  {
    href: "/AllGroups",
    child: "List all groups",
  },
];

export function Dashboard() {
  return (
    <>
      <TopBar />
      <div className="p-5 flex flex-col justify-between">
        <Typography element={"h2"} weight={"bold"}>
          Please choose the option that suits your needs.
        </Typography>
        {navigation.map((item, index) => (
          <NavCard key={index} href={item.href} element={"h3"}>
            {item.child}
          </NavCard>
        ))}
      </div>
      <Navbar />
    </>
  );
}
