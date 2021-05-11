const poke_container=document.getElementById('poke-container')
const pokemon_count= 200
const colors={
  fire:'#ffe268',
  grass:'#b6eb7a',
  electric:'#ffffff',
  water:'#8fd6e1',
  ground:'#897853',
  rock:'#c8c2bc',
  fairy:'#fcd1d1',
  poison:'#e4bad4',
  bug:'#bb8082',
  dragon:'#ffb26b',
  psychic:'#f6e7e6',
  flying:'#8ab6d6',
  fighting:'#ded473',
  normal:'#9fe6a0'
}
const fetchPokemons=async()=>{
  for(let i=1;i<=pokemon_count;i++){
    await getPokemon(i)
  }
}
const main_types=Object.keys(colors)
const getPokemon=async (id)=>{
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`
  const res=await fetch(url)
  const data=await res.json()
  createPokemonCard(data)
}
const createPokemonCard=(pokemon)=>{
  const pokemonEl=document.createElement('div')
  pokemonEl.classList.add('pokemon')
  const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1)
  const id=pokemon.id.toString().padStart(3,'0')
  const poke_types=pokemon.types.map(type=>type.type.name)
  const type=main_types.find(type=>poke_types.indexOf(type)>-1)
  const color=colors[type]
  pokemonEl.style.backgroundColor=color
  const pokemonInnerHTML=`
    <div class="img-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span> </small>
    </div>
  `
  pokemonEl.innerHTML=pokemonInnerHTML
  poke_container.appendChild(pokemonEl)
}
fetchPokemons()
