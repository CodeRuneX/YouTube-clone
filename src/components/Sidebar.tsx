"use client";

import Link from "next/link";
import { FiHome, FiClock, FiUser, FiShoppingBag } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-[72px] h-[calc(100vh-56px)] flex flex-col items-center py-2 bg-white">
      <Link href="/" className="sidebar-item">
        <FiHome className="sidebar-item-icon" />
        <span>Home</span>
      </Link>
      <Link href="/shorts" className="sidebar-item">
        <FiShoppingBag className="sidebar-item-icon" />
        <span>Shorts</span>
      </Link>
      <Link href="/subscriptions" className="sidebar-item">
        <MdOutlineSubscriptions className="sidebar-item-icon" />
        <span>Subscriptions</span>
      </Link>
      <Link href="/you" className="sidebar-item">
        <FiUser className="sidebar-item-icon" />
        <span>You</span>
      </Link>
      <Link href="/history" className="sidebar-item">
        <FiClock className="sidebar-item-icon" />
        <span>History</span>
      </Link>
    </div>
  );
}
