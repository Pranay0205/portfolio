import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/sectionheadings";

export default function skills() {
  type Framework = {
    id: string;
    src: string;
    alt: string;
    color: keyof typeof colorToClass;
  };

  const colorToClass = {
    awsOrange: "hover:shadow-orange-500/20", // AWS orange
    azureBlue: "hover:shadow-blue-400/20", // Azure lighter blue
    csharpPurple: "hover:shadow-purple-600/20", // C# purple
    cppBlue: "hover:shadow-blue-600/20", // C++ dark blue
    dotnetPurple: "hover:shadow-purple-900/20", // .NET purple
    firebaseYellow: "hover:shadow-amber-500/20", // Firebase warm yellow
    githubGray: "hover:shadow-gray-500/20", // GitHub gray
    jsYellow: "hover:shadow-yellow-400/20", // JavaScript yellow
    mongoGreen: "hover:shadow-green-500/20", // MongoDB green
    mysqlBlue: "hover:shadow-blue-500/20", // MySQL blue
    oracleRed: "hover:shadow-red-500/20", // Oracle red
    pythonBlue: "hover:shadow-blue-400/20", // Python blue
    reactCyan: "hover:shadow-cyan-400/20", // React cyan
    tailwindCyan: "hover:shadow-cyan-500/20", // Tailwind cyan
    unityBlack: "hover:shadow-neutral-600/20", // Unity dark gray
    unrealBlue: "hover:shadow-indigo-500/20", // Unreal Engine indigo
    materialui: "hover:shadow-blue-500/20", // Material UI
    postman: "hover:shadow-orange-600/20", // Postman
    tensorflow: "hover:shadow-yellow-600/20", // Tensorflow
    nvidiacuda: "hover:shadow-green-600/20", // NvidiaCuda
  };

  const glowColor = {
    awsOrange: "orange", // AWS orange
    azureBlue: "blue", // Azure lighter blue
    csharpPurple: "#9B4993", // C# purple
    cppBlue: "skyblue", // C++ dark blue
    dotnetPurple: "#9B4993", // .NET purple
    firebaseYellow: "amber", // Firebase warm yellow
    githubGray: "gray", // GitHub gray
    jsYellow: "yellow", // JavaScript yellow
    mongoGreen: "green", // MongoDB green
    mysqlBlue: "blue", // MySQL blue
    oracleRed: "red", // Oracle red
    pythonBlue: "skyblue", // Python blue
    reactCyan: "cyan", // React cyan
    tailwindCyan: "cyan", // Tailwind cyan
    unityBlack: "white", // Unity dark gray
    unrealBlue: "indigo", // Unreal Engine indigo
    materialui: "blue", // Material UI
    postman: "orange", // Postman
    tensorflow: "yellow", // Tensorflow
    nvidiacuda: "green", // Nvidia Cuda
  };

  const frameworks: Framework[] = [
    {
      id: "react",
      src: "/logos/React.svg",
      alt: "React",
      color: "reactCyan",
    },
    {
      id: "tailwind",
      src: "/logos/Tailwind.svg",
      alt: "Tailwind CSS",
      color: "tailwindCyan",
    },
    {
      id: "javascript",
      src: "/logos/JavaScipt.svg",
      alt: "JavaScript",
      color: "jsYellow",
    },
    {
      id: "csharp",
      src: "/logos/C_Sharp.svg",
      alt: "C Sharp",
      color: "csharpPurple",
    },
    {
      id: "cpp",
      src: "/logos/Cpp.svg",
      alt: "C++",
      color: "cppBlue",
    },
    {
      id: "dotnetcore",
      src: "/logos/Dot_Net_Core.svg",
      alt: ".NET Core",
      color: "dotnetPurple",
    },
    {
      id: "python",
      src: "/logos/Python.svg",
      alt: "Python",
      color: "pythonBlue",
    },
    {
      id: "tensorflow",
      src: "/logos/Tensorflow.svg",
      alt: "Tensor Flow",
      color: "tensorflow",
    },
    {
      id: "aws",
      src: "/logos/Aws.svg",
      alt: "Amazon Web Services",
      color: "awsOrange",
    },
    {
      id: "azure",
      src: "/logos/Azure.svg",
      alt: "Microsoft Azure",
      color: "azureBlue",
    },
    {
      id: "materialui",
      src: "/logos/Material_ui.svg",
      alt: "Material UI",
      color: "materialui",
    },
    {
      id: "mysql",
      src: "/logos/MySQL.svg",
      alt: "MySQL",
      color: "mysqlBlue",
    },
    {
      id: "oracle",
      src: "/logos/Oracle.svg",
      alt: "Oracle",
      color: "oracleRed",
    },
    {
      id: "firebase",
      src: "/logos/Firebase.svg",
      alt: "Firebase",
      color: "firebaseYellow",
    },
    {
      id: "postman",
      src: "/logos/Postman.svg",
      alt: "Postman",
      color: "postman",
    },
    {
      id: "github",
      src: "/logos/GitHub.svg",
      alt: "GitHub",
      color: "githubGray",
    },
    {
      id: "mongodb",
      src: "/logos/Mongodb.svg",
      alt: "MongoDB",
      color: "mongoGreen",
    },
    {
      id: "nvidiacuda",
      src: "/logos/NvidiaCuda.svg",
      alt: "NvidiaCuda",
      color: "nvidiacuda",
    },
    {
      id: "unity",
      src: "/logos/Unity.svg",
      alt: "Unity",
      color: "unityBlack",
    },
    {
      id: "unrealengine",
      src: "/logos/Unreal_Engine.svg",
      alt: "Unreal Engine",
      color: "unrealBlue",
    },
  ];

  return (
    <section className="h-full" id="skills">
      <SectionHeading>TECH ARSENAL</SectionHeading>
      <div className="mx-auto my-20 w-full max-w-max px-8">
        <div className="sm:gird-cols-2 m-10 grid grid-flow-row gap-4 max-sm:grid-cols-2 md:grid-cols-6 md:gap-8 lg:grid-cols-10">
          {frameworks.map((framework, index) => (
            <AnimatePresence key={framework.id} mode="wait">
              <motion.div
                key={framework.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: "some", once: true }}
                transition={{ duration: 0.5, delay: 0.04 * index }}
                className={`flex aspect-square items-center justify-center rounded-xl border-cyan-400 bg-gray-900/50 p-4 shadow-none backdrop-blur-lg backdrop-saturate-100 transition-shadow duration-500 hover:shadow-xl ${colorToClass[framework.color]} hover:cursor-pointer max-sm:h-full max-sm:w-full`}
              >
                {framework && (
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-xl`}
                  >
                    <img
                      src={framework.src}
                      alt={framework.alt}
                      className="h-full max-h-[120px] w-full max-w-[120px] object-contain"
                      style={{
                        filter: `drop-shadow(0 0 0.8rem color-mix(in srgb, ${glowColor[framework.color]} 50%, transparent))`,
                      }}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
