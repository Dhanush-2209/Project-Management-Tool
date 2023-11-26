import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <main className="about-main">
        <section className="company-overview">
          <h2>Company Profile</h2>
        </section>

        <section className="team-members">
          <h2>Our Team</h2>
          <div className="team-member">
            <h3>Rakshitha</h3>
            <p>Team Member 1</p>
          </div>
          <div className="team-member">
            <h3>Sreeja</h3>
            <p>Team Member 2</p>
          </div>
          <div className="team-member">
            <h3>Dhanush B</h3>
            <p>Team Member 3</p>
          </div>
          <div className="team-member">
            <h3>Devaki</h3>
            <p>Team Member 4</p>
          </div>
          <div className="team-member">
            <h3>Tulasi</h3>
            <p>Team Member 5</p>
          </div>
        </section>

        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Address: 
            VIT-AP University, G-30, Inavolu, Beside AP Secretariat Amaravati, Andhra Pradesh 522237<br />
            Phone: (123) 456-7890<br />
            Email: Team108@gmail.com
          </p>
        </section>
      </main>

      <footer className="about-footer">
        <p>&copy; 2023 Our Company</p>
      </footer>
    </div>
  );
};

export default AboutPage;