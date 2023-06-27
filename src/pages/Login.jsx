import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {HiUserCircle} from "react-icons/hi"
import Footer from "../components/Footer";
const Login = () => {
  return (
    <div>
      <div className="flex h-[80vh] justify-center items-center bg-slate-400">
        
        <div className="bg-gray-500 flex flex-col mt-6 gap-6  py-6  w-[70vw] justify-center  items-center rounded-2xl ">
        <HiUserCircle className=" text-8xl text-white" />
          <h2 className="uppercase font-bold text-white">Sign up</h2>

          <span className=" bg-white flex items-center rounded-[10px] ">
            <FaUserCircle className=" ml-2 text-xl text-gray-500" />
            <input type="text" placeholder="username" />
          </span>

          <span className=" bg-white flex items-center rounded-[10px]">
            <MdEmail className="ml-2 text-xl text-gray-500" />
            <input type="text" placeholder="E-mail" />
          </span>

          <span className=" bg-white flex items-center rounded-[10px]">
            <RiLockPasswordFill className="ml-2 text-xl text-gray-500 " />
            <input type="text" placeholder="Password" />
          </span>

          <span className=" bg-white flex items-center rounded-[10px]">
            <RiLockPasswordFill className="ml-2 text-xl text-gray-500" />
            <input type="text" placeholder="Confirm Password" />
          </span>

          <button className=" bg-cyan-500 py-2 px-4 rounded-3xl text-sm uppercase">
            Create Account
          </button>
          <p className="text-[0.7rem] text-white  ">
            Already have on account? Login here
          </p>
        </div>
        
      </div>
      <Footer />
      </div>
  );
};

export default Login;
