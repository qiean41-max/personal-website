import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface NeoButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantMap = {
  primary: "bg-black text-white hover:bg-zinc-800",
  secondary: "bg-[#ff90e8] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff6b9e]",
  outline: "bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100",
  ghost: "bg-transparent text-black hover:bg-zinc-100",
};

const sizeMap = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg font-bold",
};

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const isNeo = variant === "secondary" || variant === "outline";
    return (
      <motion.button
        ref={ref}
        whileHover={isNeo ? { x: -2, y: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" } : { scale: 1.02 }}
        whileTap={isNeo ? { x: 2, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" } : { scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantMap[variant],
          sizeMap[size],
          className
        )}
        {...props}
      />
    );
  }
);
NeoButton.displayName = "NeoButton";
