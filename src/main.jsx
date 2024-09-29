// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Blogs from "./Component/Blogs";
import Home from "./Component/Home";
import Authors from "./Component/Authors";
import ErrorPage from "./Component/Layout/ErrorPage";
import Category from "./Component/Category";
import MyPosts from "./Component/MyPosts";
import SignUp from "./Component/SignupPages/SignUp";
import LogIn from "./Component/SignupPages/LogIn";
import Samp from "./Component/components/Samp";
import CreatePost from "./Component/CreatePost";
import Profile from "./Component/Profile";
import Landingpage from "./Component/Landingpage";
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
        path:'/category/:category',
        element:<Home />
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
      },
      {
        path:'/category/:id',
        element:<Samp />
      },
      {
        path:'/myposts',
        element:<MyPosts />
      },{
        path:'/signup',
        element:<SignUp />
      },{
        path:'/login',
        element:<LogIn />
      },{
        path:'/createpost',
        element:<CreatePost />
      },
      {
        path:'/profile',
        element:<Profile />
      },{
        path:'/hb',
        element:<Landingpage />
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
