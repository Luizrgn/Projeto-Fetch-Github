import { user } from "../javascript/services/users.js"
import { repositories } from "../javascript/services/repositories.js"

import { userObject } from "../javascript/objects/users-objects.js"
import { screen } from "../javascript/objects/screen.js"


document.getElementById('btn-search') .addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

 /*função que esta fazendo a tecla enter no input ao ser pressionada, buscar o usuario!*/
document.getElementById('input-search') .addEventListener('keyup', (e) => {
    const userName = e.target.value /* aqui fica o valor que ta dentro do input */
    const key = e.which || e.keyCode 
    const isEnterKeyPressed /*seTeclaEnterPressionada - isEnterKeyPressed*/ = key === 13

    if(isEnterKeyPressed){
        validateEmptyInput(userName)
        // getPerfildoUsuario(userName)
    }
   
}) /*função que esta fazendo a tecla enter no input ao ser pressionada, buscar o usuario!*/

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await user(userName)  // Aqui busca os dados do usuário

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await repositories(userName)

    
    userObject.setInfo(userResponse)  // Preenche as informações no objeto usuarioObjeto
    userObject.setRepositories(repositoriesResponse)  // Preenche as informações no objeto usuarioObjeto
    screen.renderUser(userObject)  // Passa usuarioObjeto para a tela
    
}

// function getRepositoriosdoUsuario(userName){
//     repositorios(userName) .then(reposData => {
//         let repositoriosItens = ""

//         reposData.forEach(repo => {
//             repositoriosItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
//         })

//         document.querySelector('.profile-data').innerHTML +=  `<div class="repositories section">
//                                                                 <h2>Repositorios</h2>
//                                                                 <ul>${repositoriosItens}</ul>
//                                                               </div>`
//     })
// }