import { Page } from "./Page.js";

export function homePage() {
  function renderProfessions() {
    const api = `http://localhost:3000/professions`;
    const home = document.querySelector("#home");

    fetch(api)
      .then((response) => response.json())
      .then((professions) => {
        professions.map(({ id, name, image }) => {
          console.log(id, name);

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
        });

        function pageSkills(e) {
          const idPage = e.target.id;
          console.log(idPage);
          Page(idPage);
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
