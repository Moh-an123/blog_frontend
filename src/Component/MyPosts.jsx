import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import Data from "../Json/Data.json";
import img1 from "./../assets/medium3.jpg"; // Placeholder image
import { GoPencil } from "react-icons/go";

const MyPosts = () => {
  const [data, setData] = useState(Data);
  const [edit, setEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [img, setImg] = useState(img1);

  const handleEditClick = (post) => {
    setEdit(true);
    setSelectedPost(post);
  };

  const handleSaveClick = () => {
    setEdit(false);
    setSelectedPost(null);
    // Save logic here if necessary
  };

  const handleImageChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const view =
    data &&
    data.authors.map((author) => {
      if (author.author_id === 101) {
        return (
          <Card key={author.author_id}>
            <CardHeader>
              <h1>{author.author_name}</h1>
            </CardHeader>
            <CardBody>
              <p>{author.author_id}</p>
              <div className="grid grid-cols-3 gap-10 m-5">
                {data.posts
                  .filter((post) => post.author_id === author.author_id)
                  .map((post) => (
                    <div key={post.post_id} className=" rounded-3xl">
                      {!edit || selectedPost?.post_id !== post.post_id ? (
                        <Card>
                          <CardHeader className="flex justify-between">
                            <h1>{post.post_title}</h1>
                            {/* <GoPencil onClick={() => handleEditClick(post)} /> */}
                            <Button onClick={() => handleEditClick(post)}>
                              Edit
                              <GoPencil />
                            </Button>
                          </CardHeader>
                          <CardBody>
                            <p>{post.post_body}</p>
                            <Image alt="Post Image" src={img1} />
                          </CardBody>
                        </Card>
                      ) : (
                        <Card className="w-full col-span-2">
                          <CardHeader className="flex justify-center items-center">
                            <Input
                              label="Title"
                              type="text"
                              defaultValue={selectedPost.post_title}
                              width={300}
                              className="w-96 h-fit"
                            />
                          </CardHeader>
                          <CardBody className="flex justify-center items-center">
                            {/* <Input
                              type="text"
                              defaultValue={selectedPost.post_body}
                              className="w-96 py-10 h-fit text-wrap"
                            /> */}
                            {/* <h2>Content:</h2> */}
                            <Textarea
                            label='Content'
                              value={selectedPost.post_body}
                              className="py-10 "
                              variant="secondary"
                            />
                            <label>
                              <input
                                type="file"
                                onChange={handleImageChange}
                                className="hidden "
                              />
                              <Button
                                variant="flat"
                                color="danger"
                                isIconOnly
                                as="span"
                                className="w-40"
                              >
                                Change Image
                              </Button>
                            </label>
                            <Image src={img} width={400} height={400} />
                          </CardBody>
                          <CardFooter>
                            <Button color="success" onClick={handleSaveClick}>
                              Save
                            </Button>
                          </CardFooter>
                        </Card>
                      )}
                    </div>
                  ))}
              </div>
            </CardBody>
          </Card>
        );
      }
      return null;
    });

  return <div className="pt-16">{view}</div>;
};

export default MyPosts;
