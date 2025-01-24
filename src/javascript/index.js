import { usuario } from "../javascript/services/users.js"
import { repositorios } from "../javascript/services/repositories.js"

import { usuarioObjeto } from "../javascript/objects/users-objects.js"
import { tela } from "../javascript/objects/screen.js"


document.getElementById('botao-buscar') .addEventListener('click', () => {
    const userName = document.getElementById('input-buscar').value
    if(validacaoInputVazio(userName)) return
    getUsuarioData(userName)
})

 /*função que esta fazendo a tecla enter no input ao ser pressionada, buscar o usuario!*/
document.getElementById('input-buscar') .addEventListener('keyup', (e) => {
    const userName = e.target.value /* aqui fica o valor que ta dentro do input */
    const tecla = e.which || e.keyCode 
    const seTeclaEnterPressionada /*isEnterKeyPressed*/ = tecla === 13

    if(seTeclaEnterPressionada){
        validacaoInputVazio(userName)
        getPerfildoUsuario(userName)
    }
   
}) /*função que esta fazendo a tecla enter no input ao ser pressionada, buscar o usuario!*/

function validacaoInputVazio(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github')
        return true
    }
}

async function getUsuarioData(userName) {

    const usuarioResposta = await usuario(userName)  // Aqui busca os dados do usuário

    if(usuarioResposta.message === "Not Found"){
        tela.renderNotFound()
        return
    }

    const repositoriosResposta = await repositorios(userName)

    
    usuarioObjeto.setInfo(usuarioResposta)  // Preenche as informações no objeto usuarioObjeto
    usuarioObjeto.setRepositorios(repositoriosResposta)  // Preenche as informações no objeto usuarioObjeto
    tela.renderUser(usuarioObjeto)  // Passa usuarioObjeto para a tela

    // usuario(userName) .then(userData => {
        

    //     let informacaoUsuario =/* codigo html dentro do javascript!*/ 
    //                             `<div class="info">
    //                              <img src="${userData.avatar_url}" alt="Foto do perfil de usuário" />
    //                              <div class="data">
    //                                     <h1>${userData.name ?? 'não possui nome cadastrado 😥.'}</h1>
    //                                     <p>${userData.bio ?? 'não possui bio cadastrada 😥.'}</p>
    //                              </div>
    //                              </div>` /* codigo html dentro do javascript!*/
    //     document.querySelector('.perfil-data') .innerHTML = informacaoUsuario

    //     getRepositoriosdoUsuario(userName)
    // })
    
}

function getRepositoriosdoUsuario(userName){
    repositorios(userName) .then(reposData => {
        let repositoriosItens = ""

        reposData.forEach(repo => {
            repositoriosItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })

        document.querySelector('.perfil-data').innerHTML +=  `<div class="repositories section">
                                                                <h2>Repositorios</h2>
                                                                <ul>${repositoriosItens}</ul>
                                                              </div>`
    })
}