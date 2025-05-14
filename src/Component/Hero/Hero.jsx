import Model from "../../Pages/Model"
const Hero =()=>{
    return(<>
   <div className="bg-black h-screen  pt-11 pb-10">
    <div>
    <h1 className="bg-clip-text text-transparent text-center text-7xl font-bold"   style={{
    backgroundImage:
      "linear-gradient(180deg, rgba(159, 172, 179, 1), rgba(240, 240, 240, 1))"
  }}>HI, WELCOME ABDUL REHMAN</h1>
   </div>
 <div className="absolute top-10 left-1/2 transform -translate-x-1/2"><Model/></div>
   <div className="flex justify-between px-40 py-20">
    <div className=""><p className="text-white w-[38%] uppercase text-md tracking-wide">We're excited to have you on the team. Let’s do great things together! 😍</p></div>
    <div><button className="bg-gradient-to-r from-[#F54B64] to-[#F78361] rounded-full text-white border px-6 py-2 uppercase tracking-wide font-bold border-white  rotate-[-5deg]">New Projects +</button></div>
   </div>
    </div>
    </>)
}
export default Hero;