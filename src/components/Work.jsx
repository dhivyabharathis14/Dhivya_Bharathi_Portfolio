/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/Flight-Finder.jpg",
    title: " Flight Finder",
    tags: ["Python", "SMT-Email"],
    projectLink: "https://github.com/harish1817/SkyExplorer-Flight-Search",
    projectDescription:
      "Built a flight deal alert system using Python, integrating Tequila and Sheety APIs to monitor airfare and notify users of top deals featuring price drops of 30% or more.",
  },
  {
    imgSrc: "/images/abd-vs-bumrah.jpg",
    title: "Cricket Performance Insights",
    tags: ["Numpy", "Pandas", "Jupyter Notebook"],
    projectLink: "https://github.com/harish1817/Batting_Analysis",
    projectDescription:
      "Performed advanced cricket analytics using Python, applying MCDM - Saaty scale & TOPSIS to evaluate performance & derive strategic, data-driven insights from over 1,000 IPL match records.",
  },
  {
    imgSrc: "/images/open-trivia.png",
    title: "Open Trivia Quiz App",
    tags: ["Python", "API"],
    projectLink: "https://github.com/harish1817/Quizzler_App",
    projectDescription:
      "Designed an interactive quiz app using Python and Tkinter, integrating the Open Trivia DB API and applying OOP principles to manage game logic and real-time score tracking.",
  },
  // {
  //   imgSrc: "/images/project-farm.jpg",
  //   title: "Farm Automation Dashboard",
  //   tags: ["Full Stack", "Elixir", "Phoenix", "React"],
  //   projectLink: "",
  //   projectDescription:
  //     "Contributed to the frontend of a farm automation system using Elixir (Phoenix LiveView) and React JS. Enabled real-time crop monitoring and streamlined client interaction for faster feature delivery.",
  // },

  // {
  //   imgSrc: "/images/Project-chatbot.png",
  //   title: "AI Assistant Chatbot",
  //   tags: ["LangChain", "GenAI", "FastAPI", "PostgreSQL"],
  //   projectLink: "",
  //   projectDescription:
  //     "An intelligent chatbot built using LangChain with RAG, Capable of answering user queries by referencing uploaded documents.",
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, projectLink, projectDescription }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                projectDescription={projectDescription}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
