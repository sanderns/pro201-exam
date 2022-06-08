import React from "react";
import { Typography } from "../components/ui/Typography";
import { NavCard } from "../components/ui/NavCard";
import { navList } from "../navigation-config";

export function Dashboard() {
  return (
    <div className="flex grow flex-col p-5 gap-5 justify-center text-center">
      <div className="pb-5">
        <Typography element={"h2"} weight={"medium"}>
          Please choose the option that suits your needs.
        </Typography>
      </div>
      {navList.map(
        ({ path, dashboard }, index) =>
          dashboard && (
            <NavCard key={index} href={path} element={"h3"}>
              {dashboard.text}
            </NavCard>
          )
      )}
    </div>
  );
}
