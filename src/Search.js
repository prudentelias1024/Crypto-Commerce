import {FaSearch} from 'react-icons/fa'
import { useContext } from "react";
import { SearchContextAPI } from "./Contexts/SearchContextAPI";
const Search = () => {
   const {setSearch} = useContext(SearchContextAPI)
 return(
   // Here we are gonna make an API request and get all search
<div className="products">
        <div className="search__products w-full flex flex-row-reverse -ml-3">
         <input
         onChange={(event) => {setSearch(null)}}
          type="text"
           name="product"
            className="search__input font-[Mulish] py-[1em] px-[1.5em] rounded-md w-full" 
            placeholder=" Search For Products"/>
         <FaSearch className='text-3xl text-[#dfdfdf] relative left-[1.5em] top-[.5em]'/>
        </div>
    </div>
 );
}
export default Search;