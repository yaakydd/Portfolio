import { ArrowUpRight } from "lucide-react"
const Footer = () => {
    return(
        <footer className="bg-[#272727] rounded-tl-[22px] rounded-tr-[22px] w-vh h-120 text-white py-2 text-center">
            <div className="flex justify-between py-5">
                <h1 className="text-5xl font-bold text-left ml-7 py-5 ">Let's <span className="text-[#3B82F6]">Connect</span></h1>
                <button className="bg-[#5483B3] mr-16 w-33 h-10 mt-7 flex justify-center items-center text-lg rounded-3xl cursor-pointer">Hire Me<ArrowUpRight size={20} strokeWidth={1.5} className="ml-1" /></button>
            </div>
            <hr className="border-white w-325 ml-7" />
            <div className="mt-2 py-15 flex items-center justify-center gap-25">
                <div className="line-height-">
                    <h1 className="text-left text-[#3B82F6]">Yaa Asantewaa</h1>
                    <p>Have an awesome project idea, let's discuss. <br /> 
                    <span className="">Fun Fact</span>
                    Data tells a story, I help it speak clearly
                    </p>
                </div>
                <div>
                    <h1>YAA</h1>
                    <p>Have an awesome project idea, let's discuss</p>
                </div>
                <div>
                    <h1>YAA</h1>
                    <p>Have an awesome project idea, let's discuss</p>
                </div>
            </div>
            <hr className="border-white w-325 ml-7"  />
        </footer>
    )
}
export default Footer