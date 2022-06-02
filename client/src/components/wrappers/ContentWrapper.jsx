import React, { useContext } from "react";
import { TopBar } from "../ui/TopBar";
import { NavBar } from "../ui/NavBar";
import DeviceContext from "../../contexts/device-context";

export function ContentWrapper({ children }) {
  const { isMobile } = useContext(DeviceContext);

  /*
   * Det er dobbelt opp med <TopBar /> og <NavBar /> siden en av de er fixed i posisjon.
   * Dvs. den taes ikke med i den relative posisjoneringen på siden. Pga det så
   * inluderer vi en usynlig duplikat, slik at innholdet på siden ikke blir vist feil.
   */

  if (isMobile) {
    return (
      <div className="z-0 min-h-screen">
        <>
          <div className="fixed left-0 right-0 top-0 z-20">
            <TopBar />
          </div>
          <div className="invisible">
            <TopBar />
          </div>
        </>
        {children}
        <>
          <div className="fixed left-0 right-0 bottom-0 z-20">
            <NavBar />
          </div>
          <div className="invisible">
            <NavBar />
          </div>
        </>
      </div>
    );
  }

  if (!isMobile) {
    return <>{children}</>;
  }
}
