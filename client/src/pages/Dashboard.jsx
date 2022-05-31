import React from "react";
import { Typography } from "../components/Typography";
import { NavCard } from "../components/NavCard";
import { navList } from "../navigation-config";

export function Dashboard() {
  return (
    <div className="h-screen">
      <div className="h-full gap-5 flex flex-col justify-center text-center">
        <div className="px-10 m-2">
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
    </div>
  );
}
