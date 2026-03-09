export enum SkillNames {
  PYTHON = "python",
  PYTORCH = "pytorch",
  TENSORFLOW = "tensorflow",
  SCIKITLEARN = "scikitlearn",
  OPENCV = "opencv",
  LANGCHAIN = "langchain",
  REACT = "react",
  NEXTJS = "nextjs",
  FASTAPI = "fastapi",
  DJANGO = "django",
  FLASK = "flask",
  DOCKER = "docker",
  AWS = "aws",
  POSTGRES = "postgres",
  REDIS = "redis",
  GIT = "git",
  GITHUB = "github",
  LINUX = "linux",
  VERCEL = "vercel",
  CPP = "cpp",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "my weapon of choice — from data pipelines to AI agents, it just works 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 2,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "training neural nets at 3am like it's a personality trait 🧠⚡",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 3,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Google's beast for deep learning, tensors all the way down 📉🤖",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.SCIKITLEARN]: {
    id: 4,
    name: "scikitlearn",
    label: "Scikit-learn",
    shortDescription: "97% accuracy on disease prediction? Yeah, sklearn did that 💊📊",
    color: "#f89939",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.OPENCV]: {
    id: 5,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "teaching computers to see — Air Canvas wasn't gonna build itself 👁️🎨",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 6,
    name: "langchain",
    label: "LangChain",
    shortDescription: "chaining LLMs like a pro, RAG pipelines running in prod 🔗🤖",
    color: "#1c3c3c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg",
  },
  [SkillNames.REACT]: {
    id: 7,
    name: "react",
    label: "React",
    shortDescription: "components on components, admin dashboards looking clean fr 💅⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 8,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "this portfolio itself is proof that Next.js hits different 👑📜",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 9,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "async APIs going brrr, Swagger docs auto-generated like magic 🚀📡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 10,
    name: "django",
    label: "Django",
    shortDescription: "batteries included and then some — Medicate runs on this beast 🐍🏥",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.FLASK]: {
    id: 11,
    name: "flask",
    label: "Flask",
    shortDescription: "lightweight and lethal, perfect for spinning up ML microservices ⚗️💨",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 12,
    name: "docker",
    label: "Docker",
    shortDescription: "works on my machine? Now it works everywhere 🐳📦",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.AWS]: {
    id: 13,
    name: "aws",
    label: "AWS",
    shortDescription: "cloud infra so big even the bill is scary, but we deploy anyway ☁️💸",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 14,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "relational data done right, Medicate's backbone 🐘💅",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.REDIS]: {
    id: 15,
    name: "redis",
    label: "Redis",
    shortDescription: "in-memory caching going zoom zoom, latency who? 🔴⚡",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.GIT]: {
    id: 16,
    name: "git",
    label: "Git",
    shortDescription: "commit early, commit often, pray before rebase 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 17,
    name: "github",
    label: "GitHub",
    shortDescription: "where all my projects live and my README game is strong 🐙✨",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 18,
    name: "linux",
    label: "Linux",
    shortDescription: "terminal is home, GUI is optional fr fr 🔓🐧",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 19,
    name: "vercel",
    label: "Vercel",
    shortDescription: "push to main and it's live — deployment anxiety be gone 🚀🌿",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.CPP]: {
    id: 20,
    name: "cpp",
    label: "C++",
    shortDescription: "where segfaults build character and pointers humble you daily 💀⚙️",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    title: "Simulator Design Intern",
    company: "Balaji Action Buildwell Pvt. Ltd. (Action TESA)",
    location: "Uttarakhand",
    description: [
      "Designed a real-time mechatronic simulation system replicating pneumatic crane operations using Python, microcontroller firmware, and Unity.",
      "Applied ML techniques for signal calibration and predictive control, reducing physical machinery dependence by 45%.",
      "Integrated sensor-driven input with a digital twin for adaptive feedback and immersive VR-based training.",
      "Improved training efficiency by 30% through custom data pipelines for control signal and operator behavior analysis.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SCIKITLEARN,
      SkillNames.DOCKER,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Aug 2024",
    endDate: "Oct 2025",
    title: "ML Intern",
    company: "RedLinear Automation",
    location: "Lucknow",
    description: [
      "Integrated ML models with Robot Operating System (ROS) to enhance perception and navigation of autonomous mobile robots (AMRs).",
      "Containerized and deployed reliable ML services using Docker for consistent cross-environment performance.",
      "Leveraged Autodesk Fusion to bridge software algorithms with physical hardware design.",
      "Delivered presentations translating complex AI architectures into clear, project-focused insights for stakeholders.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.PYTORCH,
      SkillNames.TENSORFLOW,
      SkillNames.DOCKER,
      SkillNames.LINUX,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};