import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'


// =============================
// REELS / TIKTOK STYLE HOME PAGE
// =============================
// FIXES APPLIED:
// ❌ Removed Tailwind line-clamp plugin (causing error in Vite)
// ✅ Used pure CSS (no plugin needed)
// ✅ No config required

const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc: "Delicious burger with cheesy layers and crispy fries combo available now",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    desc: "Hot pizza loaded with toppings and extra cheese for your cravings",
  },
];

const Home=()=> {
const [videos,setVideos] = useState([])
const videoRefs = useRef(new Map())
const containerRef = useRef(null)

  useEffect(() => { 
 axios.get("http://localhost:3000/api/food",{withCredentials:true})
 .then(response=>{
  setVideos(response.data.foodItems)
 },[videos])
  
})
  
  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
      {videos.map((item) => (
        <div key={item._id} className="h-screen w-full snap-start relative">
          {/* VIDEO */}
          <video
            src={item.video}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* OVERLAY */}
          <div className="absolute bottom-10 left-4 right-4 text-white">
            {/* DESCRIPTION (2 lines using pure CSS) */}
            <p
              className="text-sm mb-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </p>

            {/* BUTTON */}
            <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// =============================
// BASIC TEST CASES (MANUAL)
// =============================
// 1. Scroll → video should snap to full screen
// 2. Only one video visible at a time
// 3. Description should not exceed 2 lines
// 4. Button should stay at bottom overlay
// 5. Works without any Tailwind plugin

// =============================
// NOTE
// =============================
// If you still face issues, tell me:
// - Are you using Vite + React or Vite + TS?
// - I'll adjust exactly for your setup


export default Home