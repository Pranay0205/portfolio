import Aws from "./../../../assets/logos/Aws.svg";
import Azure from "./../../../assets/logos/Azure.svg";
import CSharp from "./../../../assets/logos/C_Sharp.svg";
import Cpp from "./../../../assets/logos/Cpp.svg";
import DotNetCore from "./../../../assets/logos/Dot_Net_Core.svg";
import Firebase from "./../../../assets/logos/Firebase.svg";
import Github from "./../../../assets/logos/GitHub.svg";
import JavaScript from "./../../../assets/logos/JavaScipt.svg";
import MongoDB from "./../../../assets/logos/Mongodb.svg";
import MySQL from "./../../../assets/logos/MySQL.svg";
import Oracle from "./../../../assets/logos/Oracle.svg";
import Python from "./../../../assets/logos/Python.svg";
import React from "./../../../assets/logos/React.svg";
import Tailwind from "./../../../assets/logos/Tailwind.svg";
import Unity from "./../../../assets/logos/Unity.svg";
import UnrealEngine from "./../../../assets/logos/Unreal_Engine.svg";
import Materialui from "./../../../assets/logos/Material_ui.svg";
import Postman from "./../../../assets/logos/Postman.svg";
import { motion, AnimatePresence } from "framer-motion";

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
    pythonBlue: "hover:shadow-blue-500/20", // Python blue
    reactCyan: "hover:shadow-cyan-400/20", // React cyan
    tailwindCyan: "hover:shadow-cyan-500/20", // Tailwind cyan
    unityBlack: "hover:shadow-neutral-600/20", // Unity dark gray
    unrealBlue: "hover:shadow-indigo-500/20", // Unreal Engine indigo
    materialui: "hover:shadow-blue-500/20", // Material UI
    postman: "hover:shadow-orange-600/20", // Postman
  };

  const glowColor = {
    awsOrange: "orange", // AWS orange
    azureBlue: "blue", // Azure lighter blue
    csharpPurple: "purple", // C# purple
    cppBlue: "blue", // C++ dark blue
    dotnetPurple: "purple", // .NET purple
    firebaseYellow: "amber", // Firebase warm yellow
    githubGray: "gray", // GitHub gray
    jsYellow: "yellow", // JavaScript yellow
    mongoGreen: "green", // MongoDB green
    mysqlBlue: "blue", // MySQL blue
    oracleRed: "red", // Oracle red
    pythonBlue: "blue", // Python blue
    reactCyan: "cyan", // React cyan
    tailwindCyan: "cyan", // Tailwind cyan
    unityBlack: "neutral", // Unity dark gray
    unrealBlue: "indigo", // Unreal Engine indigo
    materialui: "blue", // Material UI
    postman: "orange", // Postman
  };

  const frameworks: Framework[] = [
    {
      id: "react",
      src: React,
      alt: "React",
      color: "reactCyan",
    },
    {
      id: "tailwind",
      src: Tailwind,
      alt: "Tailwind CSS",
      color: "tailwindCyan",
    },
    {
      id: "javascript",
      src: JavaScript,
      alt: "JavaScript",
      color: "jsYellow",
    },
    {
      id: "materialui",
      src: Materialui,
      alt: "Material UI",
      color: "materialui",
    },
    {
      id: "dotnetcore",
      src: DotNetCore,
      alt: ".NET Core",
      color: "dotnetPurple",
    },
    {
      id: "python",
      src: Python,
      alt: "Python",
      color: "pythonBlue",
    },
    {
      id: "csharp",
      src: CSharp,
      alt: "C Sharp",
      color: "csharpPurple",
    },
    {
      id: "cpp",
      src: Cpp,
      alt: "C++",
      color: "cppBlue",
    },
    {
      id: "postman",
      src: Postman,
      alt: "Postman",
      color: "postman",
    },
    {
      id: "aws",
      src: Aws,
      alt: "Amazon Web Services",
      color: "awsOrange",
    },
    {
      id: "azure",
      src: Azure,
      alt: "Microsoft Azure",
      color: "azureBlue",
    },
    {
      id: "firebase",
      src: Firebase,
      alt: "Firebase",
      color: "firebaseYellow",
    },
    {
      id: "github",
      src: Github,
      alt: "GitHub",
      color: "githubGray",
    },

    {
      id: "mongodb",
      src: MongoDB,
      alt: "MongoDB",
      color: "mongoGreen",
    },
    {
      id: "mysql",
      src: MySQL,
      alt: "MySQL",
      color: "mysqlBlue",
    },
    {
      id: "oracle",
      src: Oracle,
      alt: "Oracle",
      color: "oracleRed",
    },
    {
      id: "unity",
      src: Unity,
      alt: "Unity",
      color: "unityBlack",
    },
    {
      id: "unrealengine",
      src: UnrealEngine,
      alt: "Unreal Engine",
      color: "unrealBlue",
    },
  ];

  return (
    <div className="h-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "some", once: true }}
        transition={{ duration: 0.8 }}
        className="text-center font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-white uppercase"
      >
        Skills
      </motion.h1>
      <div className="w-full max-w-max mx-auto px-8 my-40">
        <div className="grid grid-flow-row gap-4 md:gap-8 m-10 lg:grid-cols-10 md:grid-cols-6 sm:gird-cols-2 max-sm:gird-cols-2">
          {frameworks.map((framework, index) => (
            <AnimatePresence key={framework.id} mode="wait">
              <motion.div
                key={framework.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: "some", once: true }}
                transition={{ duration: 0.5, delay: 0.04 * index }}
                className={`aspect-square rounded-xl bg-gray-900/50 border-cyan-400 p-4 flex items-center justify-center transition-shadow duration-500 shadow-none backdrop-blur-lg backdrop-saturate-100 hover:shadow-xl ${colorToClass[framework.color]} max-sm:w-full max-sm:h-full`}
              >
                {framework && (
                  <div className={`w-full h-full rounded-xl flex items-center justify-center `}>
                    <img
                      src={framework.src}
                      alt={framework.alt}
                      className="w-full h-full max-w-[120px] max-h-[120px] object-contain"
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
    </div>
  );
}
