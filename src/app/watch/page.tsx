"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FiThumbsUp, FiThumbsDown, FiShare2, FiDownload, FiMoreHorizontal } from "react-icons/fi";

interface VideoType {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  subscribers: string;
  views: string;
  postedAt: string;
  likes: string;
}

export default function WatchPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");
  const [video, setVideo] = useState<VideoType | null>(null);

  useEffect(() => {
    // This would be an API call in a real app
    // For demo purposes, we're using static data
    const mockVideos: VideoType[] = [
      {
        id: "1",
        title: "React JS Tutorial for Beginners - Full Course in 12 Hours [2023]",
        description:
          "Learn React JS in this comprehensive course for beginners. We will go through all the basics of React JS and build several projects to understand core concepts.",
        thumbnail: "https://i.ytimg.com/vi/gY5sGvq-8h8/maxresdefault.jpg",
        channelName: "Programming with Mosh",
        channelAvatar:
          "https://yt3.googleusercontent.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "1.8M",
        views: "2.5M",
        postedAt: "3 months ago",
        likes: "145K",
      },
      {
        id: "2",
        title: "Build and Deploy a Modern Next.js 14 Application | React, Tailwind CSS",
        description:
          "In this comprehensive tutorial, we'll build a modern full-stack Next.js 14 application with React, Tailwind CSS, and more. Perfect for developers of all levels.",
        thumbnail: "https://i.ytimg.com/vi/wm5gMKuwSYk/maxresdefault.jpg",
        channelName: "JavaScript Mastery",
        channelAvatar:
          "https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "962K",
        views: "978K",
        postedAt: "2 months ago",
        likes: "72K",
      },
      {
        id: "3",
        title: "How to Git & GitHub | Complete Beginner's Guide for 2023",
        description:
          "Learn the essentials of Git and GitHub in this fast-paced guide. We'll cover everything from basic commands to advanced workflows in a way that's easy to understand.",
        thumbnail: "https://i.ytimg.com/vi/3GfLQ2K_Y-k/maxresdefault.jpg",
        channelName: "Fireship",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/AIf8zZQK8Z1v8fYSfITrJYCkMj9IBbvpa4-OZlRo4EMBxpg=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "2.4M",
        views: "1.2M",
        postedAt: "5 months ago",
        likes: "92K",
      },
      {
        id: "4",
        title: "NextJS App Router: The Full Guide",
        description:
          "In this comprehensive guide, we delve deep into the NextJS App Router. We'll explore its features, best practices, and how to leverage it in your projects.",
        thumbnail: "https://i.ytimg.com/vi/QC3a0l3P9b0/maxresdefault.jpg",
        channelName: "Code with Antonio",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/AIf8zZTkEOLYzDFnCm0pD8-kZgSR77ah6MuaXMYUE8_d8g=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "348K",
        views: "457K",
        postedAt: "1 month ago",
        likes: "31K",
      },
      {
        id: "5",
        title: "Learn Tailwind CSS – Course for Beginners",
        description:
          "Learn the fundamentals of Tailwind CSS in this comprehensive beginner course. This hands-on tutorial will teach you how to build beautiful, responsive websites using Tailwind's utility-first approach.",
        thumbnail: "https://i.ytimg.com/vi/ft30zcMlFao/maxresdefault.jpg",
        channelName: "freeCodeCamp.org",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/AIf8zZTJMbhCkwULh9obzR1gy-xbE_x5KgMz_JaKetDVKA=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "8.2M",
        views: "723K",
        postedAt: "6 months ago",
        likes: "52K",
      },
      {
        id: "6",
        title: "Build a Modern User Interface with Shadcn/ui",
        description:
          "This tutorial walks you through building a beautiful, modern user interface using Shadcn/ui. Learn how to create reusable components and build a professional-looking UI quickly.",
        thumbnail: "https://i.ytimg.com/vi/dB_Y9mQ0nEE/maxresdefault.jpg",
        channelName: "Web Dev Simplified",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/AIf8zZQTjMBhEcxfxj_aXDZNhm8dEX8RpBGKnpLKmgFA=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "1.3M",
        views: "562K",
        postedAt: "2 months ago",
        likes: "41K",
      },
      {
        id: "7",
        title: "TypeScript in 100 Seconds",
        description:
          "Learn the key concepts of TypeScript in just 100 seconds. This quick overview will help you understand what TypeScript is, why you might want to use it, and how to get started.",
        thumbnail: "https://i.ytimg.com/vi/zQnBQ4tB3ZA/maxresdefault.jpg",
        channelName: "Fireship",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/AIf8zZQK8Z1v8fYSfITrJYCkMj9IBbvpa4-OZlRo4EMBxpg=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "2.4M",
        views: "1.7M",
        postedAt: "1 year ago",
        likes: "112K",
      },
      {
        id: "8",
        title: "How to Use GitHub's Copilot X",
        description:
          "Discover how to use GitHub's AI pair programmer, Copilot X. This tutorial shows you how to set up Copilot, use it effectively in your coding workflow, and get the most out of this powerful tool.",
        thumbnail: "https://i.ytimg.com/vi/j4rvHRDtiiU/maxresdefault.jpg",
        channelName: "Traversy Media",
        channelAvatar:
          "https://yt3.googleusercontent.com/ytc/AIf8zZR0bDQtTxKZ_fkqkMfFCM9RsFV_XZ5O0HSuZhMh1A=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "2.1M",
        views: "845K",
        postedAt: "3 months ago",
        likes: "67K",
      },
    ];

    const foundVideo = mockVideos.find((v) => v.id === videoId);
    setVideo(foundVideo || null);
  }, [videoId]);

  if (!video) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 pt-6 flex items-center justify-center">
            <p>Video not found</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 pt-6 max-w-[1200px] mx-auto">
          <div className="aspect-video w-full bg-black overflow-hidden rounded-xl relative">
            {/* Video would be embedded here in a real application */}
            <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                This is a demo. Real video would play here.
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-bold">{video.title}</h1>

            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <Image
                    src={video.channelAvatar}
                    alt={video.channelName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Avatar>
                <div>
                  <Link href={`/channel/${video.channelName}`} className="font-medium hover:text-black">
                    {video.channelName}
                  </Link>
                  <div className="text-sm text-muted-foreground">{video.subscribers} subscribers</div>
                </div>
                <Button className="ml-4 rounded-full bg-black text-white hover:bg-gray-800">Subscribe</Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-gray-100 rounded-full overflow-hidden">
                  <Button variant="ghost" className="rounded-r-none rounded-l-full flex gap-2 px-4">
                    <FiThumbsUp className="h-5 w-5" />
                    <span>{video.likes}</span>
                  </Button>
                  <div className="w-px bg-gray-300" />
                  <Button variant="ghost" className="rounded-l-none rounded-r-full">
                    <FiThumbsDown className="h-5 w-5" />
                  </Button>
                </div>

                <Button variant="ghost" className="rounded-full flex gap-2">
                  <FiShare2 className="h-5 w-5" />
                  <span>Share</span>
                </Button>

                <Button variant="ghost" className="rounded-full flex gap-2">
                  <FiDownload className="h-5 w-5" />
                  <span>Download</span>
                </Button>

                <Button variant="ghost" size="icon" className="rounded-full">
                  <FiMoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-4 bg-gray-100 rounded-xl p-3">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span className="font-medium">{video.views} views</span>
                <span className="before:content-['•'] before:mx-2">{video.postedAt}</span>
              </div>
              <p className="text-sm whitespace-pre-line">{video.description}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
