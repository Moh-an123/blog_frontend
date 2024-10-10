import React, { useState, useEffect, useContext, useRef } from "react";
import Displayblogs from "./DisplayBlogs";
import { CircularProgress } from "@nextui-org/react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
function Home() {
  const { Log, userData, setcheck } = useOutletContext();
  console.log(userData);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const iteration = useRef(0);
  useEffect(() => {
    iteration.current = iteration.current + 1;
    console.log(iteration);

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/blogdata");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
  if (data && data.length > 0) 
    return <Displayblogs data={{ posts: data }} />;

  return <h1 className=" mt-2"> No Posts Available</h1>;
}

export default Home;
