// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blogs from "./Component/Blogs";
import Home from "./Component/Home";
import Authors from "./Component/Authors";
import ErrorPage from "./Component/ErrorPage";
import Category from "./Component/Category";
import MyPosts from "./Component/MyPosts";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/LogIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
         path: "/", 
         element: <Home />
      },
      {
        path:'/blog/:id',
        element:<Blogs />

      },{
        path:'/authors',
        element:<Authors />

      },{
        path:'/category',
        element:<Category />
      },{
        path:'/myposts',
        element:<MyPosts />
      },{
        path:'/signup',
        element:<SignUp />
      },{
        path:'/login',
        element:<LogIn />
      }
        
        ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
     <RouterProvider router={router}/>
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
