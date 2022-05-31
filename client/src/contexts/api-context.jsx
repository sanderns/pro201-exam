import React from "react";
import { postJSON } from "../api/postJSON";

export const apiContext = React.createContext({
  async userContext(createUser) {
    return await postJSON("/api/students", createUser);
  },

  async groupContext(createGroup) {
    return await postJSON("/api/groups", createGroup);
  },
});
