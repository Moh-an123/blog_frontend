import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Shome from "./DisplayBlogs";
import { Button } from "@nextui-org/react";
import data2 from "../Json/Data.json";
const Category = () => {
  const {id}=useParams();
  const [type, setType] = useState("Programming");
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
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="flex flex-row justify-center items-center my-32 gap-20 px-10 flex-wrap">
        {category &&
          category.length > 0 &&
          category.map((d) => {
            return (
              <li key={`${d}+1`}>
                {/* <Link
                  to={`/category/${d.toLowerCase()}`}
                  className="bg-slate-50/15 text-slate-50 backdrop-blur-2xl px-6 rounded-xl py-2 hover:scale-110 hover:shadow-sm hover:backdrop-blur-md hover:shadow-slate-200"
                >
                  {d}
                </Link> */}
                <Button
                  onClick={() => {
                    setType(d);
                  }}
                >
                  {d}
                </Button>
              </li>
            );
          })}
      </ul>
      {data.posts && data.posts.length > 0 && (
        <Shome data={data} category={type} />
      )}
    </div>
  );
};

export default Category;
