import React, { useState, useEffect } from "react";
import Shome from "./Shome";
import data1 from './Posts.json'
import { CircularProgress } from "@nextui-org/react";
function Home() {
  
  const [data, setData] = useState(data1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [newData,setNewdata]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="pt-14 w-full h-dvh flex justify-center items-center"><CircularProgress /></div>;
  }

  // if (error) {
  //   return <div className="pt-14">Error: {error}</div>;
  // }
  console.log("hello");
if(data.posts&&data.posts.length>0)
  return <Shome data={data} />;
return(<h1> I am Undone</h1>)
}

export default Home;
