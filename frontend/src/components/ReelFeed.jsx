import React from 'react'
import { Link } from 'react-router-dom'

const ReelFeed = ({ items = [], onLike, onSave, emptyMessage = 'No videos yet.' }) => {
  return (
   <div className="h-screen bg-black text-white flex flex-col">

      {/* REELS */}
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        {items.map((item) => (
          <div key={item._id} className="h-screen snap-start relative">

            {/* VIDEO */}
            <video
              src={item.video}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* RIGHT SIDE ICONS */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 text-sm">

              <button 
              onClick={onLike ? () => onLike(item) : undefined}
              // onClick={likeVideo} 
              className="flex flex-col items-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
              </button>
<div>
    {item.likeCount ?? item.likesCount ?? item.likes ?? 0}
</div>
              <button
              onClick={onSave ? () => onSave(item) : undefined}
              className="flex flex-col items-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
                    </svg>
              </button>
              <div>
                  {/* {item.savedCount ?? item.savedCount ?? item.savedCount ?? 0} */}
                  {item.savesCount ?? 0}
              </div>

              <div className="flex flex-col items-center">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    </svg>
                <span>{item.commentsCount || 0}</span>
              </div>

            </div>

            {/* DESCRIPTION + BUTTON */}
            <div className="absolute bottom-10 left-4 right-4">
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

              <Link
                to={`/food-partner/${item.foodPartner}`}
                className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium"
              >
                Visit Store
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM NAV */}
      <div className="h-14 border-t border-gray-700 flex justify-around items-center bg-black">
        <Link to="/" className="flex flex-col items-center text-xs">
          🏠
          Home
        </Link>

        <Link to="/saved" className="flex flex-col items-center text-xs">
          🔖
          Saved
        </Link>
      </div>

    </div>
  )
}

export default ReelFeed