import { POKEMON_CLASS_TYPES } from '../constants/PokemonTypes'

const PokemonType = ({ type }) => {
  return (
    <div
      className={`rounded-full text-white p-0.5 w-28 text-sm text-center select-none uppercase 
      ${POKEMON_CLASS_TYPES[type]}`}
    >
      <div className='border-2 rounded-full'>{type}</div>
    </div>
  )
}

export default PokemonType
