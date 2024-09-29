import React, { createContext } from 'react'


 const CContext=createContext({Log:null,user:{name:null,passeord:null,email:null},  setcheck:(a,b,c)=>{}});
 export default CContext;