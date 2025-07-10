/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/Project-portfolio.png",
    title: "Personal Portfolio",
    tags: ["Tailwind CSS", "React", "Frontend"],
    projectLink: "https://dhivya.info/",
    projectDescription:
      "This is my personal portfolio website. Created using React.js, Tailwind CSS. It showcases my projects, skills.",
  },
  {
    imgSrc: "/images/Project-goalset.png",
    title: " Goal Management App",
    tags: ["Full Stack", "React", "Django", "SaaS"],
    projectLink: "",
    projectDescription:
      "This is a goal-setting and tracking SaaS app with role-based access for admin, manager, and employee.",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Musify: Spotify Client",
    tags: ["API", "MVC", "Auth", "Django"],
    projectLink: "https://github.com/dhivyabharathis14/WEB_APP",
    projectDescription:
      "Developed a music controller app with Spotify OAuth integration allowing login, playback, and track control.Synchronized user interactions with live music streaming functionality.",
  },
  {
    imgSrc: "/images/project-add-on.png",
    title: "Microsoft Add-in & Google Add-on",
    tags: ["AppScript", "Microsoft API", "AI", "React"],
    projectLink: "",
    projectDescription:
      "This is a Microsoft Add-in and Google Add-on for data transformation and insightful analysis.",
  },
  {
    imgSrc: "/images/project-farm.jpg",
    title: "Farm Automation Dashboard",
    tags: ["Full Stack", "Elixir", "Phoenix", "React"],
    projectLink: "",
    projectDescription:
      "Contributed to the frontend of a farm automation system using Elixir (Phoenix LiveView) and React JS. Enabled real-time crop monitoring and streamlined client interaction for faster feature delivery.",
  },

  {
    imgSrc: "/images/Project-chatbot.png",
    title: "AI Assistant Chatbot",
    tags: ["LangChain", "GenAI", "FastAPI", "PostgreSQL"],
    projectLink: "",
    projectDescription:
      "An intelligent chatbot built using LangChain with RAG, Capable of answering user queries by referencing uploaded documents.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

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
