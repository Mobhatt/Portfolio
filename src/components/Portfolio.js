import React from 'react'
import './Portfolio.module.css'

const Portfolio = () => {
    return (
        <div className="portfolio-container">
          <h1>Mohit Bhatt - Senior React Developer</h1>
          <div className="personal-info">
            <h2>Personal Information</h2>
            <p><strong>Date of Birth:</strong> 24th October 1996</p>
            <p><strong>Education:</strong></p>
            <ul>
              <li>BTECH(ECE) - Electronics and Communication Engineering, 2019, from GGSIPU</li>
              <li>X11th – Science from DL DAV MODEL SCHOOL, DELHI</li>
            </ul>
          </div>
          <div className="employment-record">
            <h2>Employment Record</h2>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Position Held</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ernst and Young LLP</td>
                  <td>June</td>
                  <td>Till Date</td>
                  <td>Senior React Developer</td>
                </tr>
                <tr>
                  <td>Verismart.AI</td>
                  <td>April 2017</td>
                  <td>July 2019</td>
                  <td>Senior React Developer</td>
                </tr>
                <tr>
                  <td>TCS (Tata consultancy ltd)</td>
                  <td>June 2016</td>
                  <td>March 2017</td>
                  <td>Developer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="brief-profile">
            <h2>Brief Profile</h2>
            <p>
              Mohit has over three years of frontend and management exposure covering around different projects including government, health, AI chatbot, industrial and product-based projects.
            </p>
            <p>
              Reliable | 4+ years as a Web developer | B.tech | Proficient in JS, CSS, React | Have exposure to Azure DevOps, Postman, API, MongoDB database, and basics of NODE JS , networking . Also, a great communicator who believes in knowledge sharing.
            </p>
            <p>
              Mohit has Created a Dashboard using React, Material UI, Axios , Formik, Yup, and several other libraries of React where users could interact and provide support to the customer over different chatbots , My responsibility included integration of API and building the UI pages from scratch.
            </p>
          </div>
          <br />
          <hr />
          <div className="certifications">
            <h2>Certifications/Trainings</h2>
            <ul>
              <li>JavaScript, React JS</li>
              <li>SQL basics, Node JS basics</li>
              <li>Python Programming, DJANGO</li>
              <li>Web development, CSS frameworks</li>
              <li>TCS certificates, STAR</li>
              <li>Client Certificates</li>
              <li>Service commitment Certificates</li>
            </ul>
          </div>
          <br />
          <hr />
          <div className="technologies">
            <h2>Technologies worked on</h2>
            
            <p>
              Frontend Development, ReactJS, API integration, JavaScript, Debugging, Coding, MongoDB, CSS Frameworks, SASS, Deployment Support, Service Delivery, Production Support, Git, Change Management, Python, Redux, Axios, Formik, Agile, PWAs, Nodejs(Beginner), SolarWinds Tool, ServiceNow, Tailwind CSS, Bootstrap, SQL basics, Database, MS office, Presentation, Documentation, etc
            </p>
          </div>
          <br />
          <hr />
         
        </div>

        
      );
}

export default Portfolio