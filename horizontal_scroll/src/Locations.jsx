import React from 'react'

const Locations = ({index, title, setModal}) => {
  return (
    <div onMouseEnter={() => {setModal({active: true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}}>
      <h1>{title}</h1>
    </div>
  )
}

export default Locations
