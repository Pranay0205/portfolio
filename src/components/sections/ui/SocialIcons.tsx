import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

interface SocialIcon {
  icon: IconType;
  href: string;
  hoverColor?: string;
}

export const socialIcons: SocialIcon[] = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pranay-ghuge-2a4a75137/",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Pranay0205",
    hoverColor: "hover:text-gray-600",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pranayghuge/",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/PranayGhuge2/",
    hoverColor: "hover:text-gray-400",
  }  
];
