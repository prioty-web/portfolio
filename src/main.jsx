import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainRoutes from "./shared/MainRoutes";
import Home from "./Home/Home";
import AllProjects from "./AllProjects";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    children:[
      {
        
          path:'/',
          element:<Home></Home>
        
      },
      {
        path:'project',
        element:<AllProjects></AllProjects>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
