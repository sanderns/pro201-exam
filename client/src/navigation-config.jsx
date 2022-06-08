import { Dashboard } from "./pages/Dashboard";
import { MatchingStudents } from "./pages/MatchingStudents";
import { AllStudents } from "./pages/AllStudents";
import { AllGroups } from "./pages/AllGroups";
import { Chat } from "./pages/Chat";
import { CreateUser } from "./pages/CreateUser";
import { CreateGroup } from "./pages/CreateGroups";
import { ListContacts } from "./pages/ListContacts";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { ChatLive } from "./pages/ChatLive";

export const navList = [
  {
    path: "/",
    element: <Dashboard />,
    mobileElement: false,
    dashboard: false,
    navbar: {
      icon: <PersonSearchOutlinedIcon fontSize="large" />,
      text: "Search",
      id: 0,
    },
    frontpage: false,
    canBack: false,
  },
  {
    path: "/students/recommended",
    element: <MatchingStudents />,
    mobileElement: false,
    dashboard: { text: "List matching students" },
    navbar: false,
    frontpage: { text: "List all matching students" },
    canBack: { path: "/" },
  },
  {
    path: "/students/all",
    element: <AllStudents />,
    mobileElement: false,
    dashboard: { text: "List students wanting groups" },
    navbar: false,
    frontpage: { text: "List all students" },
    canBack: { path: "/" },
  },
  {
    path: "/students/add",
    element: <CreateUser />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
    frontpage: { text: "Add student" },
    canBack: false,
  },
  {
    path: "/groups/all",
    element: <AllGroups />,
    mobileElement: false,
    dashboard: { text: "List groups wanting students" },
    navbar: false,
    frontpage: { text: "List all groups" },
    canBack: { path: "/" },
  },
  {
    path: "/groups/add",
    element: <CreateGroup />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
    frontpage: { text: "Add group" },
    canBack: false,
  },
  {
    path: "/chat",
    element: <Chat />,
    mobileElement: false,
    dashboard: false,
    navbar: {
      icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />,
      text: "Chat",
      id: 1,
    },
    frontpage: { text: "Chat" },
    canBack: false,
  },
  {
    path: "/chat/live",
    element: <ChatLive />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
    frontpage: false,
    canBack: { path: "chat" },
  },
  {
    path: "/contacts",
    element: <ListContacts />,
    mobileElement: false,
    dashboard: false,
    navbar: {
      icon: <PeopleAltOutlinedIcon fontSize="large" />,
      text: "Contacts",
      id: 2,
    },
    frontpage: false,
    canBack: false,
  },
];
