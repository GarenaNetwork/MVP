import {
  IconDiscord,
  IconMedium,
  IconTelegram,
  IconTwitter,
} from "../../components";
import { FaLinkedin } from "react-icons/fa6";


export const navLinkData = [
  {
    label: "Home",
    to: "#home",
  },
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Tokenomics",
    to: "#tokenomics",
  },
];

export const socialLinks = [
  {
    icon: <IconTelegram />,
    link: "https://t.me/someurl",
  },
  {
    icon: <IconDiscord />,
    link: "https://discord.gg/someurl",
  },
  {
    icon: <IconTwitter />,
    link: "https://twitter.com/someurl",
  },
  {
    icon: <IconMedium />,
    link: "https://medium.com/@someurl",
  },
  {
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/company/someurl/",
  },
];
