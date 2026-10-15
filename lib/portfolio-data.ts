export const profile = {
  name: "Saee Patil",
  title: "M.S. in Machine Learning Student & Researcher at Carnegie Mellon University",
  email: "sppatil@andrew.cmu.edu",
  tagline:
    "I study agentic AI, post-training, and how language models reason, learn, and remain reliable.",
  intro:
    "I am an M.S. student in Machine Learning at Carnegie Mellon University, where I am advised by Dr. Akari Asai. My research interests lie in agentic AI and post-training, with a focus on reinforcement learning, reasoning, and evaluation for language models. More broadly, I am interested in building machine learning systems that are capable, reliable, and interpretable.",
  researchFocus: [
    "Agentic AI and language model systems",
    "Post-training and reinforcement learning",
    "Reasoning, evaluation, and robustness",
    "Trustworthy and interpretable machine learning",
  ],
  social: {
    github: "https://github.com/saeenppatil",
    resume: "https://drive.google.com/file/d/1nkRnZc6onP7-74Q1XnQiYl18koQEnjhU/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/saee-patil-03456a303/",
    icml: "https://icml.cc/virtual/2026/poster/64641",
    arxiv: "https://arxiv.org/abs/2605.02122",
  },
}

export const education = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. in Machine Learning",
    period: "August 2026 - December 2027",
    detail: "School of Computer Science · GPA: 4.0",
  },
  {
    school: "University of California, Davis",
    degree: "B.S. in Computer Science",
    period: "September 2022 - June 2026",
    detail: "GPA: 3.91 · Dean's Honor List (7 terms)",
  },
]

export type Project = {
  title: string
  year: string
  blurb: string
  tags: string[]
  href?: string
  preview?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Pedestrian Intent Classification for AV Systems",
    year: "2025",
    blurb:
      "Built and evaluated an LSTM sequence model for pedestrian behavior prediction using the JAAD video dataset and YOLOv8, reaching 93% recall on a safety-critical future-intent task.",
    tags: ["PyTorch", "Scikit-Learn", "YOLOv8", "OpenCV"],
    href: "https://github.com/saeenppatil/ML_pedestrian_intent_classification",
    preview: "/project-previews/pedestrian-screenshot.png",
    featured: true,
  },
  {
    title: "VisionXAI",
    year: "2026",
    blurb:
      "Developed an interactive application that connects GRAD-CAM explanations and vision-model predictions to a Next.js interface through REST APIs, with NLP-generated clinical context for model outputs.",
    tags: ["GRAD-CAM", "SHAP", "TensorFlow", "PyTorch", "Supabase", "Next.js"],
  },
  {
    title: "Multi-Label News Categorization using BERT",
    year: "2025",
    blurb:
      "Built a web-scraping and NLP pipeline with BeautifulSoup and Hugging Face, then fine-tuned BERT-base-uncased for multi-label article classification.",
    tags: ["BERT", "BeautifulSoup", "Hugging Face", "PyTorch"],
    href: "https://github.com/saeenppatil/News-Classification",
    preview: "/project-previews/news.png",
  },
  {
    title: "Breast Tumor Classification",
    year: "2024",
    blurb:
      "Compared random forests and neural networks for binary breast-tumor classification, documented the full evaluation, and deployed the best-performing model through a Flask interface.",
    tags: ["Scikit-Learn", "Neural Networks", "Flask", "Python"],
    href: "https://github.com/saeenppatil/ML-Project",
    preview: "/project-previews/tumor.png",
  },
  {
    title: "HeartHaven",
    year: "2024",
    blurb:
      "Trained a regression model on heart-disease risk factors and integrated it into a full-stack platform that provides personalized risk predictions and feedback.",
    tags: ["Machine Learning", "Flask", "Python", "Full-Stack Development"],
    href: "https://github.com/saeenppatil/HeartHaven",
    preview: "/project-previews/hearthaven-screenshot.png",
  },
  {
    title: "Con-nect",
    year: "2023",
    blurb:
      "Built a social-good mobile application that connects returning citizens with professional and educational opportunities, including an LLM-powered interview practice chatbot.",
    tags: ["Angular", "Ionic", "Firebase", "OpenAI API"],
    href: "https://github.com/Nekorra/con-nect",
    preview: "/project-previews/connect-screenshot.png",
  },
]

export type Publication = {
  title: string
  venue: string
  year: string
  authors: string
  award?: string
  links?: { label: string; href: string }[]
}

export const publications: Publication[] = [
  {
    title: "STABLEVAL: Disagreement-Aware and Stable Evaluation of AI Systems",
    venue: "ICML 2026",
    year: "2026",
    authors: "Bonagiri A., Anderias G., Patil S., et al.",
    award: "Accepted in ICML 2026",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2605.02122" },
      { label: "Poster", href: "https://icml.cc/virtual/2026/poster/64641" },
    ],
  },
  {
    title: "BRIDGE: A Bias Register-Integrated Dataset for Generalized Evaluation of LLM Bias Detection",
    venue: "ICLR 2027",
    year: "2027",
    authors: "Patil S., et al.",
    award: "Submitted to ICLR 2027",
  },
  {
    title:
      "LLM Capability Is Not a Scalar: Measuring the Shape of Reasoning-Model Behavior with Path Consistency and Sampling Fingerprints",
    venue: "NAACL 2027",
    year: "2027",
    authors: "Bonagiri A., Ogus C., Xayasak V., Patil S., et al.",
    award: "Submitted to NAACL 2027",
  },
]

export type Role = {
  company: string
  role: string
  period: string
  description: string
  stack: string[]
  advisor?: string
  project?: string
}

export const experience: Role[] = [
  {
    company: "A2 Lab - Carnegie Mellon University",
    role: "ML Graduate Research Assistant",
    period: "September 2026 - Present",
    advisor: "Dr. Akari Asai",
    project: "Deep Research Agents: Source Reliability and Post-Training",
    description:
      "Developing evaluation benchmarks and reinforcement-learning methods for source-quality reasoning in deep research agents. The work extends citation evaluation beyond factual support to assess claim-specific authority, recency, relevance, and licensing constraints, while using credibility-based rewards and adversarial evidence environments to reduce reliance on outdated or misleading sources.",
    stack: ["Deep Research Agents", "RL", "Post-Training", "Citation Evaluation"],
  },
  {
    company: "Lawrence Livermore National Laboratory",
    role: "Machine Learning Graduate Intern",
    period: "June 2026 - September 2026",
    description:
      "Designed a multi-agent system for CAD-based 3D simulations, combining GEPA prompt optimization with reinforcement learning for finite-element-analysis workflows. Built specialized agents for closed-loop modeling and improved multi-step reasoning and tool use through post-training methods.",
    stack: ["GRPO", "GEPA", "DSPy", "Pydantic AI", "TRL", "HPC"],
  },
  {
    company: "Keysight Technologies",
    role: "Software Engineer (Part-Time)",
    period: "August 2025 - May 2026",
    description:
      "Fine-tuned CodeLLaMA with QLoRA to automate pytest generation, increasing edge-case coverage by 25-35%, and helped build AWS-hosted test automation for the MARS application, reducing manual test time by 40%.",
    stack: ["AWS", "Django", "MySQL", "PyTest", "Eggplant", "PyTorch", "QLoRA"],
  },
  {
    company: "Keysight Technologies",
    role: "Software Engineer Intern (ML & Automation)",
    period: "June 2025 - August 2025",
    description:
      "Worked on model-assisted automation tooling and internal QA workflows, contributing to the ML pipeline that supported pytest generation and AWS-integrated test automation.",
    stack: ["Python", "TypeScript", "Automation", "PyTorch"],
  },
  {
    company: "Google Student Developer Club - UC Davis",
    role: "Tech Director / Software Developer",
    period: "October 2024 - June 2026",
    description:
      "Led and mentored the technical development track for beginner projects, guided students through system design, web development, ML architectures, and coding issues, and helped build a full-stack portal and backend for TerraAI.",
    stack: ["React", "MongoDB", "Tailwind", "Agile"],
  },
  {
    company: "PRISM Research Lab - UC Davis",
    role: "AI/ML Student Researcher",
    period: "April 2025 - June 2026",
    description:
      "Developed STABLEVAL, a disagreement-aware evaluation framework that models annotator reliability, confusion patterns, and latent item correctness to produce uncertainty-aware scores and more stable AI rankings. Also built a GRPO-driven math reasoning corpus for downstream fine-tuning and benchmarking.",
    stack: ["PyTorch", "GRPO", "Evaluation", "Reasoning"],
  },
  {
    company: "Davis Automated Reasoning Group - UC Davis",
    role: "ML Student Researcher",
    period: "April 2025 - January 2026",
    description:
      "Designed IMPRoViT, a targeted repair strategy for Vision Transformers under adverse-weather distribution shifts, using Captum conductance and top-k Gurobi optimization to identify and repair the pathways causing misclassification.",
    stack: ["Captum", "ViT", "Gurobi", "PyTorch"],
  },
]

export const skills = [
  {
    group: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "RAG", "GRPO", "RLHF", "QLoRA", "LangChain"],
  },
  {
    group: "Languages",
    items: ["Python", "C/C++", "Java", "SQL (MySQL)", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    group: "Web & Tools",
    items: ["AWS", "Git", "Docker", "MongoDB", "React", "Next.js", "Node.js", "Django", "Flask", "FastAPI", "REST APIs"],
  },
]
