import projectData from "../../../assets/data/project.json";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

export default function Project() {
  const { projects } = projectData;

  return (
    <section>
      <div className="flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-white uppercase block m-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-20 justify-items-center p-8">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: "some", once: true }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gray-900/50 border border-gray-800 rounded-3xl relative p-10 lg:w-[60rem] md:w-[50rem] sm:w-[30rem] max-sm:m-4 inset-0 bg-gradient-to-tl from-black/80 via-transparent to-transparent"
            >
              <h2 className="font-bold text-gradient-white text-3xl mb-4 flex gap-4">
                {project.name}
                <a className="hover:cursor-pointer" href={project.link} target="_blank">
                  <GoLinkExternal className="text-white/40" />
                </a>
              </h2>
              <div>
                <h4 className="font-semibold text-gray-400 mb-4">Tech Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, index) => (
                    <div key={project.name + index} className="bg-light m-1 p-2 rounded-full">
                      <span className="bg-gradient-custom text-transparent bg-clip-text text-sm font-bold">{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-400 my-4">Impact</h4>
                    <ul className="mt-2 flex flex-wrap gap-2 list-disc">
                      {project.achievements.map((metric, index) => (
                        <li key={project.name + index} className="text-white x-3 py-1 rounded-full text-sm">
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
                      className="text-center object-cover rounded-lg opacity-60 hover:opacity-95 transition-opacity mt-4"
                    />
                  ) : (
                    <FaGithub className="w-64 h-64 text-white/10 absolute right-4 bottom-20" />
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
