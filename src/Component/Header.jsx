import React, { createContext, useContext, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  AvatarIcon,
  Chip,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import Esample from "./Esample";
import { SearchIcon } from "./SearchIcon";
import LogIn from "./LogIn";
import CContext from "./CContext";
const Header = ({children}) => {
  // console.log(children);
  const [islog, setIslog] = useState(false);
  const [btn, setBtn] = useState(null);
  const [e, setE] = useState({ name: "Mohan", password: "something" });
  // const Loguser=createContext();
  const User = () => {
    console.log("true");
    setIslog(true);
  };
  const {Log,setLog} =useContext(CContext);
  console.log(Log);
  // console.log(Log);
  return (
    <>
    
        <Navbar
          isBordered
          className="  sm:w-full md:w-4/5 lg:w-3/4 xl:w-8/12 m-auto rounded-3xl h-12 bg-slate-50/15 text-slate-50 backdrop-blur-lg top-2"
        >
          {/* <Button onClick={setName}>set{name}</Button> */}
          {/* {
                  btn&& <div className='w-full max-h-dvh p-10 rounded-3xl flex justify-center items-center absolute  bg-black top-10 z-50  w-full '>
                  <form action="get" className='w-1/3 p-16 border-1 border-slate-400  rounded-xl'>
                      <h1 className=' text-center'>Log In</h1>
                        <Input type='text' value=""  label='Username' className='py-4'/>
                        <Input type='password' value="" label='password' className='py-4' />
                        <Button className=' object-center'>Submit</Button>
                  </form>
               </div>
            } */}
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
            </NavbarContent>
          </NavbarContent>
          <NavbarContent as="div" className="items-center gap-10" justify="end">
            <Input
              classNames={{
                base: `max-w-full sm:max-w-[10rem] h-10 hidden sm:block md:block lg:block xl:block`,
                // mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 rounded-full dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
            <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
              <SearchIcon />
            </div>

            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  icon={<AvatarIcon />}
                  classNames={{
                    base: `
      bg-gradient-to-br from-[#FFB457] to-[#FF705B] 
      w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10 
       aspect-ratio-1 
      flex items-center justify-center rounded-3xl
    `,
                    icon: `
      text-slate/80 
      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
    `,
                  }}
                />
              </DropdownTrigger>
              {islog ? (
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  {/* <DropdownItem key="team_settings">Team Settings</DropdownItem> */}
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  {/* <DropdownItem key="system">System</DropdownItem> */}
                  {/* <DropdownItem key="configurations">Configurations</DropdownItem> */}
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              ) : (
                <DropdownMenu
                  aria-label="Profile Actions"
                  variant="flat"
                  color="secondary"
                  className="w-44 "
                >
                  <DropdownItem
                    key="help_and_feedback"
                    color="primary"
                    isBordered
                  >
                    <Button onClick={()=>setLog(false)}>Signup</Button>
                  </DropdownItem>
                  <DropdownItem key="loginn" isBordered>
                    {/* <Link
                      to="/login"
                      state={{ message: "hello header" }}
                      className="p-4"
                    >
                      LogIn
                    </Link> */}
                    <Button onClick={()=>setLog(true)}>Login</Button>
                    {/* <LogIn  name={e.name}/> */}
                  </DropdownItem>
                  {/* <DropdownItem>
              <Button onClick={(e)=>{e.preventDefault(); setBtn(true);}} className=" relative">LogIn</Button>
              </DropdownItem> */}
                </DropdownMenu>
              )}
            </Dropdown>
          </NavbarContent>
        </Navbar>
     
    </>
  );
};

export default Header;
