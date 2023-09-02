"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
// import validateAdmin from "../validateAdmin";

const Create = ({ user, token }) => {
  const [state, setState] = useState({
    name: "",
    error: "",
    success: "",
    buttonText: "Create",
    image: "",
  });
  const [content, setContent] = useState("");
  const [imageUploadButtonName, setImageUploadButtonName] =
    useState("Upload image");

  const { name, success, error, image, buttonText } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value, error: "", success: "" });
  };

  const handleContent = (e) => {
    console.log(e);
    setContent(e);
    setState({ ...state, success: "", error: "" });
  };

  const handleImage = (event) => {
    let fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    setImageUploadButtonName(event.target.files[0].name);
    if (fileInput) {
      Resizer.imageFileResizer(
        event.target.files[0],
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          // console.log(uri);
          setState({ ...state, image: uri, success: "", error: "" });
        },
        "base64"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Creating" });
    console.table({ name, content, image });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/category`,
        { name, content, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("CATEGORY CREATE RESPONSE", response);
      setImageUploadButtonName("Upload image");
      setState({
        ...state,
        name: "",
        content: "",
        formData: "",
        buttonText: "Created",
        imageUploadText: "Upload image",
        success: `${response.data.name} is created`,
      });
    } catch (error) {
      console.log("CATEGORY CREATE ERROR", error);
      setState({
        ...state,
        buttonText: "Create",
        error: error.response.data.error,
      });
    }
  };

  const createCategoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Content</label>
      </div>
      <div className="form-group">
        <label className="btn btn-outline-secondary">
          {imageUploadButtonName}
          <input
            onChange={handleImage}
            type="file"
            accept="image/*"
            className="form-control"
            hidden
          />
        </label>
      </div>
      <div>
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div>
      <div>
        <div>
          <h1>Create category</h1>
          <br />
          {createCategoryForm()}
        </div>
      </div>
    </div>
  );
};

export default Create;
