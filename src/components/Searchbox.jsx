import { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { AppContext } from "./Context";
 
const Searchbox = () => {
  const {filter,setFilter}=useContext(AppContext)
  return (
    <div className="flex justify-center py-5">

 
    <span className="bg-gray-700 flex w-[280px] items-center  py-1 pl-1 rounded-3xl">
      <input className="rounded-2xl w-[250px] " type="text" placeholder="search here" value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
      <ImSearch className="ml-1 text-white" />
    </span>
    </div>
  );
};

export default Searchbox;
