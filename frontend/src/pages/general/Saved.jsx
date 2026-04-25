import axios from "axios";
import React from "react";
import ReelFeed from "../../components/ReelFeed";
import { useState } from "react";
import { useEffect } from "react";

const Saved = () => {
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/food/save", { withCredentials: true })
            .then(response => {
                const savedFoods = response.data.savedFoods.map((item) => ({
                    _id: item.food._id,
                    video: item.food.video,
                    description: item.food.description,
                    likeCount: item.food.likeCount,
                    savesCount: item.food.savesCount,
                    commentsCount: item.food.commentsCount,
                    foodPartner: item.food.foodPartner,
                }))
                setVideos(savedFoods)
            })
    }, [])

 const removeSaved = async (item) => {
        try {
            await axios.post("http://localhost:3000/api/food/save", { foodId: item._id }, { withCredentials: true })
            setVideos((prev) => prev.map((v) => v._id === item._id ? { ...v, savesCount: Math.max(0, (v.savesCount ?? 1) - 1) } : v))
        } catch {
            // noop
        }
    }

  return (

        <ReelFeed
            items={videos}
            onSave={removeSaved}
            emptyMessage="No saved videos yet."
        />


    // <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4">

    //   <h1 className="text-lg font-semibold mb-4">Saved</h1>

    //   <div className="grid grid-cols-3 gap-2">
    //     {savedVideos.map((item) => (
    //       <div
    //         key={item._id}
    //         className="aspect-square bg-gray-200 dark:bg-gray-800 overflow-hidden"
    //       >
    //         <video
    //           src={item.video}
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Saved;