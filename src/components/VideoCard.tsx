"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  postedAt: string;
}

export default function VideoCard({
  id,
  title,
  thumbnail,
  channelName,
  channelAvatar,
  views,
  postedAt,
}: VideoCardProps) {
  return (
    <div className="flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Link href={`/watch?v=${id}`}>
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Video info */}
      <div className="flex gap-3 pt-3">
        <Avatar className="h-9 w-9 rounded-full">
          <Image
            src={channelAvatar}
            alt={channelName}
            width={36}
            height={36}
            className="rounded-full"
          />
        </Avatar>

        <div className="flex flex-col">
          <Link href={`/watch?v=${id}`} className="text-sm font-medium line-clamp-2">
            {title}
          </Link>
          <Link href={`/channel/${channelName}`} className="text-xs text-muted-foreground hover:text-foreground mt-1">
            {channelName}
          </Link>
          <div className="flex text-xs text-muted-foreground">
            <span>{views} views</span>
            <span className="before:content-['•'] before:mx-1">{postedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
