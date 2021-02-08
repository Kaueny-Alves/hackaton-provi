 import {professions} from './professions.js'

export function secondPage(id) {
  const section = document.querySelector("#skills");

  function getDados(id) {
    professions.map(()=>{
      console.log("page 2")
      section.innerHTML = " Segunda Página"
    })


  }
  getDados(id);
}




