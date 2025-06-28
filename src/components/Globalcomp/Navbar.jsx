"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

const PageTransitionOverlay = ({ stage }) => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1920;

  let transformStyle = `translateX(-${width}px)`;
  const transitionDuration = "1.5s";

  if (stage === "in" || stage === "hold") {
    transformStyle = "translateX(0)";
  } else if (stage === "out") {
    transformStyle = `translateX(${width}px)`;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${width}px`,
        height: "100vh",
        backgroundColor: "black",
        zIndex: 9999,
        transform: transformStyle,
        transition: `transform ${transitionDuration} ease-in-out`,
        pointerEvents: "none",
      }}
    />
  );
};

const Navbar = () => {
  const router = useRouter();
  const navigateTo = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [overlayStage, setOverlayStage] = useState(null); // null, start, in, hold, out

  // Handle resize for responsive menu
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Overlay transition steps
  useEffect(() => {
    if (overlayStage === "start") {
      // First render overlay offscreen without transition, then trigger slide-in next frame
      const frame = requestAnimationFrame(() => {
        setOverlayStage("in");
      });
      return () => cancelAnimationFrame(frame);
    }

    if (overlayStage === "in") {
      const timer = setTimeout(() => {
        setOverlayStage("hold");
      }, 1500); // Duration matches CSS transition
      return () => clearTimeout(timer);
    }

    if (overlayStage === "hold") {
      const timer = setTimeout(() => {
        if (navigateTo.current) {
          router.push(navigateTo.current);
          setOverlayStage("out");
        }
      }, 400);
      return () => clearTimeout(timer);
    }

    if (overlayStage === "out") {
      const timer = setTimeout(() => {
        setOverlayStage(null);
        navigateTo.current = null;
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [overlayStage, router]);

  // Navigation handler to trigger overlay animation before page change
  const handleNavigation = (href) => {
    setMenuOpen(false); // close mobile menu if open
    navigateTo.current = href;
    setOverlayStage("start");
  };

  // Clicking the brand name to go home with transition
  const handleHomeClick = () => {
    handleNavigation("/");
  };

  return (
    <>
      <nav className="w-full py-6 px-8 flex justify-between items-center text-sm tracking-wider relative">
        <div
          className="cursor-pointer font-bold text-lg"
          onClick={handleHomeClick}
        >
          JATIN RAJWAL
        </div>

        {/* Desktop and Tablet Navbar */}
        <div className="hidden md:flex space-x-12">
          <p
            className="hover:text-gray-600 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/About")}
          >
            ABOUT
          </p>
          <p
            className="hover:text-gray-600 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/Skills")}
          >
            SKILLS
          </p>
          <p
            className="hover:text-gray-600 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/Project")}
          >
            PROJECTS
          </p>
          <p
            className="hover:text-gray-600 transition-colors cursor-pointer"
            onClick={() => handleNavigation("/Contact")}
          >
            CONTACT
          </p>
        </div>

        {/* Mobile Navbar (down arrow and mobile menu) */}
        <div className="md:hidden flex items-center justify-center absolute top-0 left-0 right-0 z-50">
          <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <FiChevronDown size={24} />
          </div>
        </div>

        {/* Mobile Menu - Black Screen Navbar with Smooth Transition */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50 transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          {/* Centering the menu items */}
          <div className="flex flex-col justify-center items-center text-white space-y-6 h-full">
            <p
              className="text-xl cursor-pointer"
              onClick={() => handleNavigation("/About")}
            >
              ABOUT
            </p>
            <p
              className="text-xl cursor-pointer"
              onClick={() => handleNavigation("/Skills")}
            >
              SKILLS
            </p>
            <p
              className="text-xl cursor-pointer"
              onClick={() => handleNavigation("/Project")}
            >
              PROJECTS
            </p>
            <p
              className="text-xl cursor-pointer"
              onClick={() => handleNavigation("/Contact")}
            >
              CONTACT
            </p>
          </div>

          {/* Close button (X) at the bottom */}
          <div
            className="absolute bottom-6 left-0 right-0 text-2xl text-white text-center cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            X
          </div>
        </div>

        {/* Text Section */}
        <div className="text-xs text-gray-500 text-right">
          <div>CURRENTLY AVAILABLE FOR</div>
          <div>FREELANCE WORLDWIDE</div>
        </div>
      </nav>

      {/* Overlay for page transition */}
      {overlayStage && (
        <PageTransitionOverlay stage={overlayStage === "start" ? null : overlayStage} />
      )}
    </>
  );
};

export default Navbar;
