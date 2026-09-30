import React from "react";
import type { ProjectData } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer | 🏆 Best Employee 2025",
    location: "Aviato Consulting",
    description:
      "Architected and deployed 4+ end-to-end scalable MVP backend solutions using FastAPI and Python for high-growth clients including Funzy, Hellow, and Gentoo. Integrated 7+ third-party services (Auth0, Stripe, Mailchimp, Mixpanel, Google Places API) enhancing user engagement and payment workflows. Optimized data management using Firestore and Cloud Storage with containerized microservices on Cloud Run achieving 99.9% uptime. Orchestrated large-scale data migrations (50+ TB) using GCP Transfer Service with zero data loss. Engineered 3+ production-grade Google ADK agents on Vertex AI, including a multi-agent system for Wesfarmers with A2A communication that automated report generation, reducing manual documentation effort by 70%. Built RAG-based RFP Agent using ADK and Vertex AI Vector Search, improving proposal accuracy by 60%.",
    icon: React.createElement(
      'img',
      {
        src: '/aviato_consulting_logo.jpeg',
        alt: 'Aviato Consulting logo',
        className: 'w-full h-full object-cover',
        loading: 'eager',
        decoding: 'async',
      }
    ),
    date: "July 2024 – Present",
  },
  {
    title: "Software Development Engineer",
    location: "Clarity",
    description:
      "Designed and implemented an advanced Customer Data Platform (CDP) web application using React.js and Node.js, improving user data management efficiency by 35%. Integrated Bigtable for efficient event data retrieval with time-range filters, processing 10+ million queries monthly with sub-second latency. Built a real-time event pipeline ETL using Python and Apache Beam, processing over 5 million user events daily from Pub/Sub to BigQuery and Bigtable, reducing data handling costs by 10%. Developed ETL processes using Google Dataform and SQLX to transform raw data into incremental tables, reducing query times by 30% and improving Looker dashboard performance.",
    icon: React.createElement(
      'img',
      {
        src: '/tryclarity_logo.jpeg',
        alt: 'Clarity logo',
        className: 'w-full h-full object-cover',
        loading: 'eager',
        decoding: 'async',
      }
    ),
    date: "Jan 2024 – Jun 2024",
  },
  {
    title: "UI/UX Developer Intern",
    location: "BinPlus Technologies",
    description:
      "At BinPlus Technologies from November 2023 to January 2024, I played a pivotal role as a UI/UX Developer Intern. I contributed to a casino game project by integrating Socket.IO components, enabling seamless real-time gameplay connectivity. Leveraging React, I developed interactive components that enhanced online gameplay interactions. Furthermore, I designed and developed a betting website from scratch, integrating various APIs to support dynamic user management functionalities. I also implemented robust authentication and authorization mechanisms using Node.js, ensuring secure API endpoints with token-based authentication.",
    icon: React.createElement(
      'img',
      {
        src: '/binplus_logo.jpeg',
        alt: 'BinPlus Technologies logo',
        className: 'w-full h-full object-cover',
        loading: 'eager',
        decoding: 'async',
      }
    ),
    date: "Nov 2023 – Jan 2024",
  },
  {
    title: "Web Developer Intern",
    location: "Abhyaz",
    description:
      "During my tenure as a Web Developer Intern at Abhyaz from December 2022 to May 2023, I focused on maintaining and developing dynamic and responsive web applications on the Zoho platform. I successfully managed and enhanced three different websites, utilizing Zoho Sites to implement features such as forms, calendar event markers, and various interactive elements. My contributions significantly improved user experience across these platforms, demonstrating my proficiency in web development and UI/UX design principles.",
    icon: React.createElement(
      'img',
      {
        src: '/abhyazlearning_logo.jpeg',
        alt: 'Abhyaz logo',
        className: 'w-full h-full object-cover',
        loading: 'eager',
        decoding: 'async',
      }
    ),
    // icon: React.createElement(IoLogoHtml5),
    date: "Dec 2022 – May 2023",
  },
] as const;

