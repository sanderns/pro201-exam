import React from "react";
import { TopBar } from "../ui/TopBar";
import { NavBar } from "../ui/NavBar";

export function Global({ children }) {
  /*
   * Det er dobbelt opp med <TopBar /> og <NavBar /> siden en av de er fixed i posisjon.
   * Dvs. den taes ikke med i den relative posisjoneringen på siden. Pga det så
   * inluderer vi en usynlig duplikat, slik at innholdet på siden ikke blir vist feil.
   */

  return (
    <div className="z-0 min-h-screen flex flex-col items-center">
      <div className="fixed left-0 right-0 top-0 z-20 flex justify-center bg-gradient-to-r from-gradient-left to-gradient-right">
        <div className="max-w-3xl w-full">
          <TopBar />
        </div>
      </div>
      <div className="invisible">
        <TopBar />
      </div>
      <div className="flex grow max-w-3xl w-full">
        <div className="relative flex flex-col grow ">{children}</div>
      </div>
      <div className="fixed left-0 right-0 bottom-0 z-20 flex justify-center">
        <div className="max-w-3xl w-full">
          <NavBar />
        </div>
      </div>
      <div className="invisible">
        <NavBar />
      </div>
    </div>
  );
}
