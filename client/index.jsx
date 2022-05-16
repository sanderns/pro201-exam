import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListStudents } from "./listStudents";
import { Typography } from "./components/Typography";

function Frontpage() {
  const elements = ["h1", "h2", "h3", "p1", "p2", "b1", "b2"];
  const weights = ["light", "regular", "bold"];

  return (
    <>
      {elements.map((element) =>
        weights.map((weight) => (
          <Typography element={element} weight={weight}>
            This is a {weight} {element}
          </Typography>
        ))
      )}
    </>
  );
}

function Application() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Frontpage />} />
          <Route path={"/students"} element={<ListStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
