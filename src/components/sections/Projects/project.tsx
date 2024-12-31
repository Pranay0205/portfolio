import projectData from "../../../assets/data/project.json";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import SectionHeading from "../ui/sectionheadings";

const DefaultProjectImage = ({ name }: { name: string }) => (
  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    <div className="absolute inset-0 opacity-30">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-overlay"
          style={{
            width: "40%",
            height: "40%",
            background:
              "radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
    <h4 className="px-4 text-center text-2xl font-bold text-white/20 md:text-4xl">
      {name}
    </h4>
  </div>
);

export default function Project() {
  const { projects } = projectData;

  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <SectionHeading>Side Quests</SectionHeading>
        <div className="w-full max-w-5xl space-y-8 md:space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              className="group relative"
            >
              <div className="flex flex-col-reverse gap-4 rounded-3xl border border-gray-800 bg-gray-900/50 bg-gradient-to-tl from-black/80 via-transparent to-transparent p-4 sm:m-4 md:grid-cols-12 md:gap-8 md:p-10">
                <div className="z-10 space-y-4 md:col-span-5 md:space-y-6">
                  <motion.h3
                    className="flex items-center gap-4 text-2xl font-bold text-gradient-white md:text-4xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.name}
                    <a
                      href={project.link}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <GoLinkExternal className="text-white/40" />
                    </a>
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-400 md:text-xl">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, index) => (
                        <span
                          key={tech + index}
                          className="rounded-full bg-light p-2"
                        >
                          <span className="bg-gradient-custom bg-clip-text text-sm font-bold text-transparent">
                            {tech}
                          </span>
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                  >
                    <h4 className="text-lg font-semibold text-gray-400 md:text-xl">
                      Impact
                    </h4>
                    <ul className="flex list-disc flex-col gap-2 pl-4">
                      {project.achievements.map((achievement, index) => (
                        <li
                          key={achievement + index}
                          className="text-sm text-white md:text-base"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg md:col-span-7 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="h-full w-full object-contain opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-95"
                    />
                  ) : (
                    <DefaultProjectImage name={project.name} />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
