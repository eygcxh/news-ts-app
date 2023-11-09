import { Link } from "react-router-dom"

function Footer() {

  return (
    <footer className="flex flex-col justify-center items-center gap-4 bg-gray-800 py-3 px-20 mt-auto">  
      <div className="flex flex-row gap-5 text-white">
        <Link to='' className="hover:text-gray-300">Politics</Link>
        <Link to='' className="hover:text-gray-300">Sports</Link>
        <Link to='' className="hover:text-gray-300">Weather</Link>
        <Link to='' className="hover:text-gray-300">Economics</Link>
        <Link to='' className="hover:text-gray-300">Science</Link>
      </div>
      <div className="flex flex-row gap-5 text-gray-500">
        <Link to="" className="hover:text-gray-300">Contacts</Link>
        <Link to="" className="hover:text-gray-300">About</Link>
      </div>
      <div className="text-xs text-white">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, numquam?</p>
      </div>
    </footer>  
  )
}

export default Footer