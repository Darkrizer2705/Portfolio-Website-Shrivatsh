export const profile = {
  name: "Shrivatsh Kuppusubramaniam",
  role: "AI/ML Engineer | Building Intelligent Systems with Real-World Impact",
  shortRole: "AI/ML Engineer",
  location: "Mumbai, India",
  email: "shrivatshks@gmail.com",
  collegeEmail: "se23uari115@mahindrauniversity.edu.in",
  phone: "+91 8850097107",
  linkedin: "https://www.linkedin.com/in/shrivatsh-subramaniam-a65b062b4/",
  github: "https://github.com/Darkrizer2705",
  typed: [
    "Predictive Maintenance Systems",
    "Transformer-based NLP Models",
    "Scalable ML Pipelines",
    "Computer Vision Based Products",
  ],
};

export const about = {
  paragraphs: [
    "I'm a 3rd-year B.Tech Artificial Intelligence student at Mahindra University, focused on building machine learning systems that solve real, measurable problems — not just notebooks that look good.",
    "My work spans transformer fine-tuning with LoRA, end-to-end predictive maintenance pipelines on NASA CMAPSS data, and production-style NLP. Outside of code, I lead the university's Entrepreneurship & Innovation Cell as President — turning ideas into shipped outcomes is the through-line.",
  ],
  skills: {
    Languages: ["Python", "C", "Java", "MATLAB"],
    "AI / ML": ["PyTorch", "Scikit-learn", "HuggingFace", "Keras", "LoRA Fine-tuning"],
    Domains: ["NLP", "Regression", "Classification", "Clustering", "Predictive Modeling"],
    Tools: ["Pandas", "NumPy", "Matplotlib", "Git"],
  },
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  details: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "predictive-maintenance",
    title: "Hybrid Predictive Maintenance System",
    tagline: "NASA CMAPSS turbofan degradation modeling",
    year: "2024",
    description:
      "End-to-end pipeline combining clustering, classification and regression to predict Remaining Useful Life (RUL) of turbofan engines and flag degradation stages before failure.",
    details: [
      "Multi-stage architecture: clustering identifies operating regimes, classifier flags degradation phase, regressor predicts RUL.",
      "Engineered rolling-window sensor features over the CMAPSS FD001–FD004 datasets.",
      "Benchmarked against single-model baselines to quantify the hybrid lift.",
    ],
    metrics: [
      { label: "Fault detection", value: "+30%" },
      { label: "RUL error", value: "−20%" },
      { label: "Failure risk", value: "−25%" },
    ],
    tags: ["Python", "PyTorch", "Scikit-learn", "Predictive ML"],
    github: "https://github.com/Darkrizer2705",
    featured: true,
  },
  {
    id: "f1-nlp",
    title: "Formula 1 Race Winner Prediction",
    tagline: "DistilBERT + LoRA fine-tuning on race summaries",
    year: "2025",
    description:
      "An NLP model that predicts F1 race winners purely from textual race summaries — proving contextual reasoning works without structured numeric inputs.",
    details: [
      "Fine-tuned DistilBERT with Low-Rank Adaptation (LoRA) adapters on a curated corpus of race reports.",
      "Reduced trainable parameters dramatically while preserving downstream accuracy.",
      "Evaluated against bag-of-words and zero-shot baselines.",
    ],
    metrics: [
      { label: "Accuracy", value: "~82%" },
      { label: "Compute saved", value: "−40%" },
      { label: "Trainable params", value: "<1%" },
    ],
    tags: ["NLP", "Transformers", "HuggingFace", "LoRA"],
    github: "https://github.com/Darkrizer2705",
    featured: true,
  },
  {
    id: "student-faculty",
    title: "Student–Faculty Project Management",
    tagline: "Web platform for academic collaboration",
    year: "2026",
    description:
      "A collaboration platform that streamlines project intake, role assignment and lifecycle tracking between students and faculty.",
    details: [
      "Role-based access control with structured project lifecycle states.",
      "Replaced ad-hoc email coordination with a single source of truth.",
    ],
    metrics: [
      { label: "Coordination effort", value: "−40%" },
      { label: "Workflow efficiency", value: "+35%" },
    ],
    tags: ["Node.js", "JavaScript", "Web App"],
    github: "https://github.com/Darkrizer2705",
  },
  {
    id: "lecture-review",
    title: "University Lecture Review Platform",
    tagline: "Restricted-access feedback system",
    year: "2025",
    description:
      "Prototype platform for students to review lectures, with authentication and a structured rating system.",
    details: [
      "Built-in auth so only enrolled students can post reviews.",
      "Aggregated rating dashboards per course and per lecturer.",
    ],
    metrics: [{ label: "Auth", value: "Built-in" }],
    tags: ["Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Darkrizer2705",
  },
  {
    id: "air-strike",
    title: "Air Strike System — 2D Game",
    tagline: "Java AWT/Swing arcade game",
    year: "2025",
    description:
      "A 2D action game featuring player movement, enemy AI and collision detection, with optimized rendering for smooth gameplay.",
    details: ["Custom game loop with delta-time updates.", "Sprite-based collision system."],
    metrics: [{ label: "Frame consistency", value: "Stable" }],
    tags: ["Java", "AWT", "Swing"],
    github: "https://github.com/Darkrizer2705",
  },
  {
    id: "xml-catalog",
    title: "XML Product Catalog",
    tagline: "Structured data + dynamic front-end",
    year: "2025",
    description:
      "An XML-driven product catalog with a dynamic front-end that improved data organization and retrieval efficiency.",
    details: ["Schema-validated XML data layer.", "JS-driven rendering and filtering."],
    metrics: [{ label: "Retrieval efficiency", value: "+30%" }],
    tags: ["XML", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Darkrizer2705",
  },
];

export const experience = [
  {
    role: "President",
    org: "Entrepreneurship & Innovation Cell",
    place: "Mahindra University",
    period: "Sep 2025 — Present",
    points: [
      "Leading university-wide entrepreneurship and innovation initiatives.",
      "Overseeing content, operations, outreach and partnerships.",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "Mahindra University",
    place: "On-campus",
    period: "Oct 2025-Present",
    points: [
      "Drove outreach and increased prospective student participation.",
      "Guided applicants through admissions, programmes and campus life.",
    ],
  },
  {
    role: "Content Head",
    org: "Entrepreneurship & Innovation Cell",
    place: "Mahindra University",
    period: "2024 — Aug 2025",
    points: [
      "Led content strategy across events and social channels.",
      "Anchored EntrepX, hosting industry leaders incl. CP Gurnani, Viren Shah, Aditi Gupta.",
    ],
  },
  {
    role: "Events & Finance Coordinator",
    org: "Mahindra Alumni Relation Centre (MARC)",
    place: "Mahindra University",
    period: "2024 — Aug 2025",
    points: [
      "Logistics, budgeting and execution for major alumni engagement events.",
      "Drove outreach connecting current students with alumni networks.",
    ],
  },
];

export const achievements = [
  {
    title: "Winner — 24-Hour IdeaStorm Hackathon",
    year: "2025",
    description:
      "Secured 1st place by ideating, building and pitching a solution to convert institutional food waste into fertilizer — sustainability at campus scale, shipped in 24 hours.",
    highlight: "1st Place",
  },
];

export const certifications = [
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    year: "2025",
  },
  {
    title: "ROBOAI Certification",
    issuer: "Myequation",
    year: "2025",
  },
  {
    title: "Machine Learning Program",
    issuer: "WhiteHat Jr.",
    year: "2022",
  },
];

export const education = [
  {
    degree: "B.Tech, Artificial Intelligence",
    school: "Mahindra University, Hyderabad",
    period: "Expected 2027",
    note: "CGPA 7.0 / 10",
  },
  {
    degree: "A / AS Level (Class 12)",
    school: "Podar International School, Santacruz, Mumbai",
    period: "Graduated 2023",
    note: "70%",
  },
  {
    degree: "IGCSE (Class 10)",
    school: "Chatrabhuj Narsee School, Kandivali, Mumbai",
    period: "Graduated 2021",
    note: "92%",
  },
];
