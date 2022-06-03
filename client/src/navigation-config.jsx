import { FrontPage } from "./pages/FrontPage";
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

export const navList = [
  {
    path: "/",
    element: <FrontPage />,
    mobileElement: <Dashboard />,
    dashboard: false,
    navbar: {
      icon: <PersonSearchOutlinedIcon fontSize="large" />,
      text: "Search",
    },
    frontpage: false,
  },
  {
    path: "/students/recommended",
    element: <MatchingStudents />,
    mobileElement: false,
    dashboard: { text: "List matching students" },
    navbar: false,
    frontpage: { text: "List all matching students" },
  },
  {
    path: "/students/all",
    element: <AllStudents />,
    mobileElement: false,
    dashboard: { text: "List students wanting groups" },
    navbar: false,
    frontpage: { text: "List all students" },
  },
  {
    path: "/groups/all",
    element: <AllGroups />,
    mobileElement: false,
    dashboard: { text: "List groups wanting students" },
    navbar: false,
    frontpage: { text: "List all groups" },
  },
  {
    path: "/chat",
    element: <Chat />,
    mobileElement: false,
    dashboard: false,
    navbar: {
      icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />,
      text: "Chat",
    },
    frontpage: { text: "Chat" },
  },
  {
    path: "/students/add",
    element: <CreateUser />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
    frontpage: { text: "Add student" },
  },
  {
    path: "/groups/add",
    element: <CreateGroup />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
    frontpage: { text: "Add group" },
  },
  {
    path: "/students",
    element: <ListContacts />,
    mobileElement: false,
    dashboard: false,
    navbar: {
      icon: <PeopleAltOutlinedIcon fontSize="large" />,
      text: "Contacts",
    },
    frontpage: false,
  },
];
