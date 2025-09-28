import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const sitemap = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Work", href: "#experience", icon: Briefcase },
  { label: "Contact me", href: "#contact", icon: Mail },
];

const socials = [
  // {
  //   label: "GitHub",
  //   href: "https://github.com/dhivyabharathis14",
  //   icon: Github,
  // },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harishkumar-gk/",
    icon: Linkedin,
  },
  // {
  //   label: "harishshri720@gmail.com",
  //   href: "harishshri720@gmail.com",
  //   icon: Mail,
  // },
  // {
  //   label: "Instagram",
  //   href: "https://www.instagram.com/dhivya_bharathi14/",
  //   icon: Instagram,
  // },
];

const Footer = () => {
  return (
    <footer
      className="relative bg-zinc-900/50 border-t border-zinc-800/50 mt-4"
      id="footer"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none"></div>

      <div className="section relative">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Section */}
            <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
              <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                Contact me for collaboration
              </h2>

              <p className="text-zinc-300 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
                Reach out today to discuss your project needs and start
                collaborating on something amazing!
              </p>

              {/* <div className="flex items-center gap-2 mt-auto">
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
              </div> */}
            </div>

            {/* Sitemap + Connect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 reveal-up">
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {sitemap.map(({ label, href, icon: Icon }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="group flex items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                      >
                        <Icon
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

              <div>
                <h3 className="text-white font-semibold text-lg mb-6 reveal-up">
                  Connect
                </h3>
                <ul className="space-y-3">
                  {socials.map(({ label, href, icon: Icon }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                      >
                        <Icon
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
                <ul className="space-y-3">
                  <p
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-auto items-center gap-3 text-zinc-400 py-2 px-3 rounded-lg transition-all duration-500 ease-out hover:text-white hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-zinc-900/20 hover:translate-x-1 reveal-up"
                  >
                    <Mail
                      size={20}
                      className="text-zinc-500 group-hover:text-blue-400 transition-all duration-500 ease-out group-hover:scale-110"
                    />
                    <span className="font-medium transition-all duration-500 ease-out">
                      harishshri720@gmail.com
                    </span>
                  </p>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-10 reveal-up"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 my-10">
            {/* <a href="/" className="logo reveal-up group">
              <img
                src="/images/logo.svg"
                width={48}
                height={48}
                alt="Logo"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a> */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <p className="text-zinc-500 text-sm reveal-up text-center sm:text-left">
                &copy; 2025 All rights reserved
              </p>
              <a
                href=""
                className="text-zinc-300 hover:text-white transition-colors duration-300 text-sm font-medium reveal-up"
              >
                harish.info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
