import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReelFeed from "../../components/ReelFeed";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", {
        withCredentials: true,
      })
      .then((response) => {
        setVideos(response.data.foodItems || []);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []); // ✅ ONLY RUN ONCE

   async function likeVideo(item) {

        const response = await axios.post("http://localhost:3000/api/food/like", { foodId: item._id }, {withCredentials: true})

        if(response.data.like){
            console.log("Video liked");
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount + 1 } : v))
        }else{
            console.log("Video unliked");
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, likeCount: v.likeCount - 1 } : v))
        }
        
    }
    //  async function saveVideo(item) {
    //     const response = await axios.post("http://localhost:3000/api/food/save", { foodId: item._id }, { withCredentials: true })
        
    //     if(response.data.save){
    //         setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: v.savesCount + 1 } : v))
    //     }else{
    //         setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: v.savesCount - 1 } : v))
    //     }
    // }
const handleSave = async (item) => {
  try {
    await axios.post(
      "http://localhost:3000/api/food/save",
      { foodId: item._id },
      { withCredentials: true }
    );

    setVideos(prev =>
      prev.map(v => {
        if (v._id === item._id) {
          const isSaved = v.isSaved || false;

          return {
            ...v,
            isSaved: !isSaved,
            savesCount: isSaved
              ? Math.max(0, (v.savesCount || 1) - 1)
              : (v.savesCount || 0) + 1
          };
        }
        return v;
      })
    );

  } catch (err) {
    console.log(err);
  }
};

  return (
   <ReelFeed
   items={videos}
   onLike={likeVideo}
   onSave={handleSave}
   emptyMessage="no videos availabe"
   />
  );
};

export default Home;