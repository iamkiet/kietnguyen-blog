"use client";

import React from "react";

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
  const blogUrl = `https://todaywegrind.com/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blogUrl);
      window.alert("Link copied!");
    } catch {
      window.alert("Failed to copy link");
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-8">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          blogUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-2 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-50 hover:text-[#1877f3] transition-colors text-xs font-mono"
        title="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
        </svg>
        <span className="sr-only">Share on Facebook</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          blogUrl
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-2 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-50 hover:text-[#1da1f2] transition-colors text-xs font-mono"
        title="Share on Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
        </svg>
        <span className="sr-only">Share on Twitter</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="flex items-center gap-1 px-2 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-50 hover:text-black transition-colors text-xs font-mono cursor-pointer hover:cursor-copy"
        title="Copy link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a2 2 0 012 2v2" />
        </svg>
        <span className="sr-only">Copy link</span>
      </button>
    </div>
  );
}


