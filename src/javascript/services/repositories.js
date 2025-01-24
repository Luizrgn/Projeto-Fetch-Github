import { baseUrl, repositoriosQuantidade } from "../variables.js"

async function repositorios(userName){
    const resposta = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriosQuantidade}`)
    return await resposta.json()
}

export { repositorios }