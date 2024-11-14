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

  function handleTouchEvent(e: React.TouchEvent<HTMLDivElement>) {}

  const words = [
    "404 pages",
    "infinite loops",
    "production fires",
    "console logs",
    "hardcoding values",
    "poor documentation",
  ];

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
        <motion.p
          className={classes.hero_small_text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is{" "}
        </motion.p>
        <motion.h1 className={classes.hero_name_text} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Pranay Ghuge
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: "block", maxWidth: "75rem" }}
          className={classes.hero_intro_text}
        >
          a Software Engineer, Found my way through
          <AnimatePresence mode="sync">
            <motion.span
              key={words[currentWordIndex]}
              initial={{ opacity: 0, y: 50, margin: "1rem", width: "15rem" }}
              animate={{ opacity: 1, y: 0, margin: "1rem" }}
              style={{ display: "inline-block" }}
              className={classes.hero_rotating_word}
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
          <p> to build something amazing</p>
        </motion.div>
      </div>
      <div className={classes.card_wrapper}>
        <div
          className={classes.card}
          onMouseMove={(e) => handleOnMouseMove(e)}
          onTouchMove={(e) => handleTouchEvent(e)}
          aria-hidden="true"
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
