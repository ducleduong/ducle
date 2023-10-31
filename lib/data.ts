import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Front-End Developer Internship",
    location: "K-Soft",
    description:
      "I worked as a front-end developer internship. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Graduated",
    location: "Open University",
    description:
      "I graduated after 4 years of studying at Open University in Software Engineer major",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "NUS Technology",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PicPlanet",
    description:
      "A Sharing Picture Social Network App",
    tags: ["React", "Next.js", "Tailwind", "Sanity"],
    imageUrl: "https://github.com/ducleduong/pic-planet/blob/master/public/banner.png?raw=true",
  },
  {
    title: "Netflop",
    description:
      "A Netflix Clone App",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: "https://github.com/ducleduong/netflop/blob/master/public/images/banner.png?raw=true",
  },
  {
    title: "Smart Construction",
    description:
      "Construction management system",
    tags: ["Next.js", "Prisma", "MongoDB", "PostgresQL", "Golang", "Nestjs"],
    imageUrl: "/smart-construction.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",,
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
