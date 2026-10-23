const song = document.getElementById("loveSong");

song.addEventListener("loadedmetadata", () => {
  
});

let currentCard = 0;
const cards = document.querySelectorAll(".card");

function nextCard() {
  cards[currentCard].classList.remove("active");
  currentCard++;

  if (currentCard < cards.length) {
    cards[currentCard].classList.add("active");

    
    if (currentCard === cards.length - 1) {
      const song = document.getElementById("loveSong");

      if (song) {
        song.currentTime = 0; 
        song.play().catch(() => {
          console.log("Autoplay blocked by browser");
        });
      }
    }
  }
}





