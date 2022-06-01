import React from "react";
import ReactDOM from "react-dom";
import DeviceContext from "./contexts/device-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { navList } from "./navigation-config";
import { ContentWrapper } from "./components/wrappers/ContentWrapper";

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
          <ContentWrapper>
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
          </ContentWrapper>
        </BrowserRouter>
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
