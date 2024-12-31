import { motion } from "framer-motion";
import SectionHeading from "../ui/sectionheadings";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

interface SocialIcon {
  icon: IconType;
  href: string;
  hoverColor?: string;
}

const socialIcons: SocialIcon[] = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pranayghuge/",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/PranayGhuge2/",
    hoverColor: "hover:text-gray-400",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pranay-ghuge-2a4a75137/",
    hoverColor: "hover:text-blue-600",
  },
];

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ amount: "some", once: true }}
    className="font-bold text-gradient-primary"
  >
    {children}
  </motion.span>
);

const TextContent = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ amount: "some", once: true }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="text-gray-300"
  >
    {children}
  </motion.span>
);

export default function About() {
  return (
    <section
      id="about"
      className="flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="mx-auto my-5 max-w-7xl text-justify text-base sm:my-16 sm:text-lg md:text-xl lg:my-10 lg:text-2xl">
        <p className="mb-4 leading-relaxed sm:mb-6">
          <TextContent>My love for technology began when I played </TextContent>
          <GradientText>Project I.G.I. </GradientText>
          <TextContent>
            — but not just for the missions. I was fascinated by how the game
            worked behind the scenes, sparking a curiosity that led me to
            computer science.
          </TextContent>
        </p>
        <p className="mb-4 leading-relaxed sm:mb-6">
          <TextContent>
            For me, programming is all about keeping things simple. I love
            figuring out how things work and turning that understanding into{" "}
          </TextContent>
          <GradientText>clean, straightforward code.</GradientText>
        </p>
        <p className="mb-4 leading-relaxed sm:mb-6">
          <TextContent>
            When I'm not coding, I'm exploring new technologies, working on side
            projects, diving into gaming, or getting lost in a good movie. I
            take pride in writing clean, maintainable code and enjoy turning
            complex problems into{" "}
          </TextContent>
          <GradientText>simple, effective solutions.</GradientText>
        </p>
      </div>
      <div className="flex gap-8 self-center">
        {socialIcons.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index + social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-12 w-12 ${social.hoverColor} transition-colors duration-200 max-sm:h-8 max-sm:w-8`}
            >
              <Icon className="h-full w-full" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
