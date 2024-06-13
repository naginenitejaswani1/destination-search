import React, { useState } from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = ({destinations}) => {


    const[searchInput, setSearchInput] = useState('');

    const handleSearch = (event) =>{
        setSearchInput(event.target.value);
    }

    
    const searchResults = destinations.filter((eachItem) => eachItem.name.toLowerCase().includes(searchInput.toLowerCase()))
        
    

  return (
    <div className='main'>
        <h1>Destination Search</h1>
        <form>
            <input onChange={handleSearch} value={searchInput} type='search' />
        </form>
        <div className='destination-grid'>
            {searchResults.map((eachItem) => <DestinationItem key={eachItem.id} destinationDetails={eachItem} />)}
        </div>
        
    </div>
  )
}

export default DestinationSearch 