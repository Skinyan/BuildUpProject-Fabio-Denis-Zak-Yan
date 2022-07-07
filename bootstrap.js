const container = document.querySelector("#mastercontainer");
const shufanime = [12, 852, 43, 89];

let moviecard = function (anime) {
  let title = document.createElement("h2");
  let episodes = document.createElement("h3");
  let year = document.createElement("p");
  let cardImg = document.createElement("img");

  cardImg.src = anime.image.jpg.image_url;
  container.appendChild(title);
  container.appendChild(cardImg);
  container.appendChild(episodes);
  container.appendChild(year);
  
  moviecard(anime); 
};

for (let i = 1; i < shufanime.length; i++) {
  fetch("https://api.jikan.moe/v4/anime/" + [i])
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      moviecard(result.data);
    });
}