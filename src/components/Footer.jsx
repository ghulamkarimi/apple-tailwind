import { AiFillApple } from "react-icons/ai";
import FooterApple from "../assets/images/FooterApple.png";
import footone from "../assets/images/footone.jpeg";
import foottwo from "../assets/images/foottwo.jpeg";
import footthree from "../assets/images/footthree.jpeg";
import footfour from "../assets/images/footfour.jpeg";

const Footer = () => {
  return (
      <div className="flex justify-center pt-6 bg-slate-400 ">
        <div className=" footer-container bg-gradient-to-r from-cyan-500 to-blue-500  w-[90vw] rounded-2xl p-2 ">
          <span className="flex p-6 gap-6 justify-center">
            <AiFillApple className="  text-4xl text-pink-400 font-cursive" />
          </span>
          <section className="flex gap-3 justify-center">
            <img className="w-[10vw] h[60px]" src={footone} alt="" />
            <img className="w-[10vw]" src={foottwo} alt="" />
            <img className="w-[10vw]" src={footthree} alt="" />
            <img className="w-[10vw]" src={footfour} alt="" />
          </section>
          <span className="flex justify-center pt-6">
            <img className="w-[15vw]" src={FooterApple} alt="" />
          </span>

          <div className='links flex justify-around flex-wrap gap-4 w-[100%] pt-8 leading-7'>
            <div className="flex flex-col">
              <p>shoping an more</p>
              <a href="">store</a>
              <a href="">Mac</a>
              <a href="">ipad</a>
              <a href="">iphone</a>
            </div>
            <div className="flex flex-col">
              <p>Entertainement</p>
              <a href="">Apple one</a>
              <a href="">AppleTV+</a>
              <a href="">AppleMusic</a>
              <a href="">Apple Books</a>
            </div>
            <div className="flex flex-col">
              <p>Apple Store</p>
              <a href="">find store</a>
              <a href="">genius bar</a>
              <a href="">today at apple</a>
              <a href="">financing</a>
            </div>
            <div className="flex flex-col">
              <p>Apple Values</p>
              <a href="">Accebility</a>
              <a href="">Education</a>
              <a href="">sustainbility</a>
              <a href="">data potection</a>
            </div>
            <div className="flex flex-col">
              <p>About Apple</p>
              <a href="">newsroom</a>
              <a href="">Job Offers</a>
              <a href="">Events</a>
              <a href="">Apple content</a>
            </div>




          </div>
        </div>
      </div>
  );
};

export default Footer;
