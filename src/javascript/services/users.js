import { baseUrl } from "../variables.js"

async function usuario(userName){
    const resposta = await fetch(`${baseUrl}/${userName}`)
    return await resposta.json()
}

export { usuario }