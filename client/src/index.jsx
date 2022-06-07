import React from "react";
import ReactDOM from "react-dom";
import DeviceContext from "./contexts/device-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { navList } from "./navigation-config";
import { Global } from "./components/wrappers/Global";

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
          <Global>
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
          </Global>
        </BrowserRouter>
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
