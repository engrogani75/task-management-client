import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import NewTask from "../Dashboard/NewTask";
import PreTask from "../Dashboard/PreTask";
import ToDoList from "../Dashboard/ToDoList";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },


        {
          path: "/login",
          element: <Login></Login>,
        },

        {
          path: "/registation",
          element: <Registation></Registation>,
        },

      ]
    },

    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "new-task",
          element: <NewTask></NewTask>,
        },

        {
          path: "pre-task",
          element: <PreTask></PreTask>,
        },
        {
          path: "todo-list",
          element:<ToDoList></ToDoList>,
        },

        
      ]
    },



    
     
  ]);