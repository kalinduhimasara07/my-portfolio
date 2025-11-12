import { 
  FaJava, FaReact, FaNodeJs, FaPhp, FaPython, FaDocker, FaAws, FaGitAlt, FaFigma, FaBootstrap, 
  FaBrain
} from "react-icons/fa";
import { 
  SiJavascript, SiSpring, SiPostgresql, SiMysql, SiMongodb, SiTailwindcss, SiJira, SiPostman 
} from "react-icons/si";

export const skills = [
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: FaPython },
  { name: "Spring Boot", icon: SiSpring },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "Git & GitHub", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
  { name: "Machine Learning", icon: FaBrain }, // You can use FaBrain for ML
];
