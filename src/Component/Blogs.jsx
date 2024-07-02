import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "./../assets/medium.jpg";
import { GoArrowLeft } from "react-icons/go";
import images from "./../../Data.json"
const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [image,setImage]=useState(images);
  console.log(id);
  // console.log(im);
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // alert('Failed to fetch projects. Check console for error details.')
      }
    };
    fetchData(id);
  }, []);
  console.log(data);
  if (loading)
    return <h1 className="h-dvh mx-auto text-center pt-60">Loading...</h1>;
  return (
    <>
      
      {data && (
        <Card className=" w-1/2 my-10 origin-center mx-auto flex flex-col ">
          <CardHeader className="">
            <Button>
              <Link to="/" className="text-slate-50">
                <GoArrowLeft />
              </Link>
            </Button>
            <h2 className="pl-8">{data.title}</h2>
          </CardHeader>
          <CardBody>
            <p>{data.body}</p>
            <div className="flex justify-center items-center">
              <Image alt="image" src={images.img0} className="" />
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Blogs;
