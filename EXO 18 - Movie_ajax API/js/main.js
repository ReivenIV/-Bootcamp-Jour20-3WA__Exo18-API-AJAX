const API_KEY = "your api key"

//fonction de requète ajax
function findMovie(){
    axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=a59ecd6f6f0c1384cb253d93d5b20699")
    .then((response)=>{
        getMovies(response.data.results)//!response sera où on stockera l'info qui cahque objet JSON ira sur Data et results sera chaque ligne à l'interieur
    })
    .catch(err=>console.log(err))
}

//fonction callback pour gérer l'affichage de la réponse
function getMovies(response){
    //gestion de l'affichage des 20 films tendances de la semaine
    console.log(response);
    /*afficher dans le html: le titre, l'image du film, la note du fimm, combien de personnes ont votés, la date de sortie du film, la description
    si vous avez envi vous pouvez rajouter tout ce que vous voulez*/
    response.forEach((res) => { //!On a utilise du forEach equivalent à une boucle for.. res c'est de response.. equivaux à response[i]
        let div = document.createElement("div")
        div.classList.add("test");

        let h3 = document.createElement("h3")
        h3.innerHTML = res.original_title

        let img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/w500${res.poster_path}`

        let vote = document.createElement("p")
        vote.innerHTML = `Note: ${res.vote_average}`/10

        let nbrVote = document.createElement("p")
        nbrVote.innerHTML = `${res.vote_count} personne ont votés`

        let description = document.createElement("p")
        description.innerHTML = res.overview

        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(vote)
        div.appendChild(nbrVote)
        div.appendChild(description)
        
        document.querySelector(".Film").appendChild(div)
    });
}


findMovie()