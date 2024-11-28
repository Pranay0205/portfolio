import { motion } from "framer-motion";
import SectionHeading from "../ui/sectionheadings";

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
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
    <section className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <SectionHeading>About Me</SectionHeading>
      <div className="mx-auto my-12 max-w-7xl text-justify text-base sm:my-16 sm:text-lg md:text-xl lg:my-24 lg:text-2xl">
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
    </section>
  );
}
