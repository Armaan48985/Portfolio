"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DSA Project",
    description: "Project 1 description",
    image: "/images/projects/dsa.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "https://dsa-project-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Instagram Clone",
    description: "Project 2 description",
    image: "/images/projects/insta.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description: "Project 3 description",
    image: "/images/projects/yt.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "https://youtube-clone-flame-eta.vercel.app/",
  },
  {
    id: 4,
    title: "Travel App",
    description: "Project 4 description",
    image: "/images/projects/travel.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "https://travel-app-ruddy.vercel.app/",
  },
  {
    id: 5,
    title: "3D Shirt App",
    description: "Authentication and CRUD operations",
    image: "/images/projects/3d.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "https://github.com/Armaan48985/3D_shirt-app/tree/main",
  },
  {
    id: 6,
    title: "Movie App",
    description: "Project 5 description",
    image: "/images/projects/movie.png",
    tag: ["All", "BackEnd"],
    gitUrl: "/",
    previewUrl: "https://movie-app-nine-dusky.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === "FrontEnd"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BackEnd"
          isSelected={tag === "BackEnd"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
