import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const content = {
  hero: {
    name: "MD. Asaduzzaman Rokon",
    titles: [
      "Full Stack Developer",
      "AI Enthusiast",
      "Problem Solver",
      "Software Engineer",
      "Football Enthusiast"
    ],
    description: "I build modern web applications and AI-driven solutions that deliver exceptional user experiences.",
    resumeUrl: "/resume.pdf", // Placeholder
  },
  about: {
    introduction: "Hi, I'm John Doe, a Computer Science undergraduate passionate about building impactful software.",
    passion: "I love translating complex problems into simple, beautiful, and intuitive designs.",
    aiInterest: "My deep interest in AI and Machine Learning drives me to integrate intelligent features into everyday applications.",
    mindset: "I approach every challenge with a problem-solving mindset and a dedication to continuous learning.",
    goal: "My goal is to become a world-class software engineer at a top-tier tech company.",
  },
  education: [
    {
      university: "United International University",
      degree: "B.S. in Computer Science",
      cgpa: "",
      year: "",
      coursework: [],
    }
  ],
  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "PHP"],
    frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Framer Motion"],
    backend: ["Node.js", "Express", "PHP", "Python (FastAPI)"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "Figma", "Docker"]
  },
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with AI product recommendations.",
      technologies: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
      features: ["User Auth", "Shopping Cart", "Payment Gateway", "AI Recs"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1557821552-b718be9a5bb0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "AI Chatbot Interface",
      description: "A modern interface for interacting with various LLM models.",
      technologies: ["React", "Framer Motion", "OpenAI API"],
      features: ["Streaming Responses", "Markdown Support", "Chat History"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Task Management Dashboard",
      description: "A highly interactive dashboard for managing team projects.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      features: ["Drag & Drop", "Real-time Sync", "Analytics"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "A premium animated portfolio showcasing my work and skills.",
      technologies: ["Next.js", "Framer Motion", "Three.js"],
      features: ["3D Animations", "Responsive Design", "Dark Mode"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    }
  ],
  experience: [],
  achievements: [
    {
      title: "1st Place - National Hackathon",
      description: "Built an AI-powered disaster management system in 48 hours.",
      year: "2024"
    },
    {
      title: "Dean's List",
      description: "Recognized for academic excellence across three consecutive semesters.",
      year: "2023, 2024"
    }
  ],
  certificates: [
    {
      title: "Art of Communication",
      issuer: "Certificate",
      file: "/certificate-art-of-communication.pdf"
    },
    {
      title: "Corporate Presentation Skills",
      issuer: "Certificate",
      file: "/certificate-corporate-presentation-skills.pdf"
    },
    {
      title: "LinkedIn 101",
      issuer: "Certificate",
      file: "/certificate-linkedin-101.pdf"
    },
    {
      title: "Sharpen Your Interview Skills",
      issuer: "Certificate",
      file: "/certificate-sharpen-your-interview-skills.pdf"
    },
    {
      title: "Smart CV",
      issuer: "Certificate",
      file: "/certificate-smart-cv.pdf"
    },
    {
      title: "UX Research Strategy with AI",
      issuer: "Certificate",
      file: "/certificate-ux-research-strategy-with-ai.pdf"
    }
  ],
  contact: {
    email: "hello@johndoe.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://johndoe.com",
    location: "San Francisco, CA"
  },
  social: [
    { name: "GitHub", icon: FaGithub, url: "https://github.com" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
    { name: "Email", icon: FaEnvelope, url: "mailto:hello@johndoe.com" }
  ]
};
