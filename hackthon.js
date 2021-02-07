export function secondPage() {

    const section = document.getElementById('skills');

    class dadosProfissao {
        constructor(idProfissao, nameProfissao, imageProfissao, descriptionSkill, idSkills) {
            this._idProfissao = idProfissao;
            this._nameProfissao = nameProfissao;
            this._imageProfissao = imageProfissao;
            this._skills = "";
        }
        setSkills() {
            return this._skills;
        }
        BuscaDados(id) {
            const buscarDados = new XMLHttpRequest();
            buscarDados.open('GET', `https://localhost:3000/professions/${id}`, false);

            buscarDados.addEventListener('load', () => {

                if (buscarDados.status == 200) {
                    let response = JSON.parse(buscarDados.responseText);
                    this._skills = response.skills;
                    for (respostas of response) {
                        this._idProfissao = response.id;
                        this._nameProfissao = response.name;
                        this._imageProfissao = response.image;

                    }
                }

            });
            buscarDados.send();
        }

    }



    class View {
        desenharProfissao(info) {
            let nameProf = document.createElement('h1');
            nameProf.textContent = info.name;
            section.appendChild(nameProf);
            let imageProf = document.createElement('img');
            imageProf.textContent = info.image;
            section.appendChild(imageProf);

        }

        desenharSkill(info) {
            let skillsarr = info.setSkills();
            for (let skill of skillsarr) {
                let nameSkill = document.createElement('h4');
                nameSkill.textContent = skill.name;
                section.appendChild(nameSkill);
                let descriptionSkill = document.createElement('p');
                descriptionSkill.textContent = skill.description;
                let

            }

        }
    }

    class Controller {
        searchProf(id) {
            let profissao = new dadosProfissao;
            profissao.BuscaDados(id);
            let view = new View;
            view.desenharProfissao(profissao);
            view.desenharSkill(profissao);

        }
    }

    let controller = new Controller;
    controller.searchProf(id);
}