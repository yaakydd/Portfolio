// Navbar Component
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <div className="">iCr8</div>
      <ul className="flex space-x-4">
        <li className="flex text-sm">Home</li>
        <li className="flex text-sm">About</li>
        <li className="flex text-sm">Skills</li>
        <li className="flex text-sm">Projects</li>
        <li className="flex text-sm">Contact</li>
      </ul>
      <button className="flex text-sm bg-gray-800 text-white px-4 py-2 rounded-md ml-4">Resume</button>
    </nav>
  );
}

export default Navbar;