"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import EmptyContent from "@/components/EmptyContent";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  const [videos, setVideos] = useState([
    {
      id: "1",
      title: "React JS Tutorial for Beginners - Full Course in 12 Hours [2023]",
      thumbnail: "https://i.ytimg.com/vi/gY5sGvq-8h8/maxresdefault.jpg",
      channelName: "Programming with Mosh",
      channelAvatar:
        "https://yt3.googleusercontent.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj",
      views: "2.5M",
      postedAt: "3 months ago",
    },
    {
      id: "2",
      title: "Build and Deploy a Modern Next.js 14 Application | React, Tailwind CSS",
      thumbnail: "https://i.ytimg.com/vi/wm5gMKuwSYk/maxresdefault.jpg",
      channelName: "JavaScript Mastery",
      channelAvatar:
        "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
      views: "978K",
      postedAt: "2 months ago",
    },
    {
      id: "3",
      title: "How to Git & GitHub | Complete Beginner's Guide for 2023",
      thumbnail: "https://i.ytimg.com/vi/3GfLQ2K_Y-k/maxresdefault.jpg",
      channelName: "Fireship",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/AIf8zZQK8Z1v8fYSfITrJYCkMj9IBbvpa4-OZlRo4EMBxpg=s176-c-k-c0x00ffffff-no-rj",
      views: "1.2M",
      postedAt: "5 months ago",
    },
    {
      id: "4",
      title: "NextJS App Router: The Full Guide",
      thumbnail: "https://i.ytimg.com/vi/QC3a0l3P9b0/maxresdefault.jpg",
      channelName: "Code with Antonio",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/AIf8zZTkEOLYzDFnCm0pD8-kZgSR77ah6MuaXMYUE8_d8g=s176-c-k-c0x00ffffff-no-rj",
      views: "457K",
      postedAt: "1 month ago",
    },
    {
      id: "5",
      title: "Learn Tailwind CSS – Course for Beginners",
      thumbnail: "https://i.ytimg.com/vi/ft30zcMlFao/maxresdefault.jpg",
      channelName: "freeCodeCamp.org",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/AIf8zZTJMbhCkwULh9obzR1gy-xbE_x5KgMz_JaKetDVKA=s176-c-k-c0x00ffffff-no-rj",
      views: "723K",
      postedAt: "6 months ago",
    },
    {
      id: "6",
      title: "Build a Modern User Interface with Shadcn/ui",
      thumbnail: "https://i.ytimg.com/vi/dB_Y9mQ0nEE/maxresdefault.jpg",
      channelName: "Web Dev Simplified",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/AIf8zZQTjMBhEcxfxj_aXDZNhm8dEX8RpBGKnpLKmgFA=s176-c-k-c0x00ffffff-no-rj",
      views: "562K",
      postedAt: "2 months ago",
    },
    {
      id: "7",
      title: "TypeScript in 100 Seconds",
      thumbnail: "https://i.ytimg.com/vi/zQnBQ4tB3ZA/maxresdefault.jpg",
      channelName: "Fireship",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/AIf8zZQK8Z1v8fYSfITrJYCkMj9IBbvpa4-OZlRo4EMBxpg=s176-c-k-c0x00ffffff-no-rj",
      views: "1.7M",
      postedAt: "1 year ago",
    },
    {
      id: "8",
      title: "How to Use GitHub's Copilot X",
      thumbnail: "https://i.ytimg.com/vi/j4rvHRDtiiU/maxresdefault.jpg",
      channelName: "Traversy Media",
      channelAvatar:
        "https://yt3.googleusercontent.com/ytc/AIf8zZR0bDQtTxKZ_fkqkMfFCM9RsFV_XZ5O0HSuZhMh1A=s176-c-k-c0x00ffffff-no-rj",
      views: "845K",
      postedAt: "3 months ago",
    },
  ]);

  // Uncomment to test empty state
  // const [videos, setVideos] = useState([]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 pt-6">
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  channelName={video.channelName}
                  channelAvatar={video.channelAvatar}
                  views={video.views}
                  postedAt={video.postedAt}
                />
              ))}
            </div>
          ) : (
            <EmptyContent />
          )}
        </main>
      </div>
    </div>
  );
}
