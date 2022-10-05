let mainDiv = document.getElementById('main')

const url = 'https://www.omdbapi.com/?s=spring&apikey=841a117d&page=1'

async function rand() {
    const res = await fetch(url)
    const data = await res.json()
    let film = data.Search

    let title = document.getElementById('title')
    let year = document.getElementById('year')
    let img = document.getElementById('poster')
    img.style.marginBottom = "50px"

    let i = Math.floor(Math.random() * 10)

    title.textContent = film[i].Title
    year.textContent = film[i].Year
    img.src = film[i].Poster
}

rand()

// function createItem(element) {
//   return document.createElement(element);
// }

// const div = document.getElementById('film');
// const url = 'https://www.omdbapi.com/?s=spring&apikey=841a117d&page=1';

// function rand() {
//   fetch(url)
//   .then((resp) => resp.json())
//   .then(function(data) {
//   let film = data.Search;
//  // film = Math.floor(Math.random() * film.length);
//   return film.map(function(film) {
//   let img = createItem('img');
//   let div = createItem('h1');
//   let i = Math.floor(Math.random() * film.length)
//   console.log(film)
//   img.src = film.Poster;
//   // console.log(film.Poster[i])
//   //console.log(film[i].Poster)
//   img.style.marginBottom = "50px";
//   div.innerHTML = `${film.Title}  (${film.Year})`;
//   document.body.a   ppend(div);
//   document.body.append(img);
//   //console.log(data.Search[0])
// })
// })
// }