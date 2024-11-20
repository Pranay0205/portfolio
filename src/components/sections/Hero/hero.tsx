import { useEffect, useRef, useState } from "react";
import classes from "./hero.module.css";
import myLightingDP from "../../../assets/img/Pranay_DP_Lighting_Cropped.png";
import { motion, AnimatePresence } from "framer-motion";

function randomletter() {
  const letters = "10";
  return letters[Math.floor(Math.random() * letters.length)];
}

function randomString(size: number): string {
  let result = "";
  for (let i = 0; i < size; i++) {
    result += randomletter();
  }
  return result;
}

export default function Hero() {
  const [binaryString, setBinaryString] = useState<string>("");

  const cardLetterRef = useRef<HTMLDivElement>(null);

  const updateBinaryString = () => {
    setBinaryString(randomString(1500));
  };

  function handleOnMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (cardLetterRef.current) {
      const target = e.target as HTMLDivElement;
      const xcord = e.clientX;
      const ycord = e.clientY;
      const { x, y } = target.getBoundingClientRect();

      // Update CSS variables for positioning
      cardLetterRef.current.style.setProperty("--x", `${xcord - x}px`);
      cardLetterRef.current.style.setProperty("--y", `${ycord - y}px`);

      // Update the random binary string
      updateBinaryString();
    }
  }

  function handleTouch(e: React.TouchEvent<HTMLDivElement>) {
    if (cardLetterRef.current) {
      const touch = e.touches[0];
      const target = e.target as HTMLDivElement;
      const { x, y } = target.getBoundingClientRect();

      cardLetterRef.current.style.setProperty("--x", `${touch.clientX - x}px`);
      cardLetterRef.current.style.setProperty("--y", `${touch.clientY - y}px`);
      updateBinaryString();
    }
  }

  const words = [
    "console logs",
    "hardcoding values",
    "404 pages",
    "infinite loops",
    "bad docs",
    "prod testing",
    "git push --force",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:text-xs sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2 place-items-center w-screen h-screen p-4 md:p-8 text-base sm:text-sm md:text-lg lg:text-xl">
        <div className="font-bold text-center sm:text-left max-w-2xl">
          <motion.p
            className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-lg m-0 p-0 text-gradient-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is{" "}
          </motion.p>
          <motion.h1
            className="mb-4 sm:mb-8 
                     text-4xl sm:text-5xl md:text-8xl 
                     max-sm:leading-tight text-gradient-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Pranay Ghuge
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4
                        text-sm sm:text-base md:text-xl overflow-hidden text-gradient-white sm:flex-wrap sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{ width: "fit-content" }}
              className="w-[200px] sm:w-[210px] md:w-[300px] flex justify-center overflow-hidden"
            >
              a Software Engineer, Found my way through
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="bg-gradient-custom inline-block text-transparent bg-clip-text
                         font-bold max-sm:text-base sm:text-lg md:text-xl whitespace-nowrap"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "block" }}
            transition={{ duration: 1 }}
            className="sm:mt-5 text-sm sm:text-base md:text-lg text-gradient-white"
          >
            {" "}
            to build something amazing
          </motion.p>
        </div>
        <div className={[classes.card_wrapper, "max-sm:w-full max-sm:max-w-md"].join(" ")}>
          <div
            className={classes.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
            onTouchMove={handleTouch}
            aria-hidden="true"
          >
            <div className={classes.card_image}>
              <img
                src={myLightingDP}
                alt="profile_photo"
                className={[classes.profile_image, "max-sm:w-32"].join(" ")}
              />
            </div>
            <div className={classes.card_gradient}></div>
            <div className={classes.card_letters} ref={cardLetterRef}>
              {binaryString}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
