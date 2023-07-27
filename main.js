document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charName = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-wars-api-w4mc.onrender.com/api/${charName}`)
        const data = await response.json()

        document.querySelector('.homeworld').innerText = 'homeworld: ' + data.homeworld
        document.querySelector('.species').innerText = 'species: ' + data.species
        document.querySelector('.height').innerText = 'height: ' + data.height
        document.querySelector('.allegiance').innerText = 'allegiance: ' + data.allegiance
        const characterImage = document.querySelector('.character-image');
        characterImage.src = data.image;
    }catch(error){
        console.log(error)
    }
}