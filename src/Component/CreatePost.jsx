import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Input, Select } from "@nextui-org/react";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server
    console.log({ title, body, image, category });
  };

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <form
        className="w-[95%] sm:w-[80%] lg:w-[75%] resize-x p-4 border-1 border-slate-400 rounded-xl"
        // onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold mb-4">Create New Post</h1>

        <div className="mb-4">
          <Input
            type="text"
            value={title}
            name="title"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <ReactQuill
            value={body}
            onChange={setBody}
            modules={CreatePost.modules}
            formats={CreatePost.formats}
            placeholder="Write your post here..."
            theme="snow"
          />
        </div>

     

        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select Category"
          >
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};
CreatePost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};

CreatePost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

export default CreatePost;
