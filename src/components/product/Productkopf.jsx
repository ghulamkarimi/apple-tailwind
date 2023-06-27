import { AiFillApple } from "react-icons/ai";

const productkopf = () => {
  return (
    <div className="flex p-12 bg-slate-400 gap-12 ">
       <AiFillApple className=" text-8xl text-white " />
      <span className="w-[50vw]">
       
        <p className="text-5xl text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">APPLE PRODUCTS</p>

        <p className="text-white w-[50%]">
       { `  The new 15" MacBook Air with M2 chip, the new Mac Studio with M2 Max
          or M2 Ultra and the new Mac Pro with M2 Ultra.`}
        </p>
      </span>
    </div>
    
  );
};

export default productkopf;
