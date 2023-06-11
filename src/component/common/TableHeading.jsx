import React from 'react'

const TableHeading = () => {
  return (
    <div>
      <div className="table-headingcontainer">
        <div className="sigle-heading">
            <h3 className='table-heading'> St Judes Hospital  </h3>
            <div className='heading-description'>Sarasota,FL. 33178</div>
        </div>
        <div className="sigle-heading">
            <h3 className='table-heading'> 10   <span className='date-padding'>-</span> 17 </h3>
            <div className='heading-description'>October  <span className='date-padding'></span> December</div>
            
        </div>
       
        <div className="sigle-heading">
            <h3 className='table-heading'> 20 Rooms  </h3>
            <div className='heading-description'>10 Singles, 10 doubles</div>
        </div>
      </div>
    </div>
  )
}

export default TableHeading
