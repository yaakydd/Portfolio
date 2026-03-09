// Navbar Component
import { menuItems } from "../utils/menuItems";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  ml-23 mt-5 p-3 bg-gray-900 rounded-4xl w-288.5 h-13">
     <div className="flex items-center ">
        <ul className="flex justify-around gap-5 text-sm text-white">
        {menuItems.map(menu =>
        <li key={menu.id} className="hover:bg-[#5483b3] hover:font-bold font-inter px-8 py-2.5 rounded-3xl ">
          <a href={menu.link}>{menu.name}</a>
        </li>
        )}
        </ul>
     </div>
      <button className="text-sm bg-[#5483b3] text-white px-4 py-2 rounded-3xl h-10 font-bold ">Download CV</button>
    </nav>
    
  );
}

export default Navbar;