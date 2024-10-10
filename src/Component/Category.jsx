import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import DisplayBlogs from "./DisplayBlogs";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import data2 from "../Json/Data.json";
import axios  from "axios";
import url from "../backendurl";
const Category = () => {
  const [data, setData] = useState(data2);

  const category = [
    "Programming",
    "Web Development",
    "Artificial Intelligence",
    "Data Science",
    "Technology",
    "Security",
    "Healthcare",
    "Business",
    "Ethics",
    "Finance",
  ];
  console.log(category);

  // const handleClick=async()=>{
  //   try{
  //     const response=await axios.get("http://localhost:3003/getcategory");
  //       console.log(response.data);
  //       setCat(response.data)
  //   }catch(error){
  //   console.log(error.message);
  // }
  // };
 useEffect(()=>{
  const fetchdata=async()=>{
  try {
    const response = await axios.get(`${url}/blogdata/${category[0]}`);
    console.log(response.data);
    setData(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchdata();
 },[])
  const handleCategory = async (d) => {
    console.log(d);
    setData();
    try {
      const response = await axios.get(`${url}/blogdata/${d}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <ul className="flex flex-row justify-center items-center my-32 gap-20 px-10 flex-wrap">
        {category &&
          category.length > 0 &&
          category.map((d) => {
            return (
              <li key={`${d}+1`}>
                <Link
                  to={`/category#${d.toLowerCase()}`}
                  className="bg-slate-50/15 text-slate-50 backdrop-blur-2xl px-6 rounded-xl py-2 hover:scale-110 hover:shadow-sm hover:backdrop-blur-md hover:shadow-slate-200"
                  onClick={() => handleCategory(d)}
                >
                  {d}
                </Link>
              </li>
            );
          })}
      </ul>
{/* <Button onClick={handleChange}>Change</Button> */}
      {data && data.length ? (
        <DisplayBlogs data={{ posts: data }} />
      ) : (
        <>No Posts Available</>
      )}
    </>
  );
};

export default Category;
