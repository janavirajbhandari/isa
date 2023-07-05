const clickbtn = document.getElementById("touch");

function data(dat) {
  var ima = document.getElementById("pos");
  ima.src = dat.Poster;
  var movie = document.getElementById("title");
  movie.textContent = dat.Title;
  var date = document.getElementById("rel");
  date.textContent = dat.Released;
}
async function datafetch() {
  const response = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=ae7fec5d"
  );
  const datas = await response.json();
  console.log(datas);
  data(datas);
}
async function fetchdata() {
    const searchQuery = document.getElementById("input-box").value;
    console.log(searchQuery);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchQuery}&apikey=ae7fec5d`
    );
    const datas = await response.json();
    console.log(datas);
    if (datas.Response === "True") {
      const movies = datas.Search;
      var loopContainer = document.getElementById("lists");
      loopContainer.innerHTML = "";
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const response = await fetch(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ae7fec5d`
        );
        const movieData = await response.json();
        console.log(movieData);
        var movieContainer = document.createElement("divs");
        var ima = document.createElement("img");
        ima.src = movieData.Poster;
        movieContainer.appendChild(ima);
        var title = document.createElement("h2");
        title.textContent = movieData.Title;
        movieContainer.appendChild(title);
        var rel = document.createElement("p");
        rel.textContent = movieData.Released;
        movieContainer.appendChild(rel);
        loopContainer.appendChild(movieContainer);
      
    }} else {
      var loopContainer = document.getElementById("lists");
      loopContainer.innerHTML = "";
      console.log("No results found.");
      var not = document.createElement("p1");
      not.textContent="NO RESULT FOUND.";
      loopContainer.appendChild(not);
    }
  
}
if (document.getElementById("input-box").value === "") {
  datafetch();
} else {
  fetchdata();
}
clickbtn.addEventListener("click", () => fetchdata());
