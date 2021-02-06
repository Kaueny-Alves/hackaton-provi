export function homePage() {
  const home = document.querySelector("#home");
  // fetch("https://6015b2e155dfbd00174ca812.mockapi.io/api/v1/Livrarias", infos)
  // .then((response) => response.json())
  // .then((json) => console.log("Resposta:" + json))
  // .catch((erro) => console.log("Erro:" + erro));

  const profissoes = [
    {
      id: 1,
      name: "Auxiliar Administrativo",
      img:"https://picsum.photos/id/967/500/500"
    },
    {
      id: 2,
      name: "Vendedor(a)",
      img:"https://picsum.photos/id/967/500/500"
    },
    {
      id: 3,
      name: "Cabeleireiro(a)",
      img:"https://picsum.photos/id/967/500/500"
    },
    {
      id: 4,
      name: "Professor(a)",
      img:"https://picsum.photos/id/967/500/500"
    },
    {
      id: 5,
      name: "Programador(a)",
      img:"https://picsum.photos/id/967/500/500"
    }
      ]; 

  profissoes.map((item)=>{
      
    const templateSearch = `
    <section id="grid">
        <div class="card">
        <img id="imgCard"src=${item.img}/>
        </div>
        <p>
        ${item.name}
        </p>
    </section>
   
    `;
    home.innerHTML += templateSearch;
  })
   
  

  const buttonSearch = document.querySelector(".card");
  buttonSearch.addEventListener("click", () => {
    console.log("cliquei");
  });
}
