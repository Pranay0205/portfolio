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
          className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-white uppercase block"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-1/2 h-full bg-gray-900/50 bg-opacity-60 border border-gray-800 rounded-3xl relative p-10"
            >
              <h2 className="font-bold text-gradient-white text-3xl mb-4 flex gap-4">
                {project.name}
                <a className="hover:cursor-pointer" href={project.link}>
                  <GoLinkExternal className="text-white/40" />
                </a>
              </h2>
              <div>
                <h4 className="font-semibold text-gray-500 mb-4">Tech Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, index) => (
                    <div className="bg-light m-1 p-2 rounded-full">
                      <span key={index} className="bg-gradient-custom text-transparent bg-clip-text text-sm font-bold">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-500 my-4">Impact</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.achievements.map((metric, index) => (
                        <div key={index} className="text-white x-3 py-1 rounded-full text-sm">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  {project.img != null ? (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="text-center object-cover rounded-lg opacity-60 hover:opacity-95 transition-opacity"
                    />
                  ) : (
                    <FaGithub className="w-96 h-96 text-white/10 absolute right-2 bottom-3" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
