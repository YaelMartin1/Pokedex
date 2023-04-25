import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
const PokemonCard = ({ id, index, name, img }) => {
  return (
    <m.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className='flex flex-col aspect-square border-2 rounded-lg border-black bg-red-600 h-fit overflow-hidden'
    >
      <Link to={`/${id}`} className='flex flex-col h-full w-full'>
        <div
          className='relative w-full h-[30%] border-b-2 border-black flex justify-center items-center 
          before:absolute before:-bottom-2.5 before:left-[50%] after:-translate-x-1/2 before:rounded-full before:bg-black before:w-4 before:aspect-square
          after:absolute after:-bottom-1.5 after:left-[50%] before:-translate-x-1/2 after:rounded-full after:bg-gray-200 after:w-2 after:aspect-square'
        >
          <h3 className='capitalize text-sm flex items-center justify-center break-words'>
            {index}-{name}
          </h3>
        </div>
        <div className='flex w-full h-full items-center justify-center bg-gray-200'>
          <img
            src={img}
            alt={`this is a image of ${name}`}
            className='w-[55%] aspect-square'
          />
        </div>
      </Link>
    </m.div>
  )
}
export default PokemonCard
