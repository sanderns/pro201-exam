import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ListStudents} from "./listStudents";
import {FrontPage} from "./frontPage";


function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/students"} element={<ListStudents />}/>
                <Route path={"/"} element={<FrontPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Application/>, document.getElementById("app"));