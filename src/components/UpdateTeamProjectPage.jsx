import React, { useState } from 'react';
import axios from 'axios';
import './UpdateTeamProjectPage.css';

const UpdateTeamProjectPage = () => {
  const [projectDetails, setProjectDetails] = useState({
    teamCode: '',
    teamName: '',
    projectName: '',
    members: [{ email: '', name: '', contactNumber: '' }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleMembersChange = (index, e) => {
    const updatedMembers = [...projectDetails.members];
    updatedMembers[index][e.target.name] = e.target.value;
    setProjectDetails({ ...projectDetails, members: updatedMembers });
  };

  const handleAddMember = () => {
    setProjectDetails({
      ...projectDetails,
      members: [...projectDetails.members, { email: '', name: '', contactNumber: '' }],
    });
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...projectDetails.members];
    updatedMembers.splice(index, 1);
    setProjectDetails({ ...projectDetails, members: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://deploy-backend-teamdetails.onrender.com/api/teamLead/update/team/${projectDetails.projectName}`, projectDetails);
      console.log('Team project updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating team project:', error);
    }
  };

  return (
    <div className="update-team-project-container">
      <h2>Update Team Project</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="teamCode">Team Code:</label>
          <input
            type="text"
            id="teamCode"
            name="teamCode"
            value={projectDetails.teamCode}
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={projectDetails.teamName}
            onChange={handleInputChange}
          />
          <br />

          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={projectDetails.projectName}
            onChange={handleInputChange}
          />
          <br />

          <label>Members:</label>
          {projectDetails.members.map((member, index) => (
            <div key={index}>
              <label htmlFor={`email-${index}`}>Email:</label>
              <input
                type="text"
                id={`email-${index}`}
                name="email"
                value={member.email}
                onChange={(e) => handleMembersChange(index, e)}
              />
              <label htmlFor={`name-${index}`}>Name:</label>
              <input
                type="text"
                id={`name-${index}`}
                name="name"
                value={member.name}
                onChange={(e) => handleMembersChange(index, e)}
              />
              <label htmlFor={`contactNumber-${index}`}>Contact Number:</label>
              <input
                type="text"
                id={`contactNumber-${index}`}
                name="contactNumber"
                value={member.contactNumber}
                onChange={(e) => handleMembersChange(index, e)}
              />
              <button type="button" onClick={() => handleRemoveMember(index)}>
                Remove Member
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddMember}>
            Add Member
          </button>
        </fieldset>

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default UpdateTeamProjectPage;
