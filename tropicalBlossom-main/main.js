const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const cards = document.querySelectorAll('.card-item');


function filterCards() {
  const searchText = searchInput.value.toLowerCase(); 
  cards.forEach(card => {
    const cardTitle = card.querySelector('h3').textContent.toLowerCase(); 
    const cardDescription = card.querySelector('p').textContent.toLowerCase();
    if (cardTitle.includes(searchText) || cardDescription.includes(searchText)) {
      card.style.display = ''; 
    } else {
      card.style.display = 'none'; 
    }
  });
}


searchInput.addEventListener('input', filterCards);
searchButton.addEventListener('click', filterCards); 


const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuResponsivo = document.querySelector('.menu-responsivo');


menuHamburguer.addEventListener('click', () => {
    menuResponsivo.classList.toggle('ativo');  
});