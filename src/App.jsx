import { Outlet } from "react-router-dom";
import {  useState } from "react";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import LogIn from "./Component/LogIn";
import CContext from "./Component/CContext";
import SignUp from "./Component/SignUp";

 export default function App() {
  const [Log,setLog]=useState(null);
  const setName=(value)=>{
    setLog(value);
    console.log(Log);
  }
  return (<>
<CContext.Provider value={{Log:Log,setLog:setLog}}>
<Header />
   {Log===true?<LogIn />:Log===false?<SignUp/>: <Outlet />}
  {/* <Sample /> */}
  <Footer />
</CContext.Provider>
 
  </>
  );
};