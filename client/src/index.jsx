import * as ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import DeviceContext from "./contexts/device-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MatchingStudents } from "./pages/matchingStudents";
import { AllStudents } from "./pages/allStudents";
import { AllGroups } from "./pages/allGroups";
import { Chat } from "./pages/chat";
import { CreateUser } from "./pages/createUser";
import { CreateGroup } from "./pages/createGroups";
import { ListStudents } from "./listStudents";
import { Dashboard } from "./pages/Dashboard";
import { FrontPage } from "./pages/frontPage";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import React from "react";

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
            <div className="fixed left-0 right-0 top-0">
              <TopBar />
            </div>
          )}
          <div className="relative">
            <Routes>
              <Route
                path={"/"}
                element={isMobile ? <Dashboard /> : <FrontPage />}
              />
              <Route
                path={"/AllMatchingStudents"}
                element={<MatchingStudents />}
              />
              <Route path={"/AllStudents"} element={<AllStudents />} />
              <Route path={"/AllGroups"} element={<AllGroups />} />
              <Route path={"/Chat"} element={<Chat />} />
              <Route path={"/CreateUser"} element={<CreateUser />} />
              <Route path={"CreateGroup"} element={<CreateGroup />} />
              <Route path={"/students"} element={<ListStudents />} />
            </Routes>
            {isMobile && (
              <div className="fixed left-0 right-0 bottom-0">
                <Navbar />
              </div>
            )}
          </div>
        </BrowserRouter>
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
