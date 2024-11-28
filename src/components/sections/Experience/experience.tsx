import { motion } from "framer-motion";
import experienceData from "../../../assets/data/experience.json";

export default function Experience() {
  const { experiences } = experienceData;

  return (
    <section>
      <div className="flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-bold lg:text-7xl sm:text-5xl md:text-6xl text-gradient-white uppercase"
        >
          Experience Log
        </motion.h2>
        <div className="relative w-1/2 self-center m-36 max-sm:w-full">
          {/* Timeline line */}

          <motion.div
            initial={{ opacity: 0, height: 0, y: 80 }}
            whileInView={{ opacity: 1, height: "100%", y: 0 }}
            viewport={{ amount: "some", once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-3.5 top-4 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary last:w-0 max-sm:left-[2rem] max-sm:top-8"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + index}
              className="mb-12 ml-12 relative max-sm:ml-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: "some", once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute -left-14 top-0 p-2 bg-gray-900 rounded-full text-center max-sm:-left-[2.8rem] max-sm:p-[20px]">
                <img src={exp.logo} alt={exp.company + " Logo"} className="w-7 h-7 max-sm:w-4 max-sm:h-4 text-dark" />
              </div>

              <div className="relative m-4 top-4 bg-gray-900/50 shadow-lg sm:rounded-e-3xl sm:rounded-es-3xl sm:p-10 border border-gray-800 backdrop-blur-xl text-white text-left max-sm:m-8 max-sm:p-4 max-sm:rounded-lg inset-0 bg-gradient-to-tl from-black/80 via-transparent to-transparent">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gradient-white">{exp.role}</h3>
                    <p className="bg-gradient-custom inline-block text-transparent bg-clip-text font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-light sm:text-sm sm:ml-4">{exp.period}</p>

                    <p className="text-light text-sm">{exp.location}</p>
                  </div>
                </div>
                {exp.projects.map((project, pIndex) => (
                  <div key={project.name + pIndex} className="mb-4 last:mb-0 max-sm:m-4">
                    <h4 className="text-lg font-semibold text-gray-400 mb-2">{project.name}</h4>
                    <ul className="list-disc list-outside text-gray-400 space-y-1">
                      {project.achievements.map((achievement, aIndex) => (
                        <li key={project.name + aIndex} className="text-sm break-words sm:min-w-20 ">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
