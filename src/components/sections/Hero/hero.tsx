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

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const cardLetterRef = useRef<HTMLDivElement>(null);

  const updateBinaryString = () => {
    setBinaryString(randomString(2000));
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

  useEffect(() => {
    // Initial Generation
    updateBinaryString();

    //Update on Resize
    window.addEventListener("resize", updateBinaryString);

    return () => {
      window.removeEventListener("resize", updateBinaryString);
    };
  }, [isHovered]);

  const words = ["scalable", "high-performance", "innovative", "robust", "efficient"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={classes.hero}>
      <div className={classes.hero_content}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Hi, my name is{" "}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Pranay Ghuge
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-800"
        >
          I'm a full-stack developer with a passion for building{" "}
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {words[currentWordIndex]}{" "}
              </motion.span>
            </AnimatePresence>
          </span>
          web applications.
        </motion.div>
      </div>
      <div className={classes.card_wrapper}>
        <div
          className={classes.card}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={(e) => handleOnMouseMove(e)}
        >
          <div className={classes.card_image}>
            <img src={myLightingDP} alt="logo" className={classes.profile_image} />
          </div>
          <div className={classes.card_gradient}></div>
          <div className={classes.card_letters} ref={cardLetterRef}>
            {binaryString}
          </div>
        </div>
      </div>
    </div>
  );
}
