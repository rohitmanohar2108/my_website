"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-white py-4 my-9 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Thanks For
        <br /> Visiting <span>🙏🏻</span>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <div className="absolute bottom-1 -ml-[82%] z-0">
          <div className="flex flex-row items-center space-x-1 h-6">
            {/* Segment 1 */}
            <div
              className="w-36 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 2 */}
            <div
              className="w-24 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-135px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 3 */}
            <div
              className="w-14 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-165px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 4 */}
            <div
              className="w-6 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-185px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 5 */}
            <div
              className="w-24 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-195px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-9 -ml-[75%] z-0">
          <div className="flex flex-row items-center space-x-1 h-6">
            <div
              className="w-36 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-20 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-145px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-14 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-165px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-6 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-185px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-24 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-195px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-[9%] -ml-[80%] z-0">
          <div className="flex flex-row items-center space-x-1 h-6">
            <div
              className="w-36 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-16 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-145px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-24 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-165px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-6 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-185px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-24 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-195px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>

        <div className="absolute bottom-[9%] ml-[80%] z-0">
          <div className="flex flex-row items-center space-x-1 h-6">
            <div
              className="w-36 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-16 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-145px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-24 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-165px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-6 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-185px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-24 h-6 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-195px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-9 ml-[75%] z-0">
          <div className="flex flex-row items-center space-x-1 h-6">
            <div
              className="w-36 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-20 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-145px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-14 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-165px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-6 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-185px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="w-24 h-7 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-195px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-1 ml-[82%] z-0">
          <div className="flex flex-row items-center space-x-1 h-6">
            {/* Segment 1 */}
            <div
              className="w-36 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "0px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 2 */}
            <div
              className="w-24 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-135px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 3 */}
            <div
              className="w-14 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-165px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 4 */}
            <div
              className="w-6 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-185px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Segment 5 */}
            <div
              className="w-24 h-5 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #71717a, #52525b, #3f3f46, #27272a)",
                backgroundSize: "300px",
                backgroundPosition: "-195px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-blue-500 via-transparent to-transparent  text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-blue-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
