
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
  // Programming Languages
  "C#": Code2,
  "C": Code,
  "Java": FileCode,
  "JavaScript": Braces,
  "Python": Code2,
  "PHP": Code,
  // Web Technologies
  ".NET Core WC": Layers,
  "ReactJS": Code2,
  "NodeJS": Server,
  // Database
  "MySQL": Database,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "SQL Server": Database,
  // Architecture and Pattern
  "MVC": Layers,
  "REST": Globe,
  "Vanilla CQRS with .NET": Settings,
  // Other Tools and Technologies
  "GitHub": GitBranch,
  "PowerBI": Monitor,
  "Postman": Mail,
  // AI IDEs and Tools
  "Cursor": Terminal,
  "TREA": Code2,
  "Windsurf": Wind,
  "GitHub Copilot": Users
};

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C#", "C", "Java", "JavaScript", "Python", "PHP"],
    color: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/25",
    icon: Code2,
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-purple-600/5 to-transparent"
  },
  {
    title: "Web Technologies",
    skills: [".NET Core WC", "ReactJS", "NodeJS"],
    color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/50",
    glowColor: "shadow-emerald-500/25",
    icon: Globe,
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/10 via-teal-600/5 to-transparent"
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    color: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    borderColor: "border-orange-500/50",
    glowColor: "shadow-orange-500/25",
    icon: Database,
    bgPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-600/10 via-red-600/5 to-transparent"
  },
  {
    title: "Architecture and Pattern",
    skills: ["MVC", "REST", "Vanilla CQRS with .NET"],
    color: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    borderColor: "border-violet-500/50",
    glowColor: "shadow-violet-500/25",
    icon: Layers,
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-600/10 via-purple-600/5 to-transparent"
  },
  {
    title: "Other Tools and Technologies",
    skills: ["GitHub", "PowerBI", "Postman"],
    color: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    borderColor: "border-cyan-500/50",
    glowColor: "shadow-cyan-500/25",
    icon: Settings,
    bgPattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/10 via-blue-600/5 to-transparent"
  },
  {
    title: "AI IDEs and Tools",
    skills: ["Cursor", "TREA", "Windsurf", "GitHub Copilot"],
    color: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    borderColor: "border-pink-500/50",
    glowColor: "shadow-pink-500/25",
    icon: Terminal,
    bgPattern: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-600/10 via-rose-600/5 to-transparent"
  }
];
