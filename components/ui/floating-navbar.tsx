"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHovering = useRef(false);

  const clearInactivityTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startInactivityTimer = useCallback(() => {
    clearInactivityTimer();
    if (!isHovering.current) {
      timerRef.current = setTimeout(() => {
        if (!isHovering.current) {
          setVisible(false);
        }
      }, 2000);
    }
  }, [clearInactivityTimer]);

  const handleActivity = useCallback(() => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setVisible(true);
    startInactivityTimer();
  }, [hasInteracted, startInactivityTimer]);

  useEffect(() => {
    const handleMouseMove = () => {
      handleActivity();
    };

    const handleScroll = () => {
      handleActivity();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInactivityTimer();
    };
  }, [handleActivity, clearInactivityTimer]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!hasInteracted) return;

    if (current <= 0) {
      setVisible(true);
      setLastScrollY(current);
      return;
    }

    if (current > lastScrollY) {
      setVisible(false);
      clearInactivityTimer();
    } else {
      handleActivity();
    }

    setLastScrollY(current);
  });

  const handleMouseEnter = () => {
    isHovering.current = true;
    setVisible(true);
    clearInactivityTimer();
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    startInactivityTimer();
  };
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button 
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};