import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    position: "Software Engineer",
    company: "BigThinkCode",
    location: "Chennai, India",
    period: "Oct 2024 - Present",
    type: "Full-time",
    description:
      "Built and maintained Google and Microsoft Add-ins using React, TypeScript, HTML5, Sass, and Webpack. Collaborated with UI/UX teams, contributed to API integration, and optimized CI/CD using Docker. Actively engaged in client communication to understand requirements and deliver tailored solutions.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "Sass",
      "Webpack",
      "Docker",
      "Jest",
      "Graph API",
    ],
  },
  {
    position: "Associate Software Engineer",
    company: "BigThinkCode",
    location: "Chennai, India",
    period: "Oct 2023 - Oct 2024",
    type: "Full-time",
    description:
      "Developed a SaaS-based chatbot using LangChain and FastAPI, integrated with Microsoft Teams. Contributed to frontend architecture for OKR and Assessment apps using React. Participated in Farm Automation project using Elixir and React, collaborating with cross-functional teams and clients.",
    skills: [
      "React",
      "LangChain",
      "FastAPI",
      "JavaScript",
      "Phoenix LiveView",
      "Elixir",
      "LLMs",
      "Vector DB",
    ],
  },
  {
    position: "Software Intern",
    company: "BigThinkCode",
    location: "Chennai, India",
    period: "Mar 2023 - Sep 2023",
    type: "Internship",
    description:
      "Built a SaaS application by integrating React frontend with Django REST APIs. Led 70% of the UI implementation and reduced QA bugs through clean code and reusable components.",
    skills: ["React", "Django REST", "HTML", "CSS", "JavaScript", "Postman"],
  },
];


const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-6 sm:mb-8 reveal-up text-center sm:text-left">
          Work Experience
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl relative overflow-hidden reveal-up ring-1 ring-inset ring-zinc-50/10"
            >
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {exp.position}
                  </h3>
                  <span className="px-2.5 py-1 text-xs font-medium bg-sky-400/20 text-sky-400 rounded-full self-start sm:self-auto">
                    {exp.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-medium text-sm sm:text-base">
                    <Briefcase size={14} className="sm:w-4 sm:h-4" />
                    {exp.company}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-700/50 rounded-full text-zinc-300 ring-1 ring-inset ring-zinc-50/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
