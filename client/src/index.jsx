import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ListStudents } from "./pages/listStudents";
import { FrontPage } from "./pages/frontPage";
import { MatchingStudents } from "./pages/matchingStudents";
import { AllStudents } from "./pages/allStudents";
import { AllGroups } from "./pages/allGroups";
import { useMediaQuery } from "react-responsive";
import DeviceContext from "./contexts/device-context";

function Application() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="font-regular">
      <DeviceContext.Provider
        value={{
          isMobile: isMobile,
        }}
      >
        <BrowserRouter>
          <main>
            <Routes>
              <Route path={"/"} element={<FrontPage />} />
              <Route
                path={"/AllMatchingStudents"}
                element={<MatchingStudents />}
              />
              <Route path={"/AllStudents"} element={<AllStudents />} />
              <Route path={"/AllGroups"} element={<AllGroups />} />
              <Route path={"/students"} element={<ListStudents />} />
            </Routes>
          </main>
        </BrowserRouter>
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
