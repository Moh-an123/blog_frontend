import React, { useEffect, useState } from "react";
import Data from "../Json/Data.json";
import img1 from "./../assets/medium3.jpg";
import axios from "axios";
import DisplayBlogs from "./DisplayBlogs";

const MyPosts = () => {
  const [data, setData] = useState(Data);
  //  const handleUser=async()=>{
  //        try{
  //         const respone=await axios.post('http://localhost:3003/createauthor',{author_id:102});
  //       console.log(respone.data);

  //       }catch(error){
  //         console.log(error);

  //        }
  //  }
  const value = JSON.parse(localStorage.getItem("data"));
  console.log(value.author_id);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/getauthorpost/${value.author_id}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (data && data.length > 0)
    return (
      <div className="pt-16">
        {/* <button onClick={handleUser}>Click</button> */}
        name:
        <DisplayBlogs data={{ posts: data }} />
      </div>
    );
  else return <>Not found</>;
};
export default MyPosts;
