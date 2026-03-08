// Navbar Component
import { menuItems } from "../utils/menuItems";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ml-13 mt-7 p-3 bg-gray-700 rounded-3xl w-[1153.78px] h-[52]">
     <div className="flex items-center ">
        <ul className="flex justify-around gap-5">
        {menuItems.map(menu =>
        <li key={menu.id}>
          <a href="{menu.link}">{menu.name}</a>
        </li>
        )}
        </ul>
     </div>
      <button className="flex text-sm bg-gray-800 text-white px-4 py-2 rounded-md ml-4">Resume</button>
    </nav>
    
  );
}

export default Navbar;