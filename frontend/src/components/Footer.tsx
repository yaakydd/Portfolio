import { ArrowUpRight } from "lucide-react"
const Footer = () => {
    return(
        <footer className="bg-[#272727] rounded-tl-[22px] rounded-tr-[22px] w-vh h-61 text-white py-2 text-center">
            <div className="flex justify-between py-5">
                <h1 className="text-5xl font-bold text-left ml-7 py-5 ">Let's <span className="text-[#3B82F6]">Connect</span></h1>
                <button className="bg-[#5483B3] mr-16 w-33 h-10 mt-5 flex justify-center items-center text-lg rounded-3xl">Hire Me<ArrowUpRight size={20} strokeWidth={1.5} className="ml-1" /></button>
            </div>
            <hr className="border-gray-600" />
            <div className="mt-2">
                <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
            </div>
            <hr className="border-gray-600" />
        </footer>
    )
}
export default Footer