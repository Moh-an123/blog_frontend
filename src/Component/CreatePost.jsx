import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import url from "../backendurl";
import { useOutletContext } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const { Log, userData, setcheck } = useOutletContext();

// console.log(userData);

  const handleInput = (e) => {
    setContent(e.currentTarget.innerHTML);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      post_title: title,
      post_body: content,
      category,
      image,
      author_id:userData.author_id,
      date: new Date().toISOString(), // Current date
    };
    console.log(postData);
    try {
      const response = await axios.post(
        `${url}/createblog`,
        postData
      );
      console.log(response.data.message);
      setTitle("");
      setCategory("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const applyStyle = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <form
        className="w-[95%] sm:w-[80%] lg:w-[75%] p-4 border-1 border-slate-400 rounded-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold mb-4">Create New Post</h1>

        <div className="mb-4">
          <Input
            type="text"
            accept="image/*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Post Title"
            label="Title"
            fullWidth
            required
          />
        </div>

      
        <div className="mb-4">
          <div className="mb-2 flex space-x-2">
            <Button auto onClick={() => applyStyle("bold")}>
              Bold
            </Button>
            <Button auto onClick={() => applyStyle("italic")}>
              Italic
            </Button>
            <Button auto onClick={() => applyStyle("underline")}>
              Underline
            </Button>
          </div>

          <div
            contentEditable
            className="min-h-[150px] p-4 border-1 border-slate-400 rounded-lg"
            onInput={handleInput}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>

        <div className="mb-4">
          <Input
            type="file"
            name="image"
            //label="Upload Image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt="Post preview"
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-slate-400 rounded w-full"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
