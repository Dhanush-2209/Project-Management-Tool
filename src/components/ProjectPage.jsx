import React, { useState, useEffect } from 'react';
import './ProjectPage.css';

const ProjectsPage = () => {

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [statusFilter, setStatusFilter] = useState('Project Schedule');

  useEffect(() => {
    // Fetch filtered projects when the status filter changes
    fetchFilteredProjects();
  }, [statusFilter]);

  const fetchFilteredProjects = async () => {
    try {
      const response = await fetch(`http://localhost:3002/api/individual/projects/${statusFilter}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${statusFilter} projects`);
      }

      const result = await response.json();
      setFilteredProjects(result.data);
    } catch (error) {
      console.error(`Error fetching ${statusFilter} projects:`, error.message);
    }
  };

  return (
    <div className="project-page-container">
      <h2>Projects Page</h2>

      <div className="project-status-buttons">
        <button className="project-button" onClick={() => setStatusFilter('Project Schedule')}>
          Projects
        </button>
        <button className="project-button" onClick={() => setStatusFilter('In Progress')}>
          In Progress
        </button>
        <button className="project-button" onClick={() => setStatusFilter('Complete')}>
          Complete
        </button>
      </div>

      <ul className="project-list">
        {filteredProjects.map((project) => {
          console.log('Project:', project); // Log the project for debugging
          return (
            <li key={project._id}>
              {`Project Name: ${project.projectName}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsPage;