export const projectsData: ProjectData[] = [
  {
    title: "TestSpec-AI — Automated API Testing Platform",
    description:
      "An AI-powered testing platform for FastAPI and OpenAPI endpoints. Users can dynamically generate, execute, and schedule test cases by simply providing a ReDoc link or OpenAPI schema. Features include automated test generation, custom workflow creation, detailed test summaries, and an integrated AI chatbot for testing assistance.",
    tags: ["Next.js", "FastAPI", "Google Cloud Platform", "Vertex AI", "Python", "TypeScript"],
    imageUrl: "/testspec.png",
    websiteUrl: "https://www.testspec.tech/",
    sourceUrl: null,
    caseStudyUrl: "https://app.notion.com/p/TestSpec-AI-Building-a-Production-Grade-Event-Driven-API-Testing-Monitoring-Platform-39b8fb58862680578d57e08669dbeb74?source=copy_link",
  },
  {
    title: "CloudCertify – GCP Certification Companion",
    description:
      "CloudCertify is your smart companion for Google Cloud certification prep. It offers daily practice quizzes, full-length mock tests, performance tracking, and curated resources all in one seamless platform. Built with a modern full-stack approach using Firebase, FastAPI on Cloud Run, Elasticsearch for fast search, and Next.js for a responsive intuitive UI.",
    tags: ["Next.js", "Firebase", "FastAPI", "Cloud Run", "Elasticsearch", "Firestore", "GCP"],
    imageUrl: "/cloudcertify.png",
    websiteUrl: "https://cloudcertify.web.app/",
    sourceUrl: null,
    caseStudyUrl: "https://app.notion.com/p/CloudCertify-GCP-Certification-Companion-39b8fb58862680debd8fe4dbcb07b9ef?source=copy_link",
  },
  {
    title: "Maya AI — Devotional AI Chat & Voice Assistant",
    description:
      "A devotional AI chatbot inspired by the Bhagavad Gita, enabling users to interact via text and voice calls in both Hindi and English. Built to provide context-aware responses based on spiritual teachings using RAG over curated scriptures and ElevenLabs for real-time voice synthesis.",
    tags: ["Next.js", "FastAPI", "Google Cloud Platform", "ElevenLabs AI", "Python", "TypeScript"],
    imageUrl: "/maya.png",
    websiteUrl: "https://maya-ai-one.vercel.app/",
    sourceUrl: null,
    caseStudyUrl: "https://app.notion.com/p/Maya-AI-39b8fb5886268012a9ecf2c32b6c91a8?source=copy_link",
  },
  // {
  //   title: "JobOrbit — AI-Powered Job Search Platform",
  //   description:
  //     "A smart job discovery platform that aggregates all publicly available job listings in one place. Powered by AI-driven semantic search, JobOrbit lets you find the most relevant roles using natural language queries, smart filters, and personalised job recommendations — far beyond keyword matching.",
  //   tags: ["Next.js", "FastAPI", "Vertex AI", "Elasticsearch", "Python", "TypeScript", "GCP"],
  //   // TODO: add a JobOrbit screenshot (e.g. /joborbit.png) and its case study or site link.
  //   imageUrl: null,
  //   websiteUrl: null,
  //   sourceUrl: null,
  //   caseStudyUrl: null,
  //   emptyLinksLabel: "Details coming soon",
  // },
  {
    title: "Real-Time Streaming Data Pipeline",
    description:
      "Designed and implemented a robust real-time streaming data pipeline processing 5M+ events daily across 20–25 Kafka topics. Built with Apache Beam on Google Dataflow, ingesting from Pub/Sub into BigQuery and Bigtable with sub-second latency. Reduced data handling costs by 10%.",
    tags: ["Python", "Apache Beam", "Google Cloud", "BigQuery", "Bigtable", "Kafka", "Dataflow"],
    imageUrl: "/etl.png",
    websiteUrl: null,
    sourceUrl: null,
    caseStudyUrl: null,
  },
  {
    title: "Raw Data to Incremental Table",
    description:
      "Engineered an automated data transformation pipeline using Google Dataform and BigQuery SQLX to convert raw event data into incremental analytical tables. Reduced query times by 30% and significantly improved Looker dashboard performance through incremental MERGE-based processing.",
    tags: ["Google Dataform", "BigQuery", "SQLX", "Data Transformation", "Looker", "Automation"],
    imageUrl: "/dataform.webp",
    websiteUrl: null,
    sourceUrl: null,
    caseStudyUrl: null,
  },
];

export const skillsData = [
  // Programming Languages
  "Python",
  "SQL",
  "JavaScript",
  // Data Engineering
  "Apache Beam",
  "ETL/ELT Pipelines",
  "Data Modeling",
  "Stream Processing",
  "Apache Airflow",
  // Cloud Platforms (GCP)
  "Google Cloud Platform (GCP)",
  "BigQuery",
  "Bigtable",
  "Dataflow",
  "Pub/Sub",
  "Vertex AI",
  "Cloud Composer",
  "Cloud Functions",
  "Dataform",
  "Cloud Storage",
  "Cloud Run",
  "GCP Transfer Service",
  // Backend & APIs
  "FastAPI",
  "Node.js",
  "REST APIs",
  // Databases
  "Firestore",
  "Firebase",
  // AI/ML
  "Gemini Pro",
  "RAG",
  "Vector Search",
  "Multi-Agent Systems",
  "Google ADK",
  // Development Tools
  "Docker",
  "Git",
  "GitHub",
  "Jira",
  // Other
  "Data Warehousing",
  "CI/CD",
  "Agile",
] as const;
