const API_KEY = "840523a722e0ffc0a860538562e81c5e"

//fonction de requète ajax
function findMovie(){
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+API_KEY)
    .then((response)=>{
        console.log(response)
        getMovies(response.data.results)
    })
    .catch(err=>console.log(err))
}

//fonction callback pour gérer l'affichage de la réponse
function getMovies(response){
    //gestion de l'affichage des 20 films tendances de la semaine
    console.log(response)
    /*afficher dans le html: le titre, l'image du film, la note du fimm, combien de personnes ont votés, la date de sortie du film, la description
    si vous avez envi vous pouvez rajouter tout ce que vous voulez*/
    response.forEach((res)=>{
        let div = document.createElement("div")
        div.classList.add("test")
        
        let h3 = document.createElement("h3")
        h3.innerHTML = res.original_title
        
        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500${res.poster_path}`
        
        let vote = document.createElement("p")
        vote.innerHTML = `Note: ${res.vote_average}/10`
        
        let nbrVote = document.createElement("p")
        nbrVote.innerHTML = `${res.vote_count} personnes ont votés.`
        
        let description = document.createElement("p")
        description.innerHTML = res.overview
        
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(vote)
        div.appendChild(nbrVote)
        div.appendChild(description)
        
        document.querySelector(".Film").appendChild(div)
    })
}

findMovie()