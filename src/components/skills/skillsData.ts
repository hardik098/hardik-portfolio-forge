
import { 
  Code, 
  Database, 
  Cloud, 
  Settings,
  Code2,
  FileCode,
  Braces,
  Palette,
  Zap,
  Wind,
  Server,
  Globe,
  Layers,
  GitBranch,
  Monitor,
  Terminal,
  Mail,
  Users,
  Smartphone,
  Apple,
  BookOpen,
  GitPullRequest,
  FlaskConical,
  BarChart2,
  CloudCog,
  Linkedin,
  GlobeLock
} from 'lucide-react';

export const skillIcons: Record<string, any> = {
  "HTML": Code,
  "CSS": Palette,
  "JavaScript": Braces,
  "Bootstrap": Palette,
  "Ajax": GlobeLock,
  "jQuery": Braces,
  "React.js": Code2,
  "Node.js": Server,
  "Express.js": Zap,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "SQLite": Database,
  "PHP": Code2,
  "C#": Code2,
  "ASP.NET Core": Layers,
  "Vanilla CQRS": BookOpen,
  "Java EE": FlaskConical,
  "Android App Development (Kotlin)": Smartphone,
  "iOS App Development (Swift)": Apple,
  "Restful APIs": Globe,
  "Git": GitBranch,
  "GitHub": GitPullRequest,
  "PowerBi": BarChart2,
  "Azure Cloud": CloudCog,
  "Postman": Mail,
};

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Ajax",
      "jQuery",
      "React.js",
      "Android App Development (Kotlin)",
      "iOS App Development (Swift)"
    ],
    color: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/25",
    icon: Code,
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-purple-600/5 to-transparent"
  },
  {
    title: "Backend Development",
    skills: [
      "ASP.NET Core",
      "Vanilla CQRS",
      "Node.js",
      "Express.js",
      "Restful APIs",
      "PHP",
      "C#",
      "Java EE"
    ],
    color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/25",
    icon: Settings,
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/10 via-teal-600/5 to-transparent"
  },
  {
    title: "Database & Cloud",
    skills: [
      "RDBMS",
      "MongoDB",
      "PostgreSQL",
      "SQLite",
      "Azure Cloud"
    ],
    color: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    borderColor: "border-orange-500/50",
    glowColor: "shadow-orange-500/25",
    icon: Database,
    bgPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-600/10 via-red-600/5 to-transparent"
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "PowerBi",
      "Postman"
    ],
    color: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    borderColor: "border-violet-500/50",
    glowColor: "shadow-violet-500/25",
    icon: Cloud,
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-600/10 via-purple-600/5 to-transparent"
  }
];
