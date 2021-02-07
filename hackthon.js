export function secondPage(id) {
  const section = document.querySelector("#skills");

  async function getDados(id) {


    const api2 = `https://cors-anywhere.herokuapp.com/http://localhost:3000/professions/${id}`;


    const result = await fetch(api2)
    console.log(result)
  }
  getDados(id);
}




