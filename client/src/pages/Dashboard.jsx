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
    <div className="h-screen">
      <TopBar />
      <div className="p-5 pt-20 gap-5 flex flex-col text-center">
        <div className="px-10">
          <Typography element={"h2"} weight={"medium"}>
            Please choose the option that suits your needs.
          </Typography>
        </div>
        {navigation.map((item, index) => (
          <NavCard key={index} href={item.href} element={"h3"}>
            {item.child}
          </NavCard>
        ))}
      </div>
      <Navbar />
    </div>
  );
}
