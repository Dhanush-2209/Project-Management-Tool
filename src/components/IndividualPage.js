import React, { useState } from 'react';
import './IndividualPage.css';

const IndividualPage = () => {
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [projectData, setProjectData] = useState({
    projectName: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const handleAddProjectClick = () => {
    setShowProjectOptions(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSaveProjectClick = async () => {
    try {
      const formattedProjectData = {
        ...projectData,
        startDate: new Date(projectData.startDate).toISOString(),
        endDate: new Date(projectData.endDate).toISOString(),
      };

      const response = await fetch('https://deploy-backend-indetails.onrender.com/api/individual/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedProjectData),
      });

      if (!response.ok) {
        throw new Error('Failed to save project');
      }

      const result = await response.json();
      console.log('Saved Project:', result.data);

      setProjectData({
        projectName: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
      });
      setShowProjectOptions(false);
    } catch (error) {
      console.error('Error saving project:', error.message);
    }
  };

  return (
    <div className="individual-page-container">
      <h2 className="individual-page-heading">Individual Page</h2>
      <button className="individual-page-button" onClick={handleAddProjectClick}>
        Add Project
      </button>
      {showProjectOptions && (
        <div className="project-options">
          <label>
            Project Name:
            <input
              type="text"
              placeholder="Enter project name"
              name="projectName"
              value={projectData.projectName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={projectData.startDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={projectData.endDate}
              onChange={handleInputChange}
            />
          </label>
          <button className="individual-page-button" onClick={handleSaveProjectClick}>
            Save Project
          </button>
        </div>
      )}
    </div>
  );
};

export default IndividualPage;
