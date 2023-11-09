import { Link } from "react-router-dom"
import { ImUser } from "react-icons/im"
import { FiAlignJustify,FiX } from "react-icons/fi"
import { useState } from "react"

function Header () {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleShowMenu = () => setShowMenu(!showMenu)


  return (
    <div>
      <header className="flex justify-between p-10 bg-red-300">
        <Link to="/" className="text-3xl">World News</Link>
        <div onClick={handleShowMenu} className="cursor-pointer text-xl flex items-center">
            {!showMenu && <FiAlignJustify />}
        </div>
      </header>
      <nav>
        <div>
          {showMenu && (
            <div className={`flex flex-col gap-4 bg-red-400 top-0 right-0 min-h-screen px-8 py-10 absolute transform transition duration-500 ${showMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div onClick={handleShowMenu} className="cursor-pointer text-xl">
                <FiX />
              </div>
              <Link to="/articles" className="text-xl hover:text-gray-500">Articles</Link>
              <Link to="/photos" className="text-xl hover:text-gray-500">Photos</Link>
              <Link to="/sources" className="text-xl hover:text-gray-500">Sources</Link>
              <Link to="/login" className="text-xl flex justify-center hover:text-gray-500">
                <ImUser />
                Login
              </Link>
            </div>
          )}
        </div>  
      </nav>
    </div>  
  )
}

export default Header