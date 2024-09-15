// get reference to the form and dispaly area
const form = document.getElementById('Resumeform') as HTMLFormElement;
const resumeDispalyElement = document.getElementById('resume-display') as HTMLDivElement;


// handle form submission

form.addEventListener('submit', (event:Event)=>{
   event.preventDefault();

   // collect input values
   const name = (document.getElementById('name') as HTMLInputElement).value
   const email = (document.getElementById('email') as HTMLInputElement).value
   const Phone = (document.getElementById('phonenumber') as HTMLInputElement).value
   const education = (document.getElementById('Education') as HTMLTextAreaElement).value
   const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value
   const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value

   const resumeHTML = `
   <h2><b>EditableResume</b></h2>
   <h3>Personal Infromation</h3>
   <p><b>name:</b><span contenteditable="true">${name}</span></p>
   <p><b>email:</b><span contenteditable="true">${email}</span></p>
   <p><b>Phonenumber:</b span contenteditable="true">${Phone}</span</p>

   <h3>Education</h3>
   <p contenteditable="true">${education}</p>

   <h3>Experience</h3>
   <p contenteditable="true">${experience}</p>

   <h3>Skills</h3>
   <p contenteditable="true">${skills}</p>


   `;

   if(resumeDispalyElement){
      resumeDispalyElement.innerHTML = resumeHTML;
   } else{
      console.error('The Resume Dispaly Element is missing!')
   }
});