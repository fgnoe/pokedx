var pokemonCardTemplate = 
'<div class="col-md-3 pokemon" pkname="<%= pokemonName %>">' +
'    <div class="thumbnail">' +
'      <a href="/w3images/lights.jpg">' +
'        <img src="<%= pokemonImageUrl %>" alt="..." style="width:100%">' +
'        <div class="caption">' +
'          <h3><a id="pokemon-name"><%= pokemonName %></a></h3' +
'        </div>' +
'      </a>' +
'    </div>' +
'  </div>';


$(document).ready(function(){
    var pokedexUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    $.get(pokedexUrl, function(data, status){
        var pokemonList = data["results"];
        for(var i = 0; i < pokemonList.length; i++) {
            var pokemon = pokemonList[i];
            var model = {
                pokemonImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ (i+1 + offset) +".png",
                pokemonName: pokemon["name"]
            }
            var pokemonCard = ejs.render(pokemonCardTemplate, model); 

            $("#pokemon-list").append(pokemonCard);
        }
    });

    $("#pokemon-search").on('keyup', function() {
        var pokemonToSearch = $(this).val();
        $(".pokemon").each(function() {
            if($(this).attr('pkname').includes(pokemonToSearch)) {
                $(this).removeAttr('hidden');
            } else {
                $(this).attr('hidden', 'hidden');
            }
        })
    })
});