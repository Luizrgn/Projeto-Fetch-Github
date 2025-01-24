const tela = {
    usuarioPerfil: document.querySelector('.perfil-data'),
    renderUser(usuarioObjeto){
        this.usuarioPerfil.innerHTML =/* codigo html dentro do javascript!*/ 
                                 `<div class="info">
                                  <img src="${usuarioObjeto.avatarUrl}" alt="Foto do perfil de usuário" />
                                  <div class="data">
                                         <h1>${usuarioObjeto.name ?? 'não possui nome cadastrado 😥.'}</h1>
                                         <p>${usuarioObjeto.bio ?? 'não possui bio cadastrada 😥.'}</p>
                                  </div>
                                  </div>` /* codigo html dentro do javascript!*/
                                  
        let repositoriosItens = ''
        usuarioObjeto.repositorios.forEach(repo => repositoriosItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(usuarioObjeto.repositorios.length > 0){
            this.usuarioPerfil.innerHTML += `<div class = repositories section>
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriosItens}</ul>
                                            </div>`
        }

    },

    renderNotFound(){
        this.usuarioPerfil.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export { tela }