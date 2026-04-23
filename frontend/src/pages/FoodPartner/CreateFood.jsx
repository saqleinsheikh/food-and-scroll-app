import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateFood = () => {
  const [video, setVideo] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("video", video);
      formData.append("name", name);
      formData.append("description", description);

      const res = await axios.post(
        "http://localhost:3000/api/food",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("SUCCESS:", res.data);
  navigate("/")
    } catch (err) {
      console.log("ERROR:", err);
    }
  
    // setVideo("");
    // setName("");
    // setDescription("")
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
      >

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-center">
          Create Food
        </h1>

        {/* VIDEO INPUT */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm outline-none"
          />
        </div>

        {/* NAME */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Food Name</label>
          <input
            type="text"
            placeholder="Enter food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm outline-none"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Description</label>
          <textarea
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm outline-none resize-none"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
        >
          Upload Food
        </button>

      </form>
    </div>
  );
};

export default CreateFood;