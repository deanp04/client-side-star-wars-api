document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charName = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-wars-char-api-6b47bacc83bb.herokuapp.com/api/${charName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.homeworld').innerText = 'homeworld: ' + data.homeworld
        document.querySelector('.species').innerText = 'species: ' + data.species
        document.querySelector('.height').innerText = 'height: ' + data.height
        document.querySelector('.allegiance').innerText = 'allegiance: ' + data.allegiance
    }catch(error){
        console.log(error)
    }
}