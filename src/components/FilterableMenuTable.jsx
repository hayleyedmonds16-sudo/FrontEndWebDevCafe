import SearchBar from './SearchBar';
import MenuTable from './MenuTable';
import { useState } from 'react';


const FilterableMenuTable = ({ items }) => {
    const [filterText, setFilterText] = useState('');   
    return (
        <div>
            <SearchBar 
            filterText={filterText}
            onFilterTextChange={setFilterText}
            />
            <MenuTable items={items} 
            filterText ={filterText}/>
        </div>
    );
}

export default FilterableMenuTable;