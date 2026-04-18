import { ArrowUpRight, SendHorizonal,Copyright } from "lucide-react"
const Footer = () => {
    return(
        <footer className="bg-[#272727] rounded-tl-[30px] rounded-tr-[30px] w-auto h-100 text-white py-4 text-center">
            <div className="flex justify-between py-3">
                <h1 className="text-5xl font-bold text-left ml-10 py-4 ">Let's <span className="text-[#3B82F6]">Connect</span></h1>
                <button className="bg-[#5483B3] mr-16 w-33 h-10 mt-7 flex justify-center items-center text-lg rounded-3xl cursor-pointer">Hire Me<ArrowUpRight size={20} strokeWidth={1.5} className="ml-1" /></button>
            </div>
            <hr className="border-white w-290 ml-21" />
            <div className="mt-2 py-6 flex items-center justify-center gap-27">
                <div className="leading-8 inline-block">
                    <h1 className="text-left font-bold text-[#5483B3]"><i className="text-[17px]">Great Things Begin Very Little</i></h1>
                    <p className="font-semibold text-[17px]">Have an awesome project idea, let's discuss. <br /> 
                    <span className="text-[#3BE6FC] mr-2 font-normal text-[17px]">"Fun Fact" : Data tells a story, I help it speak clearly</span> 
                    </p>
                </div>
                <div className="text-left leading-10">
                    <h1 className="text-[20px] text-[#5483B3] font-bold">Contact</h1>
                    <p>0546 345 107</p>
                    <a href="mailto:antwiyaa17@gmail.com" className="cursor-pointer">antwiyaa17@gmail.com</a>
                </div>
                <div className="block text-left mb-11 ">
                    <h1 className="text-[#5483B3] text-[20px] font-bold  ">Get the latest information</h1>
                    <input type="email" placeholder="Email Address"  className="mt-3 p-4 outline-0 rounded-tl-[12.44px] text-black border-none bg-white border-white rounded-bl-[12.44px] w-60 h-10"  />
                    <div className="bg-[#5483B3] cursor-pointer h-10 float-right mt-3 w-10 rounded-tr-[12.44px] rounded-br-[12.44px]">
                        <button className="cursor-pointer"><SendHorizonal className="mt-2 ml-2"/></button>
                    </div>
                    
                </div>
            </div>
            <hr className="border-white w-290 ml-21 "  />
            <div className="inline-block  py-0">
                <p className="flex align-middle mt-7 font-light">Copyright <Copyright className="ml-0.5 mr-0.5 font-light" /> 2026 Yaa'sPortfolio. All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer