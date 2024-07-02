import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
// import images from '../../Data.json'
import {Link} from 'react-router-dom'
import images from "./../assets/medium1.jpg"
function Shome(props) {
  const [data, setData] = useState(props.data);
  const [newData, setNewdata] = useState(9);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const element = data.posts && data.posts.length > 0 ? (
    data.posts.map(
      (post) =>
        post.id <= newData && (
          <li
            key={post.id}
            className={`flex flex-col justify-between w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 transform transition-transform duration-500 ${loaded ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-5 translate-y-5 "}`}
          >
            <Link to={`/blog/${post.id}`} className="flex flex-col text-slate-50">
              <Card className="py-8 min-h-84 max-h-84 scrollbar-hide rounded-xl hover:box">
                <CardHeader>
                  <h1 className="line-clamp-2">{post.body}</h1>
                </CardHeader>
                <CardBody className="text-center">
                  <div className="flex flex-row justify-center items-center">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl overflow-y-hidden scrollbar-hide text-center hover:scale-110 h-48"
                    src={images}
                    width={270}
                    height={200}
                  /></div>
                </CardBody>
              </Card>
            </Link>
          </li>
        )
    )
  ) : (
    <div>No posts available</div>
  );

  return (
    <div className="p-4 ">
      <ul className="flex flex-wrap justify-center gap-10">
        {element}
      </ul>
      {newData < data.posts.length && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => {
              setNewdata(newData + 6);
              setLoaded(false);
              setTimeout(() => setLoaded(true), 100); // Slight delay to reapply the transition
            }}
            className="bg-orange-600 text-center"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Shome;
