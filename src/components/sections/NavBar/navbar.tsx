import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxDownload } from "react-icons/rx";
import { IoMenu, IoClose } from "react-icons/io5";
import personalLogo from "../../../assets/img/Logo_bg.png";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [binaryText, setBinaryText] = useState("10101010010100101000010010");
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { path: "#home", label: "Home" },
      { path: "#about", label: "About Me" },
      { path: "#skills", label: "Tech Arsenal" },
      { path: "#experience", label: "Experience Log" },
      { path: "#testimonials", label: "Word on Street" },
      { path: "#projects", label: "Side Quests" },
    ],
    [],
  );

  const generateBinary = (length: number): string => {
    return Array.from({ length }, () => (Math.random() > 0.5 ? "1" : "0")).join(
      "",
    );
  };

  useEffect(() => {
    let intervalId: number | undefined;

    if (isClicked) {
      intervalId = setInterval(() => {
        setBinaryText(generateBinary(25));
      }, 30);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isClicked]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => ({
        id: link.path.slice(1),
        offset: document.getElementById(link.path.slice(1))?.offsetTop || 0,
      }));
      let currentSection;
      if (currentScrollPos <= prevScrollPos) {
        currentSection =
          [...sections]
            .reverse()
            .find((section) => currentScrollPos >= section.offset - 200)?.id ||
          sections[0].id;

        setActiveSection(currentSection);
      } else {
        currentSection =
          sections.find((section) => currentScrollPos >= section.offset - 200)
            ?.id || sections[0].id;
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, navLinks]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(path.slice(1));
    if (element) {
      // Use a smaller offset on mobile
      const isMobile = window.innerWidth < 768;

      const headerHeight = isMobile ? 100 : 40;

      // Calculate position accounting for header
      const elementPosition = element.offsetTop;

      const offset = isMobile ? 0 : 100;

      setTimeout(
        () =>
          window.scrollTo({
            top: elementPosition - headerHeight - offset,
            behavior: "smooth",
          }),
        100,
      );

      // Close mobile menu after click
      setIsMenuOpen(false);
    }
  };

  const handledownloadClick = () => {
    setIsClicked(true);
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/10OqdDoIiFA-gNecR7_V4kcEfVzCyPDgt/view?usp=sharing";
    link.download = "Pranay-Ghuge-CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <motion.nav
      layout
      initial={{ y: -30, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="fixed left-0 right-0 top-0 z-50 mt-4 origin-center rounded-xl bg-gray-900/50 p-2 backdrop-blur-sm max-sm:mx-auto max-sm:w-[90%] md:mx-28 lg:mx-28"
    >
      <div className="mx-auto flex items-center justify-between px-4 md:px-12">
        <div
          className="cursor-pointer"
          onClick={(event) => handleNavClick(event, "#home")}
        >
          <img
            src={personalLogo}
            className="h-8 w-auto object-contain p-0 max-sm:h-10 md:h-16 md:p-2"
            alt="Logo_With_Animation"
          />
        </div>

        {/* Logo */}
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-400 hover:text-white 2xl:hidden"
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 2xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`group relative whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-all duration-300 ease-in-out hover:scale-110 ${
                activeSection === link.path.slice(1)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-gray-800 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"></span>
              <AnimatePresence mode="wait">
                {activeSection === link.path.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-lg bg-gray-800"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>

        <button
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200 px-2 font-medium uppercase max-sm:h-12 max-sm:w-20 md:h-12 md:w-56 md:px-6"
          onClick={handledownloadClick}
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
                <span className="hidden bg-gradient-custom bg-clip-text text-sm text-transparent md:block">
                  Download Resume
                </span>
                <RxDownload className="size-6 self-center text-accent md:ml-1 md:size-4" />
              </motion.div>
            ) : (
              <motion.span
                layout
                key="binary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-12 bg-gradient-custom bg-clip-text text-transparent"
              >
                {binaryText}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden 2xl:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                    activeSection === link.path.slice(1)
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
