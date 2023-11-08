import { Link } from "react-router-dom"
import { ImUser } from "react-icons/im"
import { TfiAlignJustify } from "react-icons/tfi"
import { useState } from "react"
import { useSpring, animated } from 'react-spring'


function Header () {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const menuAnimation = useSpring({
    opacity: showMenu ? 1 : 0,
    transform: showMenu ? 'translateY(0%)' : 'translateY(-10%)',
  })

  const handleShowMenu = () => setShowMenu(!showMenu)

  return (
    <header className="flex justify-between p-10 bg-red-300 relative select-none">
    <Link to='/' className="text-3xl">World News</Link>
    <nav className="flex items-center">
      <div onClick={handleShowMenu} className="cursor-pointer flex flex-col absolute top-12 right-10">
        <TfiAlignJustify className="text-xl" />
      </div>
      {showMenu && (
        <animated.div style={menuAnimation} className="flex flex-col gap-3 absolute rounded-lg top-20 right-10 bg-red-400 px-8 py-9">
          <Link to='/articles'className="text-xl hover:text-gray-500">Articles</Link>
          <Link to='/photos'className="text-xl hover:text-gray-500">Photos</Link>
          <Link to='/sources'className="text-xl hover:text-gray-500">Sources</Link>
          <Link to='/login'className="text-xl hover:text-gray-500 w-full">
            <ImUser />
          </Link>
        </animated.div>
      )}
    </nav>
 </header>
  )
}

export default Header