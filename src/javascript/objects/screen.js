const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userObject){
        this.userProfile.innerHTML =/* codigo html dentro do javascript!*/ 
                                 `<div class="info">
                                  <img src="${userObject.avatarUrl}" alt="Foto do perfil de usuário" />
                                  <div class="data">
                                         <h1>${userObject.name ?? 'não possui nome cadastrado 😥.'}</h1>
                                         <p>${userObject.bio ?? 'não possui bio cadastrada 😥.'}</p>
                                  </div>
                                  </div>` /* codigo html dentro do javascript!*/
                                  
        let repositoriesItens = ''
        userObject.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(userObject.repositories.length > 0){
            this.userProfile.innerHTML += `<div class = repositories section>
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                            </div>`
        }

    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export { screen }