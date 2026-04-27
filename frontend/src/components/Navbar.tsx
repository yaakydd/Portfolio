// Navbar Component
import { menuItems } from "../utils/menuItems";
import { Download } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="box-border flex items-center justify-between  ml-23 mt-3 p-3 bg-gray-900 rounded-4xl w-288.5 h-13">
     <div className="flex items-center ">
        <ul className="flex justify-around gap-5 text-sm text-white">
        {menuItems.map(menu =>
        <li key={menu.id} className="hover:bg-[#5483b3] hover:font-bold hover:cursor-pointer font-inter px-8 py-2.5 rounded-3xl ">
          <a href={menu.link}>{menu.name}</a>
        </li>
        )}
        </ul>
     </div>
    <button className="flex items-center gap-2 text-sm bg-[#5483b3] cursor-pointer text-white px-6 py-2 rounded-3xl h-11 font-bold font-inter hover:bg-[#3d6a96] shadow-sm ">
    <span >Download CV</span>
    <Download 
      size={18} 
      strokeWidth={2.5} 
      className="shrink-0" 
    />
    </button>
    </nav>
    
  );
}

export default Navbar;