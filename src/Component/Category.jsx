import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const category = [
    "Education",
    "Politics",
    "Sports",
    "Economics",
    " National Issues",
    "Technology",
    "Companies",
    "Election",
    "Stocks",
    "Natural Disaster",
    "Coutries",
    "Movies",
    "Entertainment",
  ];
  return (
    <div className="flex justify-center items-center">
      <ul className="flex flex-row justify-center items-center my-32 gap-20 px-10 flex-wrap ">
        {category &&
          category.length > 0 &&
          category.map((d) => {
            return (
              <li
                key={`${d}+1`}
                className="  bg-slate-50/15 text-slate-50 backdrop-blur-2xl px-6 rounded-xl py-2 hover:scale-110 hover:shadow-sm hover:backdrop-blur-md hover:shadow-slate-200  "
              ><Link color="secondary" to='/category'> {d}</Link>
               
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Category;
