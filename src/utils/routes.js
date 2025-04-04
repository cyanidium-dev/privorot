import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

// Основные ссылки для хедера, бургера и других общих компонентов
export const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Ссылки, которые используются только в футере
export const footerLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

// Соц.сети

export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: FaFacebook },
  { name: "Twitter", url: "https://twitter.com", icon: FaTwitter },
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
  { name: "GitHub", url: "https://github.com", icon: FaGithub },
];
