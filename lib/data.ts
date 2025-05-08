import React from "react";
import etl from "@/public/etl.png";
import dataform from "@/public/dataform.webp";
import url from "@/public/url.png";
import cloudcertify from "@/public/cloudcertify.png"

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Aviato Consulting",
    description:
      "",
      icon: React.createElement(
        'img',
        { src: './aviato_consulting_logo.jpeg', alt: 'Icon' }
      ),
    date: "July 2024 – Present",
  },
  {
    title: "Software Development Engineer Intern",
    location: "Clarity",
    description:
      "As a Software Development Engineer Intern at Clarity from February 2024 to June 2024, I spearheaded the development of a Customer Data Platform (CDP) web application. This application revolutionized user data management by enhancing the detection of events, payments, and fraudulent activities. Utilizing Python and Apache Beam, I engineered a real-time big data pipeline capable of processing over 5 million user events daily from Pub/Sub to BigQuery and Bigtable. Additionally, I implemented an ETL pipeline that streamlined real-time data processing from Pub/Sub, leveraging Apache Beam to transform and store data in BigQuery, resulting in a 10% reduction in data handling costs.",
      icon: React.createElement(
        'img',
        { src: './tryclarity_logo.jpeg', alt: 'Icon' }
      ),
    date: "Feb 2024 – Jun 2024",
  },
  {
    title: "UI/UX Developer Intern",
    location: "BinPlus Technologies",
    description:
      "At BinPlus Technologies from November 2023 to January 2024, I played a pivotal role as a UI/UX Developer Intern. I contributed to a casino game project by integrating Socket.IO components, enabling seamless real-time gameplay connectivity. Leveraging React, I developed interactive components that enhanced online gameplay interactions. Furthermore, I designed and developed a betting website from scratch, integrating various APIs to support dynamic user management functionalities. I also implemented robust authentication and authorization mechanisms using Node.js, ensuring secure API endpoints with token-based authentication.",
      icon: React.createElement(
        'img',
        { src: './binplus_logo.jpeg', alt: 'Icon' }
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
      { src: './abhyazlearning_logo.jpeg', alt: 'Icon' }
    ),
    // icon: React.createElement(IoLogoHtml5),
    date: "Dec 2022 – May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CloudCertify – GCP Certification Companion",
    description:
      "CloudCertify is your smart companion for Google Cloud certification prep. It offers daily practice quizzes, full-length mock tests, performance tracking, and curated resources — all in one seamless platform. Built with a modern full-stack approach, the app uses Firebase for authentication and hosting, FastAPI for backend APIs deployed on Cloud Run, and Elasticsearch for fast search and analytics. The UI, developed in Next.js, ensures a responsive and intuitive user experience. CloudCertify helps users prepare consistently and pass GCP exams with confidence.",
    tags: ["Next.js", "Firebase", "FastAPI", "Cloud Run", "Elasticsearch", "Firestore", "JavaScript", "GCP"],
    imageUrl: cloudcertify, // Make sure to define/import this image
    websiteUrl: "https://cloudcertify.web.app/",
    sourceUrl: null,
  },
  {
    title: "Real-Time Streaming Data Pipeline",
    description:
      "Designed and implemented a robust real-time streaming data pipeline using Python, Apache Beam, Google Cloud Pub/Sub, Apache Kafka, BigQuery, and Bigtable. The pipeline was engineered to handle a dynamic range of 20–25 topics sourced from Apache Kafka via Google Pub/Sub, ensuring efficient data ingestion and processing. Utilizing Apache Beam, I developed transformation and cleansing processes to ensure high-quality data before storage. The entire pipeline was deployed and monitored on Google Dataflow for seamless real-time processing.",
    tags: ["Python", "Apache Beam", "Google Cloud", "BigQuery", "Bigtable", "Real-Time Data", "Data Engineering"],
    imageUrl: etl,
    websiteUrl: null,
    sourceUrl: null,
  },
  {
    title: "Raw Data to Incremental Table",
    description:
      "Engineered and automated a data pipeline using Google Dataform and BigQuery to transform raw datasets into incremental views for analytics. The pipeline extracts and transforms data from diverse sources and joins multiple views to enable rich, structured reporting. This automation ensures timely, consistent, and accurate data availability aligned with business goals, improving strategic data-driven decisions.",
    tags: ["Google Dataform", "BigQuery", "Data Transformation", "Data Analytics", "Automation"],
    imageUrl: dataform,
    websiteUrl: null,
    sourceUrl: null,
  },
  {
    title: "URL Shortener Generator",
    description:
      "Built a full-stack URL shortener service with Node.js, Firebase, ReactJS, and Tailwind CSS. Integrated user authentication and authorization with Firebase and designed a scalable Firebase database schema to manage URLs. The front-end, built with ReactJS and styled using Tailwind CSS, delivers a responsive and user-friendly interface for creating and managing short links.",
    tags: ["Node.js", "Firebase", "ReactJS", "Tailwind CSS", "URL Shortener", "Authentication", "Database Management"],
    imageUrl: url,
    websiteUrl: "https://url-shortener-seven-rho.vercel.app",
    sourceUrl: "https://github.com/Yash-rai-29/URL-Shortener",
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Apache Beam",
  "Google Cloud Platform (GCP)",
  "BigQuery",
  "Google Cloud Funtions",
  "Bigtable",
  "Firebase",
  "Google Dataflow",
  "Cloud Storage",
  "ReactJS",
  "Spark",
  "Pub/Sub",
  "Databricks",
  "Kafka",
  "GKE Kubernetes",
  "ETL",
  "Data Pipelines",
  "Data Warehousing",
  "Data Engineering",
  "Cloud Computing",
  "Database Management",
  "Azure Data Factory",
  "Azure DataBricks",
  "Azure Synapse Analytics",
  "Git",
  "Docker",
  "REST APIs",
  "FastAPI",
] as const;

