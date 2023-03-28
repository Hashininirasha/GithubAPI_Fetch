
const input = document.querySelector('input')
const btn = document.querySelector('button')
const card = document.querySelector('.card')
const API ="https://api.github.com/users/";

const repos_container = document.querySelector('.repos')

const user = async (username) => {
    try{
    const resp = await fetch(`${API}${username}`)
    const respData = await resp.json()
    return respData;
    }catch(err){
        console.log(err)
    }
};

const repos = async (username) => {
    try{
    const resp = await fetch(`${API}${username}/repos`)
    const respData = await resp.json()

    return respData;
    }catch(err){
        console.log(err);
    }
}


