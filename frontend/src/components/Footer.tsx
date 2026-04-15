import { ArrowUpRight, SendHorizonal } from "lucide-react"
const Footer = () => {
    return(
        <footer className="bg-[#272727] rounded-tl-[30px] rounded-tr-[30px] w-330 ml-6 h-100 text-white py-2 text-center">
            <div className="flex justify-between py-4">
                <h1 className="text-5xl font-bold text-left ml-10 py-3 ">Let's <span className="text-[#3B82F6]">Connect</span></h1>
                <button className="bg-[#5483B3] mr-16 w-33 h-10 mt-7 flex justify-center items-center text-lg rounded-3xl cursor-pointer">Hire Me<ArrowUpRight size={20} strokeWidth={1.5} className="ml-1" /></button>
            </div>
            <hr className="border-white w-290 ml-21" />
            <div className="mt-2 py-8 flex items-center justify-center gap-27">
                <div className="leading-8 inline-block">
                    <h1 className="text-left font-bold text-[#5483B3]"><i className="text-[17px]">Great Things Begin Very Little</i></h1>
                    <p className="font-semibold text-[17px]">Have an awesome project idea, let's discuss. <br /> 
                    <span className="text-purple-500 mr-2 font-normal text-[17px]">"Fun Fact" : Data tells a story, I help it speak clearly</span> 
                    </p>
                </div>
                <div className="text-left leading-10">
                    <h1 className="text-[20px] text-[#5483B3] font-bold">Contact</h1>
                    <p>0546 345 107</p>
                    <a href="mailto:antwiyaa17@gmail.com">antwiyaa17@gmail.com</a>
                </div>
                <div className="block text-left mb-11 ">
                    <h1 className="text-[#5483B3] text-[20px] font-bold  ">Get the latest information</h1>
                    <input type="email" placeholder="Email Address"  className="mt-3 p-4 outline-0 rounded-tl-[12.44px] text-black border-none bg-white border-white rounded-bl-[12.44px] h-10"  /><SendHorizonal/>
                </div>
            </div>
            <hr className="border-white w-290 ml-21 "  />
        </footer>
    )
}
export default Footer