import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity";

const VisualArtComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == "visualArt"][0]{
      projects[] {
        title,
        year,
        slug,
        description
      }
    }`;

    client.fetch(query).then((data) => {
      if (data && data.projects) {
        setProjects(data.projects);
      }
    });
  }, []);

  return (
    <div className="visual-art">
      {projects.map((project, index) => (
        <div key={index} className="visual-container">
          <Link to={project.slug}>
            {project.title} – {project.year}
            <img
              className="icon"
              width="24px"
              src="/icons/link.svg"
              alt="link icon"
            />
          </Link>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VisualArtComponent;
