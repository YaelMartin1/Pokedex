import { useEffect, useRef, useState } from 'react'

const Pokeball = ({ size = 1, type = 'pokeball' }) => {
  const innerSize = size * 0.4

  const ball = useRef(null)
  const innerBall = useRef(null)

  const topClass = `after:absolute after:-z-40 after:-top-0 after:bg-red-600 after:w-[100%] after:h-[50%] after:rounded-tl-full after:rounded-tr-full`
  const bottomClass = `before:absolute before:-z-40 before:top-[50%] before:bg-white before:w-[100%] before:h-[50%] before:rounded-bl-full before:rounded-br-full`

  const innerClass = `bg-inherit aspect-square rounded-full`

  useEffect(() => {
    ball.current.style.width = size + 'em'
    innerBall.current.style.width = innerSize + 'em'
  }, [size])

  return (
    <div className='w-fit h-fit'>
      <div
        className={`relative bg-base aspect-square z-40 rounded-full flex justify-center items-center ${topClass} ${bottomClass}`}
        ref={ball}
      >
        <div
          className='bg-inherit aspect-square rounded-full after:absolute after:w-[100%] after:left-0 after:top-[43.5%] after:h-[15%] after:bg-inherit'
          ref={innerBall}
        ></div>
      </div>
    </div>
  )
}

export default Pokeball
