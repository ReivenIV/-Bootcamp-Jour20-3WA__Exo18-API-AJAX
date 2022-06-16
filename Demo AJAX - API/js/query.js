//uniquement en mode récupération de donnée
$.get("https://api.themoviedb.org/3/movie/550?api_key=840523a722e0ffc0a860538562e81c5e&language=fr",function(response){
    console.log("$.get", response)
})

/*function callback(response){
    console.log("$.get", response)
}*/

//uniquement en récupération de donnée au format JSON
$.getJSON("https://api.themoviedb.org/3/movie/550?api_key=840523a722e0ffc0a860538562e81c5e&language=fr",function(response){
    console.log("$.getJSON", response)
})

//nous permet de faire du CRUD (create, read, update, delete) pour communiquer avec l'api
$.ajax({
    url: "https://api.themoviedb.org/3/movie/550?api_key=840523a722e0ffc0a860538562e81c5e&language=fr",
    method: "GET",
    dataType: "json",
    data:{
        //on pourrait s'en servir pour envoyer des données vers l'api
    },
    headers: {
        //nous permet d'envoyer des données dans l'entête sécurisée de ma requète XMLHttpRequest
    }
}).done(function(response){
    console.log("$.ajax", response)
}).fail(function(error){
    console.log("Erreur de récupération de donnée", error)
})