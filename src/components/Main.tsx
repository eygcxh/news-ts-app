import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import StartPage from '../pages/Start'
import Articles from '../pages/Articles'
import Photos from '../pages/Photos'
import Sources from '../pages/Sources'
import Login from '../pages/Login'

function Main() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path='articles' element={<Articles />} />
          <Route path='photos' element={<Photos />} />
          <Route path='sources' element={<Sources />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main