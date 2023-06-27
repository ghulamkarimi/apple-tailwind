import { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { AppContext } from "./Context";

const Searchbox = () => {
  const {filter,setFilter}=useContext(AppContext)
  return (
    <span className="bg-gray-700 flex items-center py-1 pl-2 pr-4 rounded-3xl max-md:hidden">
      <input className="rounded-3xl " type="text" placeholder="search here" value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
      <ImSearch className="ml-2 text-white" />
    </span>
  );
};

export default Searchbox;
