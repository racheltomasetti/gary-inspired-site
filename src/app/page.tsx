"use client";
import React, { useState } from "react";
import SocialIconButton from "@/components/SocialIconButton";
import Link from "next/link";
import { HelpCircle, X, Play } from "lucide-react";

// Simplified interface with just the essentials for UI
interface ProjectLink {
  route: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Simple array of destinations with styling info
const projectLinks: ProjectLink[] = [
  {
    route: "/mindfulness",
    title: "project #1",
    description: "Lorem ipsum lorem ipsum lorem ipsum",
    icon: ":·.·:*¨༺༻¨*:·.·:",
    color: "from-purple-500 to-pink-400",
  },
  {
    route: "/growth",
    title: "resource #1",
    description: "Lorem ipsum lorem ipsum lorem ipsum",
    icon: "✧⋄⋅⋅⋄✧⋄⋅⋅⋄✧",
    color: "from-green-500 to-teal-400",
  },
  {
    route: "/journal",
    title: "curiousity #1",
    description: "Lorem ipsum lorem ipsum lorem ipsum",
    icon: "⋅•• ❉᯽❉ ••⋅",
    color: "from-blue-500 to-indigo-400",
  },
];

const ProjectCard = ({ link }: { link: ProjectLink }) => {
  return (
    <Link href={link.route}>
      <div className="group cursor-pointer h-full">
        <div
          className={`relative rounded-lg overflow-hidden h-full border border-zinc-700 bg-zinc-800 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg`}
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          ></div>

          <div className="relative p-4 flex flex-col h-full">
            {/* Icon */}
            <div className="text-2xl mb-2">{link.icon}</div>

            {/* Title */}
            <h3 className="font-medium text-white mb-1">{link.title}</h3>

            {/* Description */}
            <p className="text-xs text-zinc-400 group-hover:text-zinc-300 flex-grow">
              {link.description}
            </p>

            {/* View project text that appears on hover */}
            <div className="mt-3 text-xs font-medium text-white/70 group-hover:text-white transition-colors duration-300">
              View more →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Help Modal Component
const HelpModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-zinc-900 border border-zinc-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Modal content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
            Welcome to My Digital Space
          </h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium mb-2 text-white">About Me</h3>
              <p className="text-zinc-300">
                I'm Rachel, a creator focused on building tools that help people
                connect with their authentic selves. My work spans the
                intersection of technology, personal development, and creative
                expression.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-2 text-white">
                How to Navigate
              </h3>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>
                    The <strong>project cards</strong> on the main page showcase
                    different aspects of my work. Click any card to explore that
                    project in depth.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>
                    Use the <strong>social media buttons</strong> at the bottom
                    of the page to connect with me on different platforms.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>
                    Each project page contains detailed information about my
                    process, thoughts, and the journey behind the work.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-2 text-white">
                What You'll Find Here
              </h3>
              <p className="text-zinc-300 mb-3">
                This space serves as both a portfolio and a personal journal of
                my creative process. You'll find:
              </p>
              <ul className="text-zinc-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Deep dives into my design and development process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>
                    Personal reflections on creativity and self-discovery
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>
                    Tools and frameworks I've created to help myself and others
                  </span>
                </li>
              </ul>
            </section>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-400 text-sm italic">
                Feel free to explore at your own pace. This space is designed to
                be both informative and reflective of my journey. If you have
                any questions or would like to connect, reach out through any of
                the social links.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-16 gap-8 sm:p-16 sm:pt-6">
      <main className="flex flex-col gap-6 row-start-2 items-center w-full max-w-2xl mt-4">
        {/* Name at the top center */}
        <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-center bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text anton-regular">
          RACHEL TOMASETTI{" "}
        </h1>

        {/* Tagline underneath */}
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          <em>
            welcome to <strong>a glimpse into my mind</strong>...
          </em>
        </p>
        <br />

        <div className="flex justify-center items-center w-full">
          <div className="relative w-full hover:scale-105">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-stone-600 via-blue-600 to-pink-600 opacity-50 blur-2xl"></div>
            <div className="relative w-full border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300 p-6 overflow-auto">
              {/* Help button */}
              <button
                onClick={() => setShowHelpModal(true)}
                className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-200 transition-colors"
                aria-label="Help and information"
              >
                <HelpCircle size={20} />
              </button>

              {/* Introduction Section */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image/Video Placeholder */}
                  <div className="md:w-1/3 aspect-square bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
                    <p className="text-zinc-500 text-sm">Image/Video Here</p>
                  </div>

                  {/* Text Content */}
                  <div className="md:w-2/3 space-y-4">
                    {/* Bio Paragraph 1 */}
                    <p className="text-zinc-300">
                      {/* Replace with your personal intro */}
                      I'm a [your title/role] passionate about [your interests].
                      With experience in [your field], I focus on creating tools
                      and experiences that [your mission or goal].
                    </p>

                    {/* Bio Paragraph 2 */}
                    <p className="text-zinc-300">
                      {/* Replace with more details about your work */}
                      My approach combines [methodology/philosophy] with
                      [skills/techniques] to deliver [outcomes/results]. I
                      believe that [your core belief or philosophy].
                    </p>

                    {/* Current Focus */}
                    <div className="bg-zinc-800 p-3 rounded border border-zinc-700">
                      <p className="text-sm text-zinc-300">
                        <span className="text-blue-400 font-medium">
                          Currently:
                        </span>{" "}
                        {/* Update with current project/focus */} Working on
                        [current project or focus area] and exploring [area of
                        interest or research].
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Introduction Section */}
              <div className="mb-8">
                {/* <h3 className="text-lg font-medium mb-4 text-center bg-gradient-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text">
                  Let me introduce myself
                </h3> */}

                {/* Video Container */}
                <div className="relative w-full aspect-video bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
                  {isVideoPlaying ? (
                    // Actual video player - Replace the src with your video URL
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onEnded={() => setIsVideoPlaying(false)}
                    >
                      <source src="/your-video-file.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    // Video thumbnail with play button overlay
                    <div className="relative w-full h-full">
                      {/* Video thumbnail image - Replace with your actual thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"></div>

                      {/* Play button */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                        aria-label="Play video"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110">
                          <Play
                            size={28}
                            className="text-white fill-white ml-1"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                            Watch introduction
                          </p>
                        </div>
                      </button>
                    </div>
                  )}
                </div>

                {/* Video description */}
                {/* <p className="text-sm text-zinc-400 mt-3 text-center">
                  In this short video, I talk about my background, what
                  motivates me, and what you'll discover on this site.
                </p> */}
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-800 my-6"></div>

              {/* Project Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 justify-center text-center">
                {projectLinks.map((link) => (
                  <ProjectCard key={link.route} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Three buttons in a horizontal row */}
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <SocialIconButton
            platform="linkedin"
            href="https://www.linkedin.com/in/racheltomasetti/"
          />
          <SocialIconButton
            platform="github"
            href="https://github.com/racheltomasetti"
          />
          <SocialIconButton
            platform="instagram"
            href="https://www.instagram.com/racheltomasetti/"
          />
        </div>
      </main>

      {/* Help Modal */}
      <HelpModal
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />
    </div>
  );
}
