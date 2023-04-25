import { useEffect, useState } from 'react'
import Pokeball from './Pokeball'
import { motion as m } from 'framer-motion'
const PokemonSprite = ({ sprites, name }) => {
  const [sprite, setSprite] = useState(sprites.front_default)

  const [isMale, setIsMale] = useState(true)
  const [isFront, setIsFront] = useState(true)
  const [isShiny, setIsShiny] = useState(false)

  const [hasGenders, setHasGenders] = useState(true)

  const selectSprite = ({ isFront, isShiny, isMale }) => {
    const position = isFront ? 'front' : 'back'
    const shiny = isShiny
      ? isMale
        ? '_shiny'
        : '_shiny_female'
      : isMale
      ? '_default'
      : '_female'
    const newSprite = position + shiny
    setSprite(sprites[newSprite])
  }

  const toggleGender = () => {
    const gender = !isMale
    setIsMale(gender)
    selectSprite({ isFront, isShiny, isMale: gender })
  }
  const togglePosition = () => {
    const position = !isFront
    setIsFront(position)
    selectSprite({ isFront: position, isShiny, isMale })
  }
  const toggleShiny = () => {
    const shiny = !isShiny
    setIsShiny(shiny)
    selectSprite({ isFront, isShiny: shiny, isMale })
  }

  useEffect(() => {
    setSprite(sprites.front_default)
    setHasGenders(sprites.front_default && sprites.front_female)
  }, [sprites])

  return (
    <div className='relative border-r-2 border-black bg-neutral-500'>
      <div className='absolute top-0 left-0 select-none z-10'>
        <button
          onClick={toggleShiny}
          className='cursor-pointer bg-blue-400 hover:bg-blue-500 aspect-square w-8 text-center m-1 p-1 rounded-full transition-colors'
        >
          {isShiny ? '⭐' : '☘️'}
        </button>
      </div>
      <m.div
        whileHover={{ scale: 1.02 }}
        onClick={togglePosition}
        className='relative cursor-pointer p-5 select-none'
      >
        <div className=' opacity-80 '>
          <Pokeball size={9} />
        </div>
        <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2   w-36 aspect-square'>
          <img
            src={sprite}
            alt={`image of ${name}`}
            className='z-[100] w-full'
          />
        </div>
      </m.div>
      <div className='absolute bottom-0 right-0 flex gap-2 z-10'>
        {hasGenders && (
          <button
            onClick={toggleGender}
            className='cursor-pointer p-1 bg-pink-400 hover:bg-pink-500 rounded-full w-8 m-1 aspect-square transition-colors'
          >
            {isMale ? '♀️' : '♂️'}
          </button>
        )}
      </div>
    </div>
  )
}
export default PokemonSprite
