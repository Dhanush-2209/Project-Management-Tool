import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamLeadPage.css';

const TeamLeadPage = () => {
  const navigate = useNavigate();
  const [teamCode, setTeamCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    setMembers((prevMembers) => [...prevMembers, { email: '', name: '', contactNumber: '' }]);
  };

  const handleMemberChange = (index, field, value) => {
    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      updatedMembers[index][field] = value;
      return updatedMembers;
    });
  };

  const handleRemoveMember = (index) => {
    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      updatedMembers.splice(index, 1);
      return updatedMembers;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      teamCode,
      teamName,
      projectName,
      members,
    };

    try {
      const response = await fetch('https://deploy-backend-teamdetails.onrender.com/api/teamLead/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigate('/home');
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="team-lead-container">
      <h2 className="team-lead-heading">Team Lead Form</h2>
      <form className="team-lead-form" onSubmit={handleSubmit}>
        <label className="team-lead-label">
          Team Code:
          <input
            type="text"
            value={teamCode}
            onChange={(e) => setTeamCode(e.target.value)}
            className="team-lead-input"
          />
        </label>
        <label className="team-lead-label">
          Team Name:
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="team-lead-input"
          />
        </label>
        <label className="team-lead-label">
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="team-lead-input"
          />
        </label>

        {members.map((member, index) => (
          <div key={index} className="member-details">
            <label className="team-lead-label">
              Member {index + 1} Email:
              <input
                type="text"
                value={member.email}
                onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                className="team-lead-input"
              />
            </label>
            <label className="team-lead-label">
              Member {index + 1} Name:
              <input
                type="text"
                value={member.name}
                onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                className="team-lead-input"
              />
            </label>
            <label className="team-lead-label">
              Member {index + 1} Contact Number:
              <input
                type="text"
                value={member.contactNumber}
                onChange={(e) => handleMemberChange(index, 'contactNumber', e.target.value)}
                className="team-lead-input"
              />
              <button
                type="button"
                onClick={() => handleRemoveMember(index)}
                className="team-lead-button remove-member-button"
              >
                Remove Member
              </button>
            </label>
          </div>
        ))}

        <button type="button" onClick={handleAddMember} className="team-lead-button">
          Add Member
        </button>

        <button type="submit" className="team-lead-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeamLeadPage;
