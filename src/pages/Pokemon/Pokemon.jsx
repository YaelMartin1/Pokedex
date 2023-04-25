import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArcadeButton from '../../components/ArcadeButton'
import PokemonSprite from '../../components/PokemonSprite'
import PokemonType from '../../components/PokemonType'
import { POKEMON } from '../../constants/Pokemon'
import pokemonService from '../../services/pokemon'

const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(POKEMON)
  const [evolutions, setEvolutions] = useState()

  useEffect(() => {
    pokemonService.getByName(id).then((data) => setPokemon(data))
    pokemonService.getEvolutions(id).then((data) => setEvolutions(data))
  }, [id])

  return (
    <section className='w-full min-h-[90vh] flex items-center justify-center p-8'>
      <div className='fixed top-1/2 -translate-y-1/2 left-0 bg-green-500'>
        {pokemon.id > 1 && (
          <Link to={`/${pokemon.id - 1}`}>
            <button>prev</button>
          </Link>
        )}
      </div>
      <div className='fixed top-1/2 -translate-y-1/2 right-0 bg-green-500'>
        <Link to={`/${pokemon.id + 1}`}>
          <button>next</button>
        </Link>
      </div>
      <div className='basis-[90%] min-h-[80vh] bg-white text-neutral-700 rounded-lg border-2 border-black overflow-hidden'>
        {/* header */}
        <div className='w-full flex border-b-2 border-black '>
          <PokemonSprite name={pokemon.name} sprites={pokemon.sprites} />
          <div className='grid grid-cols-2 w-full h-full p-2'>
            <h2 className='text-xl'>
              {('00' + pokemon.id).slice(-3)}-{pokemon.name}
            </h2>
            <ul className='flex gap-6 justify-self-end'>
              {pokemon.types.map((slot) => (
                <li key={slot.type.name}>
                  <PokemonType type={slot.type.name} />
                </li>
              ))}
            </ul>

            {/* evolutions */}
            <ul className='flex gap-1 text-sm'>
              <li>{evolutions?.evolution_chain.chain.species.name}</li>
              {evolutions?.evolution_chain.chain.evolves_to[0] && (
                <>
                  <li>&gt;</li>
                  <li>
                    {
                      evolutions.evolution_chain.chain.evolves_to[0].species
                        .name
                    }
                  </li>
                </>
              )}

              {evolutions?.evolution_chain.chain.evolves_to[0]
                ?.evolves_to[0] && (
                <>
                  <li>&gt;</li>
                  <li>
                    {
                      evolutions.evolution_chain.chain.evolves_to[0]
                        .evolves_to[0].species.name
                    }
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* body */}
        <div className='flex'>
          <div className='basis-full'>
            <article>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li className='' key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                    <div
                      style={{ width: stat.base_stat * 2 + 'px' }}
                      className='bg-blue-500 h-4 rounded-tr-full rounded-br-full'
                    ></div>
                  </li>
                ))}
              </ul>
            </article>
            <ArcadeButton color='blue'>
              <Link to='/'>
                <p className='p-5 px-2 text-white'>Volver</p>
              </Link>
            </ArcadeButton>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Pokemon
