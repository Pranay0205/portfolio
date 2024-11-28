import { motion } from "framer-motion";
import experienceData from "../../../assets/data/experience.json";
import SectionHeading from "../ui/sectionheadings";

export default function Experience() {
  const { experiences } = experienceData;

  return (
    <section>
      <div className="flex flex-col justify-center">
        <SectionHeading>Experience Log</SectionHeading>
        <div className="relative m-36 w-1/2 self-center max-sm:w-full">
          {/* Timeline line */}

          <motion.div
            initial={{ opacity: 0, height: 0, y: 20 }}
            whileInView={{ opacity: 1, height: "100%", y: 0 }}
            viewport={{ amount: "some", once: true }}
            transition={{ duration: 2, delay: 0.9 }}
            className="absolute bottom-0 left-3.5 top-4 w-[1px] bg-gradient-to-b from-primary via-secondary last:w-0 max-sm:left-[2rem] max-sm:top-8"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + index}
              className="relative mb-12 ml-12 max-sm:ml-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: "some", once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -left-14 top-0 rounded-full bg-gray-900 p-2 text-center max-sm:-left-[2.8rem] max-sm:p-[20px]">
                <img
                  src={exp.logo}
                  alt={exp.company + " Logo"}
                  className="h-7 w-7 text-dark max-sm:h-4 max-sm:w-4"
                />
              </div>

              <div className="relative inset-0 top-4 m-4 border border-gray-800 bg-gray-900/50 bg-gradient-to-tl from-black/80 via-transparent to-transparent text-left text-white shadow-lg backdrop-blur-xl max-sm:m-8 max-sm:rounded-lg max-sm:p-4 sm:rounded-e-3xl sm:rounded-es-3xl sm:p-10">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gradient-white">
                      {exp.role}
                    </h3>
                    <p className="inline-block bg-gradient-custom bg-clip-text font-semibold text-transparent">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-light sm:ml-4 sm:text-sm">
                      {exp.period}
                    </p>

                    <p className="text-sm text-light">{exp.location}</p>
                  </div>
                </div>
                {exp.projects.map((project, pIndex) => (
                  <div
                    key={project.name + pIndex}
                    className="mb-4 last:mb-0 max-sm:m-4"
                  >
                    <h4 className="mb-2 text-lg font-semibold text-gray-400">
                      {project.name}
                    </h4>
                    <ul className="list-outside list-disc space-y-1 text-gray-400">
                      {project.achievements.map((achievement, aIndex) => (
                        <li
                          key={project.name + aIndex}
                          className="break-words text-sm sm:min-w-20"
                        >
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
