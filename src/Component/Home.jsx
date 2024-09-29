import React, { useState, useEffect, useContext } from "react";
import Displayblogs from "./DisplayBlogs";
// import data1 from './Posts.json'
import data2 from "../Json/Data.json";
import { CircularProgress } from "@nextui-org/react";
import CContext from "./components/CContext";
import { useOutletContext } from "react-router-dom";
function Home() {
  // const { log, user, setcheck } = useContext(CContext);
 const {Log,userData,setcheck}=useOutletContext();
    console.log(userData);
  const [data, setData] = useState(data2);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newData,setNewdata]=useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/posts");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const result = await response.json();
  //       // setData(result);s
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (isLoading) {
    return (
      <div className="pt-14 w-full h-dvh flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div className="pt-14">Error: {error}</div>;
  }
  // console.log(data.posts);
  if (data.posts && data.posts.length > 0) return <Displayblogs data={data} />;
  return <h1> I am Undone</h1>;
}

export default Home;
