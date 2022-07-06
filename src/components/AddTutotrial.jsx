import React from "react";
import { useState } from "react";

const AddTutotrial = ({ postData }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title: title, description: desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger display-3">Tutorial List</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter Your Tutorial"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            placeholder="Enter Your Description"
          />
        </div>

        <button type="submit" className="btn btn-success my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutotrial;
