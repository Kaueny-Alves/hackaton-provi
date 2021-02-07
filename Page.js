export function Page() {
  function renderProfessions() {
    const skills = document.querySelector("#skills");

    const templateSearch = `
        <section id="grid" >
            <div class="card" >
            <img id="imgCard"/>
            </div>
            <p>
          Oiiiiiii
            </p>
        </section>
       
        `;
    skills.innerHTML += templateSearch;
  }

  renderProfessions();
}
