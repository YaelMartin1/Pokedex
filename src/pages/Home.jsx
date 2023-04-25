import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import firebase from '../config/firebase'
import Pokemon from './Pokemon/Pokemon'
import Pokemons from './Pokemon/Pokemons'

const Home = () => {
  return (
    <main className='w-full min-h-screen'>
      <Header></Header>
      <Routes>
        <Route path='' element={<Pokemons />} />
        <Route path=':id' element={<Pokemon />} />
      </Routes>
    </main>
  )
}
export default Home
