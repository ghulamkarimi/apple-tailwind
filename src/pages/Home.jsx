import Footer from "../components/Footer"
import Bottom from "../components/home/Bottom"
import Hero from "../components/home/Hero"
import Kopfhome from "../components/home/Kopfhome"

 

 
 
 const Home = () => {
   return (
     <div className=" px-[5vw] pt-2  bg-slate-400 ">
     <Hero />
      <Kopfhome /> 
      <Bottom />
     <Footer />
 
     </div>
   )
 }
 
 export default Home
 
