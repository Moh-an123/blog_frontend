import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <NavbarContent justify="start">
      <NavbarBrand className="mr-4">
        <Link to="/hb">
          <h1 className=" text-slate-50">HB</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className=" hidden sm:flex md:flex lg:flex xl:flex gap-6">
        <NavbarItem>
          <Link
            color="foreground"
            to="/"
            className=" hover:text-orange-300 hover:scale-110 hover:border-b-2 transition duration-500 "
          >
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            to="/category"
            className=" hover:text-orange-300 hover:scale-110 hover:border-b-2 transition duration-500 "
          >
            Category
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            to="/myposts"
            className=" hover:text-orange-300 hover:scale-110 hover:border-b-2 transition duration-500 "
          >
            Your Post
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            to="/createpost"
            className=" hover:text-orange-300 hover:scale-110 hover:border-b-2 transition duration-500 "
          >
            CreatePost
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NavbarContent>
  );
};

export default Tabs;
