import React, { useState, MouseEvent } from "react";
import { Linkedin, Github, Mail, Twitter, Instagram } from "lucide-react";

type SocialPlatform = "linkedin" | "github" | "mail" | "twitter" | "instagram";

interface SocialIconButtonProps {
  platform: SocialPlatform;
  href: string;
  size?: number;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
}

const SocialIconButton: React.FC<SocialIconButtonProps> = ({
  platform,
  href,
  size = 24,
  onClick,
  target = "_blank",
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Hover style with gradient and transparency
  const buttonStyle = isHovering
    ? {
        background:
          "linear-gradient(to left,rgb(135, 86, 232),rgb(255, 145, 10),rgb(255, 203, 17))",
        border: "0px solid transparent",
        boxShadow: "none",
        outline: "none",
        opacity: 0.9,
      }
    : {};

  // Style for the icon container
  const iconStyle = isAnimating
    ? {
        animation: "rotate-diagonal-1 0.4s linear 0s 1 normal both",
      }
    : {};

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsAnimating(true);
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Map platform to the appropriate icon component
  const getIcon = () => {
    switch (platform) {
      case "linkedin":
        return (
          <Linkedin size={size} color={isHovering ? "white" : "currentColor"} />
        );
      case "github":
        return (
          <Github size={size} color={isHovering ? "white" : "currentColor"} />
        );
      case "mail":
        return (
          <Mail size={size} color={isHovering ? "white" : "currentColor"} />
        );
      case "twitter":
        return (
          <Twitter size={size} color={isHovering ? "white" : "currentColor"} />
        );
      case "instagram":
        return (
          <Instagram
            size={size}
            color={isHovering ? "white" : "currentColor"}
          />
        );
      default:
        return (
          <Github size={size} color={isHovering ? "white" : "currentColor"} />
        );
    }
  };

  return (
    <>
      {/* Add keyframes for the animation */}
      <style jsx>{`
        @keyframes rotate-diagonal-1 {
          0% {
            transform: rotate3d(1, 1, 0, 0deg);
          }
          50% {
            transform: rotate3d(1, 1, 0, -180deg);
          }
          100% {
            transform: rotate3d(1, 1, 0, -360deg);
          }
        }
      `}</style>

      <a
        href={href}
        target={target}
        className="inline-block mx-1"
        onClick={handleClick}
        aria-label={`Visit my ${platform} profile`}
      >
        <button
          className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div style={iconStyle}>{getIcon()}</div>
        </button>
      </a>
    </>
  );
};

export default SocialIconButton;
