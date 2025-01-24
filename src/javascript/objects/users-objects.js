const usuarioObjeto = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositorios: [],
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
    },
    setRepositorios(repositories){
        this.repositorios = repositories
    }
}

export { usuarioObjeto }