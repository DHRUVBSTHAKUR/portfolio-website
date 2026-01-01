export const projects = [
  {
    title: "Veritas (Reasoning Engine)",
    description: "A GraphRAG system designed to reason over complex unstructured data. Unlike standard vector search, Veritas traverses a Knowledge Graph (Neo4j) to understand relationships between entities in legal/medical documents.",
    tags: ["GraphRAG", "Neo4j", "LangChain", "Knowledge Graphs"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "from-indigo-500 to-violet-500", // Wisdom & Reasoning
  },
  {
    title: "Echo (Real-Time Voice)",
    description: "A low-latency voice agent built with WebRTC. Engineered for <300ms response times, handling interruptions and state management in a live, full-duplex streaming environment.",
    tags: ["WebRTC", "Voice AI", "Golang/Rust", "Systems Engineering"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "from-rose-500 to-red-500", // Speed & Live Action
  },
  {
    title: "The Resurrector",
    description: "An autonomous multi-agent system designed to detect, analyze, and fix bugs in Python code automatically. Uses a sandboxed Docker environment for safe execution and validation.",
    tags: ["Agentic AI", "Docker", "LLMs", "FastAPI"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "from-blue-500 to-cyan-500", 
  },
  {
    title: "Sketch-to-Face (NUS)",
    description: "Generative AI research developed at the National University of Singapore. Converts forensic sketches into realistic human faces to aid law enforcement investigations using GANs.",
    tags: ["Generative AI", "GANs", "PyTorch", "Research"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Vehicle Insurance Pipeline",
    description: "A complete MLOps pipeline for insurance fraud detection. Features automated data versioning, model retraining triggers, and drift monitoring in production.",
    tags: ["MLOps", "DVC", "Airflow", "AWS"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "EngineSentinel",
    description: "End-to-end predictive maintenance system for industrial machinery. Predicts engine failures 48 hours in advance using time-series sensor data.",
    tags: ["IoT", "Time-Series", "Scikit-Learn", "Flask"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "from-orange-500 to-red-500",
  },
];