import { Button, Divider, Input } from '@nextui-org/react'
import React, {  useState,useContext } from 'react'
import { useLocation} from 'react-router-dom'
import SignUp from './SignUp';
import Esample from './Esample';
const LogIn = () => {
  // const[a,b]=[...props];
  // console.log(props);
  const [isactive,setisActive]=useState(false);
  const[logindata,setLogindata]=useState({name:'',password:''});
  // const[name,setname]=useState('');
  // const[password,setPassword]=useState('');
  // const user=useContext(Esample);
  const location=useLocation();
  const {state}=location;
  const message=state?.message;
  // const setIslog=state?.setIslog;
  console.log(state);
  // message="hello"
  // console.log(user.name);
 const handleClick=()=>{
    //  user.User();
// console.log(logindata);
 }
  return (
    <div className=' flex flex-col justify-center items-center py-10'>
      <div className='flex flex-row di mt-8 mb-4 ' >
      <h1 className={` text-center px-2 mr-2 cursor-pointer  ${!isactive?' border-b-1':''}`} onClick={()=>{setisActive(false)}}>Log In</h1>
     <Divider  orientation="vertical" className='mx-2 text-slate-50  bg-white'/>
     {/* <hr/> */}
      <h1 className={`pl-4 text-center cursor-pointer pr-2 ${isactive?' border-b-1':''}`}  onClick={()=>{setisActive(true)}}>SignUp</h1>
      </div>
      {!isactive&& <form action="get" className='w-1/3 p-16 border-1 border-slate-400  rounded-xl '>
      <h1 className='text-center text-3xl font-bold border-b-1 mx-auto'> Login form</h1>
             <Input type='text' value={logindata.name} label='Username' className='py-4' onValueChange={(value)=>{setLogindata({name:value,password:logindata.password})}}/>
             <Input type='password' value={logindata.password} label='password' className='py-4' onValueChange={(e)=>{ setLogindata({name:logindata.name,password:e})}}/>
             <Button className=' object-center' onClick={(e)=>{e.preventDefault(); handleClick()}}>Submit</Button>
             <Button onClick={ ''}>Login{message&&<p>{message}</p>}</Button>
       </form>}
       {isactive&&<SignUp/>}
    </div> 
  )
}

export default LogIn
