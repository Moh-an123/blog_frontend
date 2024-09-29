import { Outlet } from "react-router-dom";
import {  useState } from "react";

import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
 export default function App() {
      let f=false, c={name:'',password:'',email:''};
      if(localStorage.getItem("data")){
           f=true;
           const b=JSON.parse(localStorage.getItem("data"));
        c= {name:b.name,password:b.password,email:b.email};
          }
          console.log(c);
          console.log("f",f);
  const [Log,setLog]=useState(f);
  const [checklog,setChecklog]=useState(false);
  const [userData,setUserdata]=useState(c);
//   const setName=(value)=>{
//     setLog(value);
//     console.log(Log);
//   }
//  const setCheck=()=>{
//    setChecklog(true);
//    console.log("true");
//   }
  const setcheck=(a,b,c)=>{
    console.log(a,b,c);
    setUserdata({name:a,password:b,email:c});
    localStorage.setItem("data",JSON.stringify(userData));
    setLog(true);
    console.log(Log);
    console.log(userData);
    console.log(JSON.parse(localStorage.getItem("data")));
  }
  // const setlog=()=>{
  //   setLog(true);
  // }
  return (<>
{/* <CContext.Provider value={{Log:Log,user:userData,setcheck:setcheck}}> */}
<Header  Log={Log} user={userData} setcheck={setcheck}/>
<Outlet context={{Log,userData,setcheck,setLog}}/>
   {/* {Log===true?<LogIn Log={true}/>:Log===false?<LogIn Log={false}/>: <Outlet />} */}
  {/* <Sample /> */}
  <Footer />
{/* </CContext.Provider> */}
 
  </>
  );
};