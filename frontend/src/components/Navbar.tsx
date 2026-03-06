// Navbar Component
const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex text-lg ">MyApp</div>
      <ul className="flex text-lg">
        <li className="flex text-sm">Home</li>
        <li className="flex text-sm">About</li>
        <li className="flex text-sm">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;