import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa6";
import etl from "@/public/etl.png";
import dataform from "@/public/dataform.webp";
import url from "@/public/url.png";

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
    title: "Software Development Engineer Intern",
    location: "Clarity",
    description:
      "As a Software Development Engineer Intern at Clarity from February 2024 to June 2024, I spearheaded the development of a Customer Data Platform (CDP) web application. This application revolutionized user data management by enhancing the detection of events, payments, and fraudulent activities. Utilizing Python and Apache Beam, I engineered a real-time big data pipeline capable of processing over 5 million user events daily from Pub/Sub to BigQuery and Bigtable. Additionally, I implemented an ETL pipeline that streamlined real-time data processing from Pub/Sub, leveraging Apache Beam to transform and store data in BigQuery, resulting in a 10% reduction in data handling costs.",
      icon: React.createElement(
        'img',
        { src: 'https://media.licdn.com/dms/image/D4D0BAQERmTjiaWqztQ/company-logo_200_200/0/1666330082816/tryclarity_logo?e=1729123200&v=beta&t=ItyvhTBq7Hs9eiipgDanic6bKEabnzmgxSRLRu-tEaA', alt: 'Icon' }
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
        { src: 'https://media.licdn.com/dms/image/C4E0BAQEg8mLNf9pMRw/company-logo_200_200/0/1630621676966/binplus_logo?e=1729123200&v=beta&t=eZw1q7aXqk9PibGX1YX98iy7VTZNFUufxueIxEG0opU', alt: 'Icon' }
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
      { src: 'https://media.licdn.com/dms/image/D4D0BAQGotxw-I70YMQ/company-logo_200_200/0/1683617270350/abhyazlearning_logo?e=1729123200&v=beta&t=T4vc68gOUrHcGZs1GDHfdpQgYYzXmpCsihNlNKmyhhs', alt: 'Icon' }
    ),
    // icon: React.createElement(IoLogoHtml5),
    date: "Dec 2022 – May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Real-Time Streaming Data Pipeline",
    description:
      "Designed and implemented a robust real-time streaming data pipeline using Python, Apache Beam, Google Cloud Pub/Sub, Apache Kafka, BigQuery, and Bigtable. The pipeline was engineered to handle a dynamic range of 20-25 topics sourced from Apache Kafka via Google Pub/Sub, ensuring efficient data ingestion and processing. Utilizing Apache Beam (Python), I developed data transformation and cleansing processes to ensure data quality and consistency before storage. The entire pipeline was deployed and managed on Google Dataflow, enabling seamless real-time data processing and monitoring.",
    tags: ["Python", "Apache Beam", "Google Cloud", "BigQuery", "Bigtable", "Real-Time Data", "Data Engineering"],
    imageUrl: etl,
  },
  {
    title: "Raw Data to Incremental Table",
    description:
      "Engineered and implemented a data pipeline using Google Dataform and BigQuery to transform raw data into incremental views for comprehensive analytics. Leveraging Google Dataform, I orchestrated the extraction and transformation of raw data from diverse sources, ensuring alignment with business requirements. By creating and joining multiple views, I facilitated detailed data analysis and reporting. Automation of the pipeline enabled scheduled runs, ensuring timely availability of updated data for strategic decision-making.",
    tags: ["Google Dataform", "BigQuery", "Data Transformation", "Data Analytics", "Automation"],
    imageUrl: dataform,
  },
  {
    title: "URL Shortener Generator",
    description:
      "Developed a feature-rich URL shortener service using Node.js, Firebase, ReactJS, and Tailwind CSS. Implemented robust user authentication and authorization mechanisms via Firebase, ensuring secure access to shortened URLs. Leveraging Firebase database, I designed a scalable architecture for storing and managing shortened URLs with efficient validation and retrieval mechanisms. The user interface, built with ReactJS and Tailwind CSS, prioritized usability and aesthetics, offering a seamless experience for users to generate and manage shortened URLs effectively.",
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
] as const;

