import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { client, urlFor } from "../../client";
import "./project.scss";

const Project = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const query = "*[_type == 'projects']";
    
    client.fetch(query).then((data) => {
      setProjectDetails(data);
    })
    
  }, []);

  return (
    <>
      <div className="projectContainer" id="Projects">
        <div className="projectHeading">Projects</div>
        <div className="projects">
          {
            ((projectDetails != null)?projectDetails.map((data, index) => (
              <ProjectCard key = {index} name = {data.name} description = {data.description} link = {data.githubrepolink} img = {urlFor(data.imgurl)}/>
            )):'')
          }
        </div>
      </div>
    </>
  );
};

export default Project;
