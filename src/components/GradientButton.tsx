import React, { useState, MouseEvent } from "react";

interface HoverGradientButtonProps {
  text?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
}

const GradientButton: React.FC<HoverGradientButtonProps> = ({
  text = "Click Me",
  href = "#",
  onClick,
  target = "_self",
}) => {
  const [isHovering, setIsHovering] = useState(false);

  // Default style (non-hover state)
  const defaultStyle = {};

  // Gradient style for hover state
  const hoverStyle = {
    background:
      "linear-gradient(to left,rgb(135, 86, 232),rgb(255, 145, 10),rgb(255, 203, 17))",
    border: "0px solid transparent", // Fix for border issue
    boxShadow: "none",
    outline: "none",
    color: "white",
    fontWeight: "bold",
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      target={target}
      className="inline-block"
      onClick={handleClick}
    >
      <button
        className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-0 flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        style={isHovering ? hoverStyle : defaultStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {text}
      </button>
    </a>
  );
};

export default GradientButton;
