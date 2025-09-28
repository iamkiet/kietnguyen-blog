"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blog" },
    { href: "/gallery", label: "gallery" },
    { href: "/about", label: "about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/blog") {
      return pathname === "/blog" || pathname.startsWith("/blog/");
    }
    return pathname === href;
  };

  return (
    <nav className="pt-12 pb-24">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-mono text-black hover:text-gray-600 transition-colors"
        >
          &lt;kietnguyen/&gt;
        </Link>
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                isActive(item.href)
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
