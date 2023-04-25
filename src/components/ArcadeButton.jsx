import { motion as m } from 'framer-motion'
import { ARCADE_COLORS } from '../constants/ArcadeColors'

const ArcadeButton = ({ children, color = 'red' }) => {
  return (
    <div
      className={`
      relative w-fit select-none
      ${ARCADE_COLORS[color].after} after:absolute after:left-0 after:top-1/2 after:w-full after:h-6 after:border-l-2 after:border-r-2 after:border-black
      ${ARCADE_COLORS[color].before} before:absolute before:border-2 border-t-0 before:border-black before:w-full before:h-full before:rounded-full  before:top-6 before:left-0 `}
    >
      <div className='sr-only after:bg-red-600 before:bg-red-600'></div>
      <m.button
        type='submit'
        whileTap={{ y: 6 }}
        className={`relative border-2 border-black rounded-full z-20 transition-colors top-0
        ${ARCADE_COLORS[color].base} ${ARCADE_COLORS[color].hover} `}
      >
        {children}
      </m.button>
    </div>
  )
}

export default ArcadeButton
