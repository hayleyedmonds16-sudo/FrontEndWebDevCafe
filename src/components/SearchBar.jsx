import { useState } from "react";

const SearchBar=({filterText, onFilterTextChange})=>{
    return(
        <div style={{ margin: '5px', padding: '5px'}}>
         <form>
            <input type="text" 
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
            placeholder="Search..." 
            />
         </form>
         </div>  
    );
}
export default SearchBar;