import * as ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ListStudents} from "./listStudents";


function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/students"} element={<ListStudents />}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Application/>, document.getElementById("app"));