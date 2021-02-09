import { skills } from "./skills.js";

export function secondPage(id) {
  const section = document.querySelector("#skills");

  function getDados(id) {
    skills.map(({ image, id, name, skills }) => {
       

      const template = ` 
        <section id="grid"  >
        <div class="card"  >
        <img class="imgCard"src=${image} id=${id} />
        </div>
        <div class="nameHome">
        <p >
        ${name}
        </p>
        <div>${skills.map((skill) => {
          `
          <h1>${skill.description}</h1>
          </div>
          `
           
        })}
       
    </section>
        
        `;
  
        section.innerHTML += template;
     
    });
  }
  getDados(id);
}
