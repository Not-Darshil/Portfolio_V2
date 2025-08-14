"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("");

  const sections = [
    { id: "", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // const handleScroll = () => {
    //   let current = "";
    //   for (const section of sections) {
    //     const el = document.getElementById(section.id);
    //     if (el) {
    //       const offset = el.getBoundingClientRect().top;
    //       if (offset <= 100) current = section.id; // 100px from top
    //     }
    //   }
    //   setActive(current);
    // };

    const handleScroll = () => {
      let current = "";
      const scrollPos = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // If we are near the bottom, set Contact as active
      if (pageHeight - scrollPos < 50) {
        current = "contact";
      } else {
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const offset = el.getBoundingClientRect().top;
            if (offset <= 100) current = section.id;
          }
        }
      }
      setActive(current);
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once at start
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex items-center justify-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`nav-item ${active === sec.id
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
              }`}
          >
            {sec.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

//  bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900