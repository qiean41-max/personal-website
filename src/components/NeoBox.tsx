import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface NeoBoxProps extends HTMLMotionProps<"div"> {
  color?: "white" | "pink" | "blue" | "yellow" | "green" | "dark";
  shadowSize?: "sm" | "md" | "lg";
  interactive?: boolean;
}

const colorMap = {
  white: "bg-white",
  pink: "bg-[#ff90e8]",
  blue: "bg-[#90e8ff]",
  yellow: "bg-[#ffde59]",
  green: "bg-[#a3e635]",
  dark: "bg-zinc-900 text-white",
};

const shadowMap = {
  sm: "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  md: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  lg: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
};

export const NeoBox = React.forwardRef<HTMLDivElement, NeoBoxProps>(
  ({ className, color = "white", shadowSize = "md", interactive = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={interactive ? { x: -2, y: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" } : undefined}
        whileTap={interactive ? { x: 2, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" } : undefined}
        className={cn(
          "border-2 border-black rounded-2xl",
          colorMap[color],
          shadowMap[shadowSize],
          interactive && "cursor-pointer transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
NeoBox.displayName = "NeoBox";
