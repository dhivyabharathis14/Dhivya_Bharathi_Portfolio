import {
  Github,
  Linkedin,
  MailSearch,
  Instagram,
  Home,
  User,
  Briefcase,
  FileText,
} from "lucide-react";

// Define navigation sitemap
const sitemap = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Resume", href: "#resume", icon: FileText },
];

// Define social media links
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dhivyabharathis14",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/s-dhivya-bharathi-274a2a191/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:shanmugamdhivya2@gmail.com",
    icon: MailSearch,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dhivya_bharathi14/",
    icon: Instagram,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section pb-24 lg:pb-32">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* Left Section */}
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-300 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socials.map(({ href, icon: Icon, label }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center ring-inset ring-1 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
                aria-label={`Visit my ${label}`}
              >
                <Icon size={24} />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 reveal-up">
              Navigation
            </h3>

            <ul className="space-y-3">
              {sitemap.map(({ label, href, icon: IconComponent }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className="group flex items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                  >
                    <IconComponent
                      size={18}
                      className="text-zinc-500 group-hover:text-blue-400 transition-all duration-500 ease-out group-hover:scale-110"
                    />
                    <span className="font-medium transition-all duration-500 ease-out">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 reveal-up">
              Connect
            </h3>

            <ul className="space-y-3">
              {socials.map(({ label, href, icon: IconComponent }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                  >
                    <IconComponent
                      size={18}
                      className="text-zinc-500 group-hover:text-blue-400 transition-all duration-500 ease-out group-hover:scale-110"
                    />
                    <span className="font-medium transition-all duration-500 ease-out">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
