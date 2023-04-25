const POKEMON_API_URL = 'https://pokeapi.co/api/v2/'

const POKEMON_IMG_URL =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const get = async () => {
  const data = await fetch(POKEMON_API_URL + 'pokemon?limit=25')
    .then((response) => response.json())
    .then((data) => data)
  data.results = data.results.map((pokemon, index) => {
    const id = ('00' + (index + 1)).slice(-3)
    const img = POKEMON_IMG_URL + id + '.png'
    return { ...pokemon, img, id: index + 1, index: id }
  })
  return data
}

const getByName = async (name) => {
  return fetch(`${POKEMON_API_URL}pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => data)
}

const getEvolutionChain = async (url) => {
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
  // data.evolutions = []
  // console.log(data)
  // data.evolution_chain.push()
  // data.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name
  // data.results = data.results.map((pokemon, index) => {
  //   const id = ('00' + (index + 1)).slice(-3)
  //   const img = POKEMON_IMG_URL + id + '.png'
  //   return { ...pokemon, img, id: index + 1, index: id }
  // })
  return data
}

const getSpecies = async (id) => {
  const pokemonSpecies = await fetch(`${POKEMON_API_URL}pokemon-species/${id}/`)
    .then((response) => response.json())
    .then((data) => data)
  pokemonSpecies.evolution_chain = await getEvolutionChain(
    pokemonSpecies.evolution_chain.url
  )
  return pokemonSpecies
}
const pokemonService = { get, getByName, getEvolutions: getSpecies }
export default pokemonService
