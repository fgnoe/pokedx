var loadPokemonImage = function(pokemonNumber, listElement) {
    var pokemonImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemonNumber +".png";
    listElement.prepend('<img src="'+ pokemonImageUrl +'" />')
}

$.get("https://pokeapi.co/api/v2/pokemon/?limit=151", function(data, status){
    var pokemonList = data["results"];
    for(var i = 0; i < pokemonList.length; i++) {
        var pokemon = pokemonList[i];
        var pokemonListElement = $('<li></li>');
        $("body").append(pokemonListElement);
        pokemonListElement.append('<a>' + pokemon["name"] + '</a>'); 
        loadPokemonImage(i+1, pokemonListElement);
    }
});