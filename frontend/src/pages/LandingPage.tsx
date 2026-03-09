import Navbar from "../components/Navbar";
const LandingPage = () => {

    return (
        <>
        <Navbar />
<div className="relative flex flex-col items-center justify-end w-full h-125 overflow-hidden">
      
      {/* 1. The Blue Semi-Circle */}
      {/* We use w-[600px] and h-[300px] with rounded-t-full to create the curve */}
      <div className="absolute bottom-0 w-150 h-75 bg-[#5483B3] rounded-t-full z-0"></div>

      {/* 2. The Image (Layered on top) */}
      <img 
        src="/yaa-portrait.png" 
        alt="Yaa, Data Scientist" 
        className="relative z-10 h-112.5 object-contain" 
      />
    </div>
        </>
        

    );
}
export default LandingPage;