import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [teamProjectNames, setTeamProjectNames] = useState([]);
  const [individualProjectNames, setIndividualProjectNames] = useState([]);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);
  const [isLoadingIndividual, setIsLoadingIndividual] = useState(true);

  useEffect(() => {
    const fetchTeamProjectNames = async () => {
      try {
        const response = await axios.get('https://deploy-backend-teamdetails.onrender.com/api/teamLead/projects');
        if (Array.isArray(response.data)) {
          setTeamProjectNames(response.data);
        } else {
          console.error('Unexpected data format for team projects:', response.data);
          setTeamProjectNames([]);
        }
      } catch (error) {
        console.error('Error fetching team project names:', error);
      } finally {
        setIsLoadingTeam(false);
      }
    };

    const fetchIndividualProjectNames = async () => {
      try {
        const response = await axios.get('https://deploy-backend-indetails.onrender.com/api/individual/projects');
        if (response.data && response.data.data) {
          setIndividualProjectNames(response.data.data);
        } else {
          console.error('Unexpected data format for individual projects:', response.data);
          setIndividualProjectNames([]);
        }
      } catch (error) {
        console.error('Error fetching individual project names:', error);
      } finally {
        setIsLoadingIndividual(false);
      }
    };

    fetchTeamProjectNames();
    fetchIndividualProjectNames();
  }, []);

  const handleDelete = async (projectName, isTeam) => {
    try {
      const apiUrl = isTeam
        ? `https://deploy-backend-teamdetails.onrender.com/api/teamLead/projects/delete/${projectName}`
        : `https://deploy-backend-indetails.onrender.com/api/individual/delete/individual/${projectName}`;

      const response = await axios.delete(apiUrl);

      if (response.data.success) {
        if (isTeam) {
          setTeamProjectNames((prevProjects) => prevProjects.filter((project) => project !== projectName));
        } else {
          setIndividualProjectNames((prevProjects) =>
            prevProjects.filter((project) => project.projectName !== projectName)
          );
        }
      } else {
        console.error(`Failed to delete ${isTeam ? 'team' : 'individual'} project: ${projectName}`);
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const renderProjects = (projects, isTeam) => {
    if (isLoadingTeam || isLoadingIndividual) {
      return <p>Loading {isTeam ? 'Team' : 'Individual'} Projects...</p>;
    }

    if (projects.length > 0) {
      return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projects.map((project, index) => (
            <li key={index} style={{ margin: '5px', border: '1px solid #ccc', padding: '10px' }}>
              {`Project Name: ${isTeam ? project : project.projectName}`}
              <Link to={`/update/${isTeam ? 'team' : 'individual'}/${isTeam ? project : project.projectName}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(isTeam ? project : project.projectName, isTeam)}>Delete</button>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>No {isTeam ? 'Team' : 'Individual'} Projects Found</p>;
    }
  };

  return (
    <div className="project-page-container" style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Projects</h2>
      <div>
        <button className="project-button">Team</button>
        {renderProjects(teamProjectNames, true)}
      </div>
      <div>
        <button className="project-button">Individual</button>
        {renderProjects(individualProjectNames, false)}
      </div>
    </div>
  );
};

export default Dashboard;
