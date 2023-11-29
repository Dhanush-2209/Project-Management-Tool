import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateIndividualProjectPage.css';

const UpdateIndividualProjectPage = () => {
  const { projectName } = useParams();
  const [projectDetails, setProjectDetails] = useState({
    name: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`https://deploy-backend-indetails.onrender.com/api/individual/projects/${projectName}`);
        console.log('Response Data:', response.data);
        if (response.data && response.data.data) {
          setProjectDetails(response.data.data);
        } else {
          console.error('Unexpected data format for individual project details:', response.data);
        }
      } catch (error) {
        console.error('Error fetching individual project details:', error);
      }
    };

    fetchProjectDetails();
  }, [projectName]);

  const handleUpdate = async () => {
    console.log('Updating project with ID:', projectDetails._id);
    try {
      const response = await axios.put(`https://deploy-backend-indetails.onrender.com/api/individual/projects/${projectDetails._id}`, projectDetails);
      console.log('Project updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating individual project:', error);
    }
  };

  return (
    <div className="update-individual-project-container">
      <h2>Update Individual Project</h2>
      <div>
        <p>Project Name: {projectDetails.name}</p>
      </div>
      <form>
        <label htmlFor="name">New Project Name:</label>
        <input
          type="text"
          id="name"
          value={projectDetails.name || ''}
          onChange={(e) => setProjectDetails({ ...projectDetails, name: e.target.value })}
        />
        <br />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={projectDetails.startDate || ''}
          onChange={(e) => setProjectDetails({ ...projectDetails, startDate: e.target.value })}
        />
        <br />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={projectDetails.endDate || ''}
          onChange={(e) => setProjectDetails({ ...projectDetails, endDate: e.target.value })}
        />
        <button type="button" onClick={handleUpdate}>
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateIndividualProjectPage;
