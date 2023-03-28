const input = document.querySelector('input')
const btn = document.querySelector('button')
const card = document.querySelector('.card')

const repos_container = document.querySelector('.repos')

const API ="https://api.github.com/users/";

const user = async (username) => {
    const resp = await fetch(`${API}${username}`)
    const respData = await resp.json()
    return respData
}

const repos = async (username) => {
    const resp = await fetch(`${API}${username}`)
    const respData = await resp.json()

    return respData
}
