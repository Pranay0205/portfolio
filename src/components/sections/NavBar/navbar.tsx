import personalLogo from "../../../assets/img/Logo_bg_removed.png";
import { RxDownload } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isClicked, SetisClicked] = useState<boolean>(false);

  const [binaryText, setBinaryText] = useState<string>("10101010010100101000010010");

  const generateBinary = (length: number): string => {
    return Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join("");
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isClicked) {
      intervalId = setInterval(() => {
        setBinaryText(generateBinary(25));
      }, 30);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isClicked]);

  const handledownloadClick = () => {
    SetisClicked(true);

    //To Do Functionality To Download

    setTimeout(() => {
      SetisClicked(false);
    }, 800);
  };

  return (
    <motion.nav
      layout
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="bg-gray-900/50 rounded-3xl m-4 my-2 origin-center"
    >
      <div className="flex justify-between mx-auto px-12">
        <img src={personalLogo} className="w-24 h-24" alt="Logo_With_Animation" />
        <button
          className="relative inline-flex h-12 w-72 items-center justify-center self-center rounded-xl bg-zinc-200 px-10 font-medium uppercase"
          onClick={() => handledownloadClick()}
        >
          <AnimatePresence mode="wait">
            {!isClicked ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <span className="bg-gradient-custom text-transparent bg-clip-text">Download Resume</span>
                <RxDownload className="text-accent size-4 ml-1 inline-block self-center" />
              </motion.div>
            ) : (
              <motion.span
                layout
                key="binary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-custom text-transparent bg-clip-text"
              >
                {binaryText}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.nav>
  );
}