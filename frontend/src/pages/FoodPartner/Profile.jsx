import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
const {id} = useParams()
const [profile, setProfile] = useState(null)
const [videos,setVideos] = useState([])

useEffect(()=>{
    axios.get(`http://localhost:3000/api/food-partner/${id}`,{
        withCredentials:true
    }).then(res=>{
        setProfile(res.data.foodPartner)
        setVideos(res.data.foodPartner.foodItems)
    })
},[id])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4">

      {/* TOP SECTION */}
      <div className="flex gap-4 items-center">

        {/* PROFILE IMAGE */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
  <img
    src="https://images.unsplash.com/photo-1776345013776-98646ac3332d?w=600&auto=format&fit=crop&q=60"
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>

        {/* NAME + ADDRESS */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">
            {profile?.name}
          </div>
          <div className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">
            {profile?.address}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="flex justify-around mt-6 text-center">

        <div>
          <p className="text-sm text-gray-500">Total Meals</p>
          <p className="text-lg font-semibold">{profile?.totalMeals}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Customers Served</p>
          <p className="text-lg font-semibold">{profile?.customerServed}</p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

      {/* VIDEO GRID */}
      <div className="grid grid-cols-3 gap-2">
        {videos.map((v) => (
            <div
              key={v.id}
              className="aspect-square bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm"
            >
              <video src={v.video} muted></video>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Profile;