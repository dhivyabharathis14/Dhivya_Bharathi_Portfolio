/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  // Frontend & UI
  {
    imgSrc: "/images/logo.svg",
    label: "React",
    desc: "JS Library",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Type Safety",
  },
  // {
  //   imgSrc: "/images/css3.svg",
  //   label: "CSS",
  //   desc: "User Interface",
  // },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },

  // Backend & Database
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/django.png",
    label: "Django",
    desc: "Python",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/images/vectordb.svg",
    label: "Vector Database",
    desc: "PG Vector & Chroma",
  },

  // Authentication & Services
  {
    imgSrc: "/images/auth.svg",
    label: "Auth",
    desc: "Authentication",
  },
  {
    imgSrc: "/images/langchain.png",
    label: "LangChain",
    desc: "Generative AI",
  },

  // Development Tools
  {
    imgSrc: "/images/vscode.svg",
    label: "VS Code",
    desc: "Code Editor",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Deployment",
  },
  {
    imgSrc: "/images/jenkins.png",
    label: "Jenkins",
    desc: "Automation Server",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },

  // API Development
  {
    imgSrc: "/images/postman.svg",
    label: "Postman",
    desc: "Building API",
  },
  {
    imgSrc: "/images/webpack.png",
    label: "Webpack",
    desc: "Bundling",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My tech stack</h2>

        <p className="text-zinc-300 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
