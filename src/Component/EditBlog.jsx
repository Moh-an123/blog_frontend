import React from "react";

const EditBlog = (props) => {
  return (
    <div>
      <h1>{props.posttitle}</h1>
      <p>{props.postbody}</p>
    </div>
  );
};

export default EditBlog;
