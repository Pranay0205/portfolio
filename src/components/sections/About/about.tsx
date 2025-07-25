import { motion } from "framer-motion";
import SectionHeading from "../ui/sectionheadings";
import { socialIcons } from "../ui/SocialIcons"

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

const MotionDiv = ({children, className} : {children: React.ReactNode, className : string}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: "some", once: true }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function About() {
  return (
    <section
      id="about"
      className="flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading>About Me</SectionHeading>
        <div className="mx-auto my-5 max-w-7xl text-justify text-base sm:my-16 sm:text-lg md:text-xl lg:my-10 lg:text-2xl">
        <p className="mb-4 leading-relaxed sm:mb-6">
          <TextContent>I'm </TextContent>
          <GradientText>Pranay Ghuge</GradientText>
          <TextContent>, a software engineer driven by a straightforward passion: </TextContent>
          <GradientText>building good, new things</GradientText>
          <TextContent> and </TextContent>
          <GradientText>constantly learning how to do it better</GradientText>
          <TextContent>. That </TextContent>
          <GradientText>curiosity</GradientText>
          <TextContent> has been the engine of my career, from my first projects to my first company work as a software engineer. For me, the best part of software engineering is the endless opportunity to </TextContent>
          <GradientText>learn new concepts</GradientText>
          <TextContent> and </TextContent>
          <GradientText>create</GradientText>
          <TextContent>.</TextContent>
        </p>

        <p className="mb-4 leading-relaxed sm:mb-6">
          <TextContent>Beyond my day job, I love </TextContent>
          <GradientText>exploring emerging technologies</GradientText>
          <TextContent> and </TextContent>
          <GradientText>building passion projects</GradientText>
          <TextContent> that push my boundaries. And when I'm away from the screen, I'm usually </TextContent>
          <GradientText>exploring virtual worlds</GradientText>
          <TextContent> - currently counting down for GTA 6 - or </TextContent>
          <GradientText>getting lost in a great movie</GradientText>
          <TextContent>.</TextContent>
        </p>
      </div>
      <MotionDiv className="flex gap-8 self-center">
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
      </MotionDiv>
    </section>
  );
}
