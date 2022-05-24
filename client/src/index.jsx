import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ListStudents } from "./pages/listStudents";
import { FrontPage } from "./pages/frontPage";
import { MatchingStudents } from "./pages/matchingStudents";
import { AllStudents } from "./pages/allStudents";
import { AllGroups } from "./pages/allGroups";

function Application() {
  return (
    <div className="font-regular">
      <BrowserRouter>
        <header>
          <Link to={"/"}>Front page</Link>
          <Link to={"/AllMatchingStudents"}>List articles</Link>
          <Link to={"/AllStudents"}>Add new article</Link>
          <Link to={"/AllGroups"}>Login</Link>
          <div className="menu-divider" />
        </header>
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
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
