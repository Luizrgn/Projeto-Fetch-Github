const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userObject){
        this.userProfile.innerHTML =/* codigo html dentro do javascript!*/ 
                                 `<div class="info">
                                  <img src="${userObject.avatarUrl}" alt="Foto do perfil de usuário" />
                                  <div class="data">
                                         <h1>${userObject.name ?? 'não possui nome cadastrado 😥.'}</h1>
                                         <p>${userObject.bio ?? 'não possui bio cadastrada 😥.'}</p>
                                         <p>Seguidores: ${userObject.followers}</p> <!-- Exibir número de seguidores -->
                                         <p>Seguindo: ${userObject.following}</p> <!-- Exibir número de pessoas seguidas -->
                                  </div>
                                  </div>` /* codigo html dentro do javascript!*/
                                  
        let repositoriesItens = ''
        userObject.repositories.forEach(repo => repositoriesItens += `<li>
                                                                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                            <div>
                                                                                <i class="fa-solid fa-utensils"> ${repo.forks_count} </i> 
                                                                                <i class="fas fa-star"> ${repo.stargazers_count} </i>
                                                                                <i class="fas fa-eye"> ${repo.watchers_count} </i>
                                                                                <i class="fas fa-language"> ${repo.language} </i>
                                                                            </div>
                                                                     </li>`)

        if(userObject.repositories.length > 0){
            this.userProfile.innerHTML += `<div class = repositories section>
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                            </div>`
        }

    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    },

    renderEvents(events) {
        let eventsHtml = '';

        
        events.forEach(event => {
            if (event.type === 'CreateEvent') {
                
                eventsHtml += `<div class="event">
                                 <p>Sem mensagem de commit</p>  <!-- Substituindo o CreateEvent pela mensagem -->
                               </div>`;
            } else if (event.type === 'PushEvent') {
                eventsHtml += `<div class="event">
                                 <p>Push: ${event.repo.name}</p>
                                 <p>Commit: ${event.payload.commits[0]?.message || 'Sem mensagem de commit'}</p>
                               </div>`;
            }
        });

        if (eventsHtml) {
            this.userProfile.innerHTML += `<div class="events">
                                              <h2>Eventos Recentes</h2>
                                              ${eventsHtml}
                                            </div>`;
        }
    }
};

export { screen };