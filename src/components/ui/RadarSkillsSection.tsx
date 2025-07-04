"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { BsDiscord, BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { DiscardNode } from "three/examples/jsm/nodes/Nodes.js";
import { CiInstagram } from "react-icons/ci";

// RadarSkillsSection Component
export const RadarSkillsSection = () => {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
      <div className="mx-auto w-full max-w-xl">
        <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 animate-pulse">
          <IconContainer text="Instagram" delay={0.2} href="https://instagram.com/your_username" icon={<BsInstagram className="h-6 w-6 text-white" />} />
          <IconContainer text="Linkedin" delay={0.4} href="https://linkedin.com/in/your_username" icon={<BsLinkedin className="h-6 w-6 text-white" />} />
          <IconContainer text="Twitter" delay={0.3} href="https://twitter.com/your_username" icon={<BsTwitterX className="h-6 w-6 text-white" />} />
        </div>
      </div>
   
      <div className="mx-auto w-full max-w-72">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 animate-pulse">
          <IconContainer text="Github" delay={0.5} href="https://github.com/your_username" icon={<BsGithub className="h-6 w-6 text-white" />} />
          <IconContainer text="Whatsapp" delay={0.8}   href="https://wa.me/your_phone_number" icon={<BsWhatsapp className="h-6 w-6 text-white" />} />
        </div>
      </div>

      <div className="mx-auto w-full max-w- ">
        <div className="flex w-full items-center  text-white justify-center space-x-10 md:justify-between md:space-x-0 animate-pulse">
          <IconContainer text="Facebook" delay={0.6} icon={<FaFacebook className="h-6 w-6 text-white" />} />
          <IconContainer text="Discord" delay={0.7} icon={<BsDiscord className="h-6 w-6 text-white" />} />
        </div>
      </div>

      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
};

// IconContainer component
const IconContainer = ({
  icon,
  text,
  delay,
  href = "#",
}: {
  icon: React.ReactNode;
  text: string;
  delay: number;
  href?: string;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-200"
    >
      {icon}
      <span className="text-sm font-medium text-white">{text}</span>
    </motion.a>
  );
};


// Radar component
const Radar = ({ className }: any) => {
  const circles = new Array(8).fill(1);
  return (
    <div className={twMerge("relative flex h-20 w-40 items-center justify-center rounded-full", className)}>
      <div
        style={{ transformOrigin: "right center" }}
        className="absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[500px] items-end justify-center bg-transparent animate-radar-spin"
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-[#1FB8CD] to-transparent" />
      </div>
      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 8}rem`,
            width: `${(idx + 1) * 8}rem`,
            border: `1px solid rgba(82, 82, 82, ${1 - (idx + 1) * 0.1})`,
          }}
          key={`motion-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

// Circle component
const Circle = ({ className, idx, ...rest }: any) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
        className
      )}
    />
  );
};
