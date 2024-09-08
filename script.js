"use strict";
//
const form = document.getElementById("resume-form");
const resumeDisplay = document.getElementById("resume-display");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;
    const instituteName = document.getElementById("institue-name").value;
    const fieldOfStudy = document.getElementById("field-of-study").value;
    const degree = document.getElementById("degree").value;
    const completionYear = document.getElementById("completion-year").value;
    const skills = document.getElementById("skills-list")
        .value;
    const jobTitle = document.getElementById("job-title")
        .value;
    const companyName = document.getElementById("company-name").value;
    const duration = document.getElementById("duration")
        .value;
    const resumeHTML = `
    <div id="resume-container">
    <h2>Your Resume</h2>
    

    <fieldset class="resume-section">
        <legend>Personal Information</legend>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Education</legend>
        <p><strong>Institute Name:</strong> ${instituteName}</p>
        <p><strong>Field of Study:</strong> ${fieldOfStudy}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Completion Year:</strong> ${completionYear}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Skills</legend>
        <p>${skills}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Work Experience</legend>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Duration:</strong> ${duration}</p>
    </fieldset>
    </div>

`;
    resumeDisplay.innerHTML = resumeHTML;
    resumeDisplay.style.display = "block";
});
