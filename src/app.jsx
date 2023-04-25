import { CookiesProvider, useCookies } from 'react-cookie'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import './main.css'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import { createContext } from 'react'

export const userContext = createContext({})

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  function handleLogin(newName) {
    console.log(newName)
    setCookie('user', newName, { path: '/' })
  }
  const handleLogout = () => {
    removeCookie('user')
  }
  return (
    <CookiesProvider>
      <userContext.Provider
        value={{
          user: cookies.user,
          handleLogin: handleLogin,
          handleLogout: handleLogout,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/*' exact element={<Home />} />
            <Route path='/sign-in' exact element={<SignIn />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </CookiesProvider>
  )
}

export default App
