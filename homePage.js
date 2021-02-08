import { secondPage } from "./hackthon.js";
import { professions } from "./professions.js"

export function homePage() {
  function renderProfessions() {
   
    const home = document.querySelector("#home");

        professions.map(({ id, name, image }) => {
        
          const templateSearch = `
        <section id="grid"  >
            <div class="card"  >
            <img class="imgCard"src=${image} id=${id} />
            </div>
            <p>
            ${name}
            </p>
        </section>
       
        `;
          home.innerHTML += templateSearch;
      
        function pageSkills(e) {
          const idPage = e.target.id;
          console.log(idPage);
          secondPage(idPage);
          home.style.display = "none";
        }

        const search = document.querySelectorAll("#grid");

        for (let i = 0; i < search.length; i++) {
          search[i].addEventListener("click", pageSkills);
        }
      });
  }

  renderProfessions();
}
