import personalLogo from "../../../assets/img/Logo_bg.png";
import { RxDownload } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import resumePdf from "../../../assets/data/Pranay-Ghuge-Resume.pdf";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [binaryText, setBinaryText] = useState<string>(
    "10101010010100101000010010",
  );

  const generateBinary = (length: number): string => {
    return Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join(
      "",
    );
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
    setIsClicked(true);

    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Pranay-Ghuge-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  };

  return (
    <motion.nav
      layout
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="bg-gray-900/50 rounded-xl mt-4 p-2 origin-center"
    >
      <div className="flex justify-between mx-auto px-12 max-sm:px-2">
        <img
          src={personalLogo}
          className="w-fit h-16 p-2 max-sm:p-0 max-sm:h-8 max-sm:self-center"
          alt="Logo_With_Animation"
        />
        <button
          className="relative inline-flex h-12 w-72 items-center justify-center self-center rounded-xl bg-zinc-200 px-10 font-medium uppercase max-sm:w-10 max-sm:px-15"
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
                <span className="bg-gradient-custom text-transparent bg-clip-text max-sm:hidden">
                  Download Resume
                </span>
                <RxDownload className="text-accent size-4 ml-1 inline-block self-center max-sm:m-0 max-sm:size-6" />
              </motion.div>
            ) : (
              <motion.span
                layout
                key="binary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-custom text-transparent bg-clip-text max-sm:w-12"
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
