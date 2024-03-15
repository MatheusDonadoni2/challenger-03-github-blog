import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/home";
import { HeaderLayout } from "./_layouts/headerLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
