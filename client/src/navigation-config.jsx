import { FrontPage } from "./pages/FrontPage";
import { Dashboard } from "./pages/Dashboard";
import { MatchingStudents } from "./pages/MatchingStudents";
import { AllStudents } from "./pages/AllStudents";
import { AllGroups } from "./pages/AllGroups";
import { Chat } from "./pages/Chat";
import { CreateUser } from "./pages/CreateUser";
import { CreateGroup } from "./pages/CreateGroups";
import { ListStudents } from "./pages/listStudents";
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
  },
  {
    path: "/students/recommended",
    element: <MatchingStudents />,
    mobileElement: false,
    dashboard: { text: "List all matching students" },
    navbar: false,
  },
  {
    path: "/students/all",
    element: <AllStudents />,
    mobileElement: false,
    dashboard: { text: "List all students" },
    navbar: false,
  },
  {
    path: "/groups/all",
    element: <AllGroups />,
    mobileElement: false,
    dashboard: { text: "List all groups" },
    navbar: false,
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
  },
  {
    path: "/students/add",
    element: <CreateUser />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
  },
  {
    path: "/groups/add",
    element: <CreateGroup />,
    mobileElement: false,
    dashboard: false,
    navbar: false,
  },
  {
    path: "/students",
    element: <ListStudents />,
    mobileElement: false,
    dashboard: false,
    navbar: {
      icon: <PeopleAltOutlinedIcon fontSize="large" />,
      text: "Contacts",
    },
  },
];
