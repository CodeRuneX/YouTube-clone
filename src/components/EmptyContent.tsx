"use client";

export default function EmptyContent() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)] px-4">
      <div className="max-w-lg text-center">
        <h2 className="text-xl font-medium mb-2">Try searching to get started</h2>
        <p className="text-gray-600">
          Start watching videos to help us build a feed of videos you'll love.
        </p>
      </div>
    </div>
  );
}
