import React from "react";
import {postJSON} from "./postJSON";

export const createUserContext =React.createContext( {

    async userContext(createUser){
        return await postJSON("/api/students", createUser);
    }
});