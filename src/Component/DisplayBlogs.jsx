import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

function DisplayBlogs(props) {
  const [data, setData] = useState(props.data);
  const [newData, setNewData] = useState(6);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const loadMorePosts = () => {
    setNewData(newData + 6);
    setLoaded(false);
    setTimeout(() => setLoaded(true), 100);
  };

  const postsToDisplay = data.posts.slice(0, newData);

  const postElements = postsToDisplay.map((post) => (
    <li
      key={post.post_id}
      className={`h-[450px] transform transition-transform duration-500 ${
        loaded
          ? "translate-x-0 translate-y-0 opacity-100"
          : "-translate-x-5 translate-y-5 "
      }`}
    >
      <Link
        to={`/blog/${post.post_id}`}
        className="flex flex-col text-slate-50"
      >
        <Card className="py-1 scrollbar-hide rounded-xl hover:box">
          <CardHeader className="block">
            <h1 className="line-clamp-1">{post.post_title}</h1>
            <h4>#{post.category}</h4>
          </CardHeader>
          <CardBody>
            <div className="line-clamp-3">
              <p className="basis-1/2">{post.post_body}</p>
            </div>
          </CardBody>
          <CardFooter className="w-full mx-auto text-center content-center justify-center">
            <Image
              alt="Card background"
              className="object-contain rounded-xl overflow-y-hidden scrollbar-hide text-center hover:scale-x-110"
              src={post.image}
              width={270}
              height={230}
            />
          </CardFooter>
        </Card>
      </Link>
    </li>
  ));

  return (
    <div className="p-4 scroll-p-16 scroll-smooth">
      <ul className="justify-center gap-8 mx-8 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {postElements}
      </ul>
      {newData < data.posts.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={loadMorePosts} className="bg-orange-600 text-center">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default DisplayBlogs;
