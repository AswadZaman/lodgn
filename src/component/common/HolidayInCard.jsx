import React from 'react'
import logo from  "./../../assest/Vector 1.png"
import Button from './Button'

const HolidayInCard = ({heading, single, double, badge}) => {
  console.log({badge})
  return (
    <div>
      <div className="card-container">
        <div className="logo-blk">
            <img src={logo} alt="" />
            <h5 className='logo-description'>Holiday Inn</h5>
        </div>
        <div className="card">
            <h6 className='card-tag'>{heading} </h6>
            <div className="price-and-booknow">
                <h6 className='card-tag'>Single:{single}<span className='block'>Double:{double} </span> </h6>
          <Button name="Book now " height="40px" width="126px" fontSize=" 17.5894px" backgroundColor="#44A16F"/>
            </div>
            { (badge===true) ? <>  <div className="badge" > <Button name="Rare Find" height="40px" width="127px" fontSize="13.3512px" backgroundColor="#D96A6B"/></div></>:<></> }
         
        </div>
      </div>
    </div>
  )
}

export default HolidayInCard
