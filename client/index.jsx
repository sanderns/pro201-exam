import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {ListStudents} from "./pages/listStudents";
import {FrontPage} from "./pages/frontPage";
import {MatchingStudents} from "./pages/matchingStudents";
import {AllStudents} from "./pages/allStudents";
import {AllGroups} from "./pages/allGroups";
import {Chat} from "./pages/chat";
import {CreateUser} from "./pages/createUser";
import {CreateGroup} from "./pages/createGroups";


function Application() {
    return (
        <BrowserRouter>
            <header>
                <Link to={"/"}>Front page</Link>
                <Link to={"/AllMatchingStudents"}>List all matching students</Link>
                <Link to={"/AllStudents"}>All students</Link>
                <Link to={"/AllGroups"}>All groups</Link>
                <div className="menu-divider"/>
            </header>

            <main>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/AllMatchingStudents"} element={<MatchingStudents/>}/>
                <Route path={"/AllStudents"} element={<AllStudents/>}/>
                <Route path={"/AllGroups"} element={<AllGroups/>}/>
                <Route path={"/Chat"} element={<Chat/>}/>
                <Route path={"/CreateUser"} element={<CreateUser/>}/>
                <Route path={"CreateGroup"} element={<CreateGroup/>}/>
                <Route path={"/students"} element={<ListStudents />}/>
            </Routes>
            </main>
        </BrowserRouter>
    )
}

ReactDOM.render(<Application/>, document.getElementById("app"));