import { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import pokemonService from '../../services/pokemon'

const Pokemons = () => {
  const [pokemons, setPokemons] = useState({
    count: 0,
    next: '',
    prev: '',
    results: [],
  })

  useEffect(() => {
    pokemonService.get().then((data) => setPokemons(data))
  }, [])

  return (
    <section className='grid sm:grid-cols-3 md:grid-cols-5 gap-6 p-10'>
      {pokemons.results.map((pokemon) => (
        <PokemonCard key={pokemon.id + pokemon.name} {...pokemon} />
      ))}
    </section>
  )
}
export default Pokemons
