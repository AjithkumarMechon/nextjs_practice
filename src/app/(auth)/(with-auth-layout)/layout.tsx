"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    /*Make active links isActive*/
  }
  const pathname = usePathname();

  const [stateData, setStateData] = useState("");
  return (
    <div>
      {/* state is precurved in next. but,template.tsx is not presurved if u change the name as template.tsx  */}
      <input
        type="text"
        value={stateData}
        onChange={(e) => setStateData(e.target.value)}
      />
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
