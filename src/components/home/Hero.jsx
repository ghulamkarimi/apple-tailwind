import { NavLink } from "react-router-dom";
import air15 from "../../assets/images/air15.jpeg";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <p className="text-center text-white">
        Get a credit of €220 to €735 towards the purchase of an iPhone 14 or
        iPhone 14 Pro when you trade in an iPhone 11 or later.
      </p>
      <nav className="flex flex-col">
        <NavLink
          className="text-white text-center text-6xl mt-10 "
          to="https://www.apple.com/de/"
        >
          Mackbook Air 15
        </NavLink>
        <NavLink
          className="text-center text-white text-3xl pt-2  "
          to="https://www.apple.com/de/"
        >
          Unbelievably big.Incredibly thin.
        </NavLink>
        <NavLink
          className=" text-center text-white text-2xl pt-4  "
          to="https://www.apple.com/de/"
        >
          Available from 13.6.
        </NavLink>
        <span className="flex gap-10 justify-center pt-4 text-2xl text-blue-600  ">
          <NavLink className=" " to="https://www.apple.com/de/">
            More Iformation{" > "}
          </NavLink>
          <NavLink to="https://www.apple.com/de/">Order Now{" > "}</NavLink>
        </span>
      </nav>
      <img className=" pt-8 h-[40vw] rounded-3xl" src={air15} alt="" />
    </div>
  );
};

export default Hero;
