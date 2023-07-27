document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      apiRequest(this.textContent);
    });
  });
  
  async function apiRequest(charName) {
    try {
      const response = await fetch(`https://star-wars-api-w4mc.onrender.com/api/${charName}`);
      const data = await response.json();
  
      // Find the modal element dynamically
      const modal = document.getElementById('modal1');
      
      // Populate modal elements with the retrieved information
      modal.querySelector('.font-bold').innerText = data.name;
      modal.querySelector('.homeworld').innerText = 'Homeworld: ' + data.homeworld;
      modal.querySelector('.species').innerText = 'Species: ' + data.species;
      modal.querySelector('.height').innerText = 'Height: ' + data.height;
      modal.querySelector('.allegiance').innerText = 'Allegiance: ' + data.allegiance;
  
      // Set the image source (URL) and alt attribute to the character's image URL and name, respectively
      const characterImage = modal.querySelector('.character-image');
      characterImage.src = data.image; // Assuming the API response contains the image URL as 'image'
      characterImage.alt = charName;
  
      // Show the modal
      modal.showModal();
    } catch (error) {
      console.error('Error fetching character information:', error);
    }
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('modal1');
    modal.close();
  }