import React from "react";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBorder({
  children,
  className = "",
}: GradientBorderProps) {
  return (
    <div
      className={`
        inline-block
        rounded-2xl
        p-[1px]
        bg-gradient-to-r
        from-indigo-500/70
        via-blue-500/70
        to-violet-500/70
        shadow-[0_10px_30px_rgba(99,102,241,.12)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}