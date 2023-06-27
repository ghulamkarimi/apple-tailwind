
import aboutone from "../assets/images/aboutone.jpeg"
import abouttwo from "../assets/images/abouttwo.jpeg"
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="  bg-slate-400   pt-10 ">
      <div className="w-[90vw] flex flex-col text-center justify-center text-white gap-6">
        <h3 className="text-4xl">Apple at Work</h3>
        <p className="text-6xl">For two.</p>
        <p className=" text-6xl">to thousands.</p>
        <p className="text-6xl">collaborate.</p>
        <p className="text-4xl flex justify-center pl-12 pr-12 mt-6   ">
          Apple hardware, software, and services work seamlessly together to
          give you and your team the power and flexibility to get the job
          done—big and small.
        </p>
      </div>

<section className="pt-20 flex flex-wrap justify-center gap-6">
  <img className=" rounded-[46px]" src={aboutone} alt="" />
  <img className="rounded-[46px]" src={abouttwo} alt="" />
</section>

<span className="flex flex-col gap-5 mt-7 mb-5 text-white ">
<h3 className="text-6xl text-center">Apple at Work</h3>
<p className="text-4xl text-center">Talk to Apple experts to find the best solution for your business.</p>
</span>
 <Footer />

    </div>
  );
};

export default About;
