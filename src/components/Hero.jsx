/**
 * Components
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Download, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const cloudRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24"
      style={{
        background: `
          linear-gradient(to bottom, 
            #18181b 0%, 
            #18181b 60%, 
            #18181b 100%
          )
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Profile Image */}
        <div ref={profileRef} className="relative inline-block mb-6 sm:mb-8">
          <div className="w-48 h-48 sm:w-36 sm:h-36 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-2 border-zinc-50/10 shadow-2xl bg-zinc-800">
            <img
              src="/images/logo-sm.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Software Engineer
            <br />
            <span
              ref={subtitleRef}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              & Problem Solver
            </span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl text-zinc-200 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Transforming ideas into powerful digital experiences through&nbsp;
            <br className="hidden sm:block" />
            innovative full-stack development strategic problem solving.
          </p>

          {/* Action Buttons with Animated Borders */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xl mx-auto px-4 sm:px-0"
          >
            {/* Secondary Button */}
            <div className="relative w-full sm:w-fit">
              <div
                className="absolute inset-0 rounded-full p-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316, #3b82f6, #22c55e, #f97316)",
                  backgroundSize: "300% 100%",
                  animation: "moveGradient 8s linear infinite",
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-900"></div>
              </div>
              <a
                href="#work"
                className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base bg-zinc-800/50 text-zinc-200 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:min-w-[180px]"
              >
                <span className="inline-flex items-center uppercase">
                  See my work
                  <ArrowUpRight size={18} className="sm:w-5 sm:h-5 ml-2" />
                </span>
              </a>
            </div>

            {/* Primary Button */}
            <div className="relative w-full sm:w-fit">
              <div
                className="absolute inset-0 rounded-full p-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #ef4444, #3b82f6, #22c55e, #ef4444)",
                  backgroundSize: "300% 100%",
                  animation: "moveGradient 8s linear infinite",
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-900"></div>
              </div>
              <a
                href="/Dhivya_Bharathi_Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base bg-white text-zinc-900 hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center w-full sm:min-w-[180px]"
              >
                <span className="inline-flex items-center uppercase">
                  Download CV
                  <Download size={18} className="sm:w-5 sm:h-5 ml-2" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes moveGradient {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 300% 50%;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
