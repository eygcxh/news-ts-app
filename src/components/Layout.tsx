import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

function Layout() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="felx-1">
        <Outlet />
      </main>
      <Footer />  
    </div>
  )
}

export default Layout