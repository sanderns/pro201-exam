import React from "react";
import { Typography } from "../components/ui/Typography";
import { NavCard } from "../components/ui/NavCard";
import { navList } from "../navigation-config";
import { ContentWrapper } from "../components/wrappers/ContentWrapper";

export function Dashboard() {
  return (
    <div className="height-full flex flex-col justify-center">
      <div className="p-5 gap-5 flex flex-col justify-center text-center">
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
