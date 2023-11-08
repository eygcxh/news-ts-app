import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

function Main() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main