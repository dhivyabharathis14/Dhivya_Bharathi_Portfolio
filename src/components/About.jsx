import { Github, Linkedin } from "lucide-react";

const aboutItems = [
  {
    label: "Projects completed",
    number: 6,
  },
  {
    label: "Years of experience",
    number: 1,
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
            I'm Harish, Data Scientist I in the pharmaceutical domain, with
            experience analyzing healthcare and clinical datasets, and
            delivering insights that support evidence-based decision-making. I
            create dashboards and reports for marketing and commercial teams,
            helping them understand market performance, patient trends, and
            campaign outcomes. Previously a Data Analyst at The Math Company, I
            bring strong skills in Python, SQL, Power BI, and statistical
            analysis, with a focus on clear, actionable data storytelling.
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
              {/* <a
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
              </a> */}
              <a
                href="https://www.linkedin.com/in/harishkumar-gk/"
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
