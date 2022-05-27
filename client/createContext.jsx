import React from "react";
import {postJSON} from "./postJSON";

export const createContext =React.createContext( {

    async userContext(createUser){
        return await postJSON("/api/students", createUser);
    },

    async groupContext(createGroup){
        return await postJSON("/api/groups", createGroup)
    }
});