import { Brain, Code, Terminal, Cpu } from "lucide-react";

export const skills = [
  {
    category: "Artificial Intelligence",
    icon: Brain,
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "YOLOv8", "LLMs (Llama/GPT)"],
  },
  {
    category: "Data Science",
    icon: Terminal,
    items: ["Pandas", "NumPy", "Matplotlib", "SQL", "Data Wrangling", "A/B Testing"],
  },
  {
    category: "MLOps & Cloud",
    icon: Cpu,
    items: ["Docker", "Kubernetes", "AWS SageMaker", "MLflow", "CI/CD", "FastAPI"],
  },
  {
    category: "Full Stack",
    icon: Code,
    items: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Git"],
  },
];