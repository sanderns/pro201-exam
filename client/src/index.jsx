import React from "react";
import ReactDOM from "react-dom";
import DeviceContext from "./contexts/device-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { navList } from "./navigation-config";

function Application() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="font-regular bg-purple-500">
      <DeviceContext.Provider
        value={{
          isMobile: isMobile,
        }}
      >
        <BrowserRouter>
          {isMobile && (
            <div className="fixed left-0 right-0 top-0 z-10">
              <TopBar />
            </div>
          )}
          <div className="z-0">
            <Routes>
              {navList.map(({ path, element, mobileElement }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    !mobileElement
                      ? element
                      : isMobile
                      ? mobileElement
                      : element
                  }
                />
              ))}
            </Routes>
          </div>
          {isMobile && (
            <div className="fixed left-0 right-0 bottom-0 z-10">
              <Navbar />
            </div>
          )}
        </BrowserRouter>
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
