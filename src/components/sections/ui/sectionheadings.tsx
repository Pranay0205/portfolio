import { motion } from "framer-motion";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className = "" }: HeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: "some", once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-15 text-center font-bold uppercase text-gradient-white max-sm:text-5xl sm:text-5xl md:text-6xl lg:text-7xl ${className} `}
  >
    {children}
  </motion.h2>
);

export default SectionHeading;
