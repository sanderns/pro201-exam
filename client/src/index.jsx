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
          {/*<header>*/}
          {/*  <Link to={"/"}>Front page</Link>*/}
          {/*  <Link to={"/AllMatchingStudents"}>List all matching students</Link>*/}
          {/*  <Link to={"/AllStudents"}>All students</Link>*/}
          {/*  <Link to={"/AllGroups"}>All groups</Link>*/}
          {/*  <div className="menu-divider" />*/}
          {/*</header>*/}
          <main>
            <Routes>
              <Route path={"/"} element={<Dashboard />} />
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
          </main>
        </BrowserRouter>
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
