import {
  FaAws,
  FaDocker,
  FaFigma,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDatadog,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const techStack = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Datadog", icon: SiDatadog },
  { name: "Figma", icon: FaFigma },
];

export const featuredProjects = [
  {
    title: "TenXEng",
    category: "Full-stack Web Application",
    description:
      "Next.js + Firebase app for daily system design practice, social play, and direct collaboration between friends.",
    tech: ["Next.js", "TypeScript", "Firebase"],
    gradient: "linear(to-br, blue.500, purple.500)",
    link: "https://github.com/khorzhenwin/tenxeng",
    coverImage:
      "https://raw.githubusercontent.com/khorzhenwin/tenxeng/master/docs/screenshots/questions-dark.png",
  },
  {
    title: "Malaysian Economic Pricing",
    category: "Data Analysis",
    description:
      "EDA and analysis project using Malaysia PriceCatcher consumer pricing data, with joined datasets for downstream cleaning.",
    tech: ["Jupyter", "EDA", "Data.gov.my"],
    gradient: "linear(to-br, purple.500, pink.500)",
    link: "https://github.com/khorzhenwin/malaysian-economic-pricing",
    coverImage: null,
  },
  {
    title: "go-cafe",
    category: "Backend + Frontend Product",
    description:
      "Cafe discovery and rating project with a Go backend and frontend app, documented with clear backend/frontend contracts.",
    tech: ["Go", "Next.js", "PostgreSQL"],
    gradient: "linear(to-br, teal.500, cyan.500)",
    link: "https://github.com/khorzhenwin/go-cafe",
    coverImage:
      "https://raw.githubusercontent.com/khorzhenwin/go-cafe/master/docs/images/journey-ui-preview.png",
  },
];

export const aboutCards = [
  {
    title: "About Me",
    description:
      "2+ years of experience in backend - fintech domain. Trying to be a good programmer, not just a passionate one. People relations are paramount despite your belief of doing your own work & minding your own business.",
  },
  {
    title: "Current Job",
    description:
      "Backend Engineer in Moneylion for the Payments Team. Whole bunch of jargons like CQRS, Event Sourcing, Saga pattern,  Serverless Webhook Listeners, and many more. Aggregator of payment service providers & recently integrated w/ Temporal. Tested till 100 TPS",
  },
];

export const experiences = [
  {
    title: "Backend Engineer @ MoneyLion",
    type: "Full-time",
    detail:
      "Building and maintaining payment services with Java/Spring Boot, event-driven architecture patterns, and high-throughput integrations.",
    initials: "ML",
  },
  {
    title: "Data Engineering",
    type: "Internship",
    detail:
      "ETL process using Python and BigQuery with Apache Airflow to maintain continuous and scalable data pipelines.",
    initials: "DE",
  },
  {
    title: "Backend Development",
    type: "Internship",
    detail:
      "Constructed and maintained microservices using Node.js, Express, and MongoDB with API and testing support.",
    initials: "BE",
  },
  {
    title: "Quality Assurance",
    type: "Internship",
    detail:
      "Manual and automated testing of web and native mobile apps with Robot and Selenium/Katalon tooling.",
    initials: "QA",
  },
];
