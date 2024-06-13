import React from 'react'
import './index.css'

const DestinationItem = ({destinationDetails}) => {
    
    const {name, imgUrl} = destinationDetails
  return (
    <div className="destination-item">
        <img src={imgUrl} className='img' alt='' />
        <h1>{name}</h1>
    </div>
  )
}

export default DestinationItem 