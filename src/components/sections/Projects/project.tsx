import projectData from "../../../assets/data/project.json";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import SectionHeading from "../ui/sectionheadings";

export default function Project() {
  const { projects } = projectData;

  return (
    <section>
      <div className="flex flex-col">
        <SectionHeading>Side Quests</SectionHeading>
        <div className="mt-20 grid grid-cols-1 justify-items-center gap-20 p-8">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: "some", once: true }}
              transition={{ duration: 0.8 }}
              className="relative inset-0 h-full w-fit rounded-3xl border border-gray-800 bg-gray-900/50 bg-gradient-to-tl from-black/80 via-transparent to-transparent p-10 max-sm:m-4 max-sm:w-fit sm:w-[30rem] md:w-[50rem] lg:w-[60rem]"
            >
              <h2 className="mb-4 flex gap-4 text-4xl font-bold text-gradient-white">
                {project.name}
                <a
                  className="hover:cursor-pointer"
                  href={project.link}
                  target="_blank"
                >
                  <GoLinkExternal className="text-white/40" />
                </a>
              </h2>
              <div>
                <h4 className="mb-4 font-semibold text-gray-400">Tech Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, index) => (
                    <div
                      key={project.name + index}
                      className="m-1 rounded-full bg-light p-2"
                    >
                      <span className="bg-gradient-custom bg-clip-text text-sm font-bold text-transparent">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="my-4 font-semibold text-gray-400">Impact</h4>
                    <ul className="mt-2 flex list-disc flex-wrap gap-2">
                      {project.achievements.map((metric, index) => (
                        <li
                          key={project.name + index}
                          className="x-3 rounded-full py-1 text-sm text-white"
                        >
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  {project.img != null ? (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="mt-4 rounded-lg object-cover text-center opacity-60 transition-opacity hover:opacity-95"
                    />
                  ) : (
                    <FaGithub className="absolute bottom-20 right-4 h-64 w-64 text-white/10" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
