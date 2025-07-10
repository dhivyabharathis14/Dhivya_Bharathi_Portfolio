import { Github, Linkedin } from "lucide-react";

const aboutItems = [
  {
    label: "Projects completed",
    number: 8,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ring-1 ring-inset ring-zinc-50/10">
          <h2 className="headline-2 text-center mb-12 md:mb-16 reveal-up">
            About Me
          </h2>
          <p className="text-zinc-200 mb-4 md:mb-8 md:text-xl md:max-w-full font-light">
            Hello, I’m Dhivya — a passionate full-stack developer who transforms
            ideas into exceptional digital experiences. With a keen eye for
            UI/UX design and expertise in modern technologies like React,
            TypeScript, and Node.js, I build applications that are both visually
            appealing and deeply functional. I believe great design is rooted in
            usability, performance, and attention to detail.
            <br />
            <br />
            Beyond aesthetics, I thrive on solving complex engineering
            challenges — from integrating scalable APIs to designing resilient
            system architectures. My work spans SaaS applications, enterprise
            integrations, and real-time chatbots, where I balance client needs
            with robust technical solutions. I take pride in delivering
            high-quality software that is maintainable, user-friendly, and built
            for scale.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-7">
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl ml-2">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300">{label}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/dhivyabharathis14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-700/50 hover:bg-zinc-600 transition-all duration-300 hover:scale-110 group ring-1 ring-inset ring-zinc-50/10"
                aria-label="GitHub Profile"
              >
                <Github
                  size={20}
                  className="text-zinc-300 group-hover:text-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/s-dhivya-bharathi-274a2a191/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-700/50 hover:bg-blue-600 transition-all duration-300 hover:scale-110 group ring-1 ring-inset ring-zinc-50/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={20}
                  className="text-zinc-300 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
