//récupère des données (uniquement en mode lecture)
fetch("https://api.themoviedb.org/3/movie/550?api_key=840523a722e0ffc0a860538562e81c5e&language=fr")
.then(response => response.json())
.then((response)=>{
    console.log("fetch", response)
})
.catch(err=>console.log("error fetch", err))

//nous permet de faire du CRUD (create, read, update, delete)
//axios.get, axios.post, axios.put, axios.delete
axios.get("https://api.themoviedb.org/3/movie/550?api_key=840523a722e0ffc0a860538562e81c5e&language=fr")
.then((response)=>{
    console.log("axios", response.data)
    let h2 = document.createElement("h2")
    h2.innerHTML = response.data.original_title
    let p = document.createElement("p")
    p.innerHTML = response.data.overview
    
    document.querySelector("main").appendChild(h2)
    document.querySelector("main").appendChild(p)
})
.catch(err=>console.log("error axios", err))

/*.then et .catch nous permettent de manipuler nos promesses retournés par l'API
.then receptionne la réponse lorsque l'API a réussit à bien executer la réponse à la demande
.catch receptionne la réponse d'erreur lorsque l'api n'a pas réussit à bien éxécuter la réponse (en général mauvais url)
chacune des deux pourra executer une fonction callback pour gérer la situation et éviter de faire crasher le site.
*/

//on instancie notre objet (à l'époque on devait le construire)
let xhr = new XMLHttpRequest()

//ensuite on prépare notre requète en 1 on demande l'url en méthode GET (recup)
xhr.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=840523a722e0ffc0a860538562e81c5e&language=fr", true)
xhr.responseType = "json";//on indique le format de reception des données
xhr.onLoad = function(e){
    //fonction callback nous permettant de manipuler la reponse
    let result = xhr.response;
    console.log("xhr", result);
    /* ... */
}
xhr.send();//on envoi la requète