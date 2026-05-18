"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NabLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <li>
      <Link
        className={`${path == href ? " text-[#15a1bf] border-b-2 border-[#15a1bf]" : ""}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NabLink;
