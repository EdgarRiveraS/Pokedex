const buscarPokemon = () =>{
    const pokeNameInput = document.getElementById("pokeName");
    let pokeNom = pokeNameInput.value;
    pokeNom = pokeNom.toLowerCase();
    fetchPokemon(pokeNom);
}
const buscarSiguiente=()=>{
    const pokeNameInput = document.getElementById("pokeId");
    let pokeNom = 1+ parseInt(pokeNameInput.innerText);
    fetchPokemon(pokeNom);
}
const buscarAnterior=()=>{
    const pokeNameInput = document.getElementById("pokeId");
    let pokeNom = parseInt(pokeNameInput.innerText)-1;
    if (pokeNom > 0){
         fetchPokemon(pokeNom);
    }
}
const fetchPokemon = (pokemon) => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImagen("./Imagenes/Pokebola.jpg");
        }
        else {
            return res.json();
            console.log(res);
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokename = data.name;
            let pokeType = data.types;
            let pokestats = data.stats;
            let pokeId = data.id;
            nombre(pokename);
            pokeImagen(pokeImg);
            type(pokeType);
            estadisticas(pokestats);
            identificador(pokeId);
            console.log(pokeImg);

        }
    });
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

const pokeImagen  = (url) =>{
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const nombre = (nom) =>{
    const name = document.getElementById("pokeNombre");
    name.innerText = nom;
}
const type = (tip) =>{
    const tipo = document.getElementById("pokeType");
    var concatena,caso1,caso2 ="";
    var index = tip.length;
    if (index == 1) {
        concatena = capitalize(tip[0].type.name);
    }
    else{
        caso1 = capitalize(tip[0].type.name);
        caso2 = capitalize(tip[1].type.name)
        concatena = caso1 + " / " + caso2;    
    }  
    tipo.innerText = concatena;
}
const estadisticas = (stat)=>{
    const estadisticas = document.getElementById("pokeStadisticas");
    var concatena ="";
    estadisticas.innerText = `HP ${stat[0].base_stat} \n Ataque ${stat[1].base_stat} \n Defensa ${stat[2].base_stat} \n Ataque-Especial ${stat[3].base_stat} \n Defensa-Especial ${stat[4].base_stat} \n Rapidez ${stat[5].base_stat} `;
}
const identificador = (ident) =>{
    const identifica = document.getElementById("pokeId");
    identifica.innerText = ident;
}

