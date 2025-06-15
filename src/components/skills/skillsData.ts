
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
  Users
} from 'lucide-react';

export const skillIcons: Record<string, any> = {
  "React.js": Code2,
  "TypeScript": FileCode,
  "HTML5": Code,
  "CSS3": Palette,
  "JavaScript": Braces,
  "Tailwind CSS": Wind,
  ".NET Core": Layers,
  "C#": Code2,
  "Node.js": Server,
  "Express.js": Zap,
  "RESTful APIs": Globe,
  "GraphQL": Database,
  "SQL Server": Database,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "Azure": Cloud,
  "AWS": Cloud,
  "Docker": Layers,
  "Git": GitBranch,
  "Visual Studio": Monitor,
  "VS Code": Terminal,
  "Postman": Mail,
  "Jenkins": Settings,
  "Agile": Users
};

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    color: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/25",
    icon: Code,
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-purple-600/5 to-transparent"
  },
  {
    title: "Backend Development", 
    skills: [".NET Core", "C#", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
    color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/25",
    icon: Settings,
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/10 via-teal-600/5 to-transparent"
  },
  {
    title: "Database & Cloud",
    skills: ["SQL Server", "MongoDB", "PostgreSQL", "Azure", "AWS", "Docker"],
    color: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    borderColor: "border-orange-500/50",
    glowColor: "shadow-orange-500/25",
    icon: Database,
    bgPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-600/10 via-red-600/5 to-transparent"
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Visual Studio", "VS Code", "Postman", "Jenkins", "Agile"],
    color: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    borderColor: "border-violet-500/50",
    glowColor: "shadow-violet-500/25",
    icon: Cloud,
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-600/10 via-purple-600/5 to-transparent"
  }
];
