//

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phoneNumber = (
    document.getElementById("phone-number") as HTMLInputElement
  ).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const instituteName = (
    document.getElementById("institue-name") as HTMLInputElement
  ).value;
  const fieldOfStudy = (
    document.getElementById("field-of-study") as HTMLInputElement
  ).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const completionYear = (
    document.getElementById("completion-year") as HTMLInputElement
  ).value;
  const skills = (document.getElementById("skills-list") as HTMLTextAreaElement)
    .value;
  const jobTitle = (document.getElementById("job-title") as HTMLInputElement)
    .value;
  const companyName = (
    document.getElementById("company-name") as HTMLInputElement
  ).value;
  const duration = (document.getElementById("duration") as HTMLInputElement)
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
