import * as ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import DeviceContext from "./contexts/device-context";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { NavCard } from "./components/NavCard";
import { StudentCard } from "./components/StudentCard";

function Application() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="font-regular">
      <DeviceContext.Provider
        value={{
          isMobile: isMobile,
        }}
      >
        <StudentCard />
        {/*<BrowserRouter>*/}
        {/*  <main>*/}
        {/*    <Routes>*/}
        {/*      <Route path={"/"} element={<FrontPage />} />*/}
        {/*      <Route*/}
        {/*        path={"/AllMatchingStudents"}*/}
        {/*        element={<MatchingStudents />}*/}
        {/*      />*/}
        {/*      <Route path={"/AllStudents"} element={<AllStudents />} />*/}
        {/*      <Route path={"/AllGroups"} element={<AllGroups />} />*/}
        {/*      <Route path={"/students"} element={<ListStudents />} />*/}
        {/*    </Routes>*/}
        {/*  </main>*/}
        {/*</BrowserRouter>*/}
      </DeviceContext.Provider>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
