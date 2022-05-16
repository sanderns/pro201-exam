import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ListStudents} from "./pages/listStudents";
import {FrontPage} from "./pages/frontPage";
import {MatchingStudents} from "./pages/matchingStudents";
import {AllStudents} from "./pages/allStudents";
import {AllGroups} from "./pages/allGroups";


function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/AllMatchingStudents"} element={<MatchingStudents/>}/>
                <Route path={"/AllStudents"} element={<AllStudents/>}/>
                <Route path={"/AllGroups"} element={<AllGroups/>}/>
                <Route path={"/students"} element={<ListStudents />}/>

            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Application/>, document.getElementById("app"));