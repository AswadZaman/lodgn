import React from 'react'
import TableHeading from '../common/TableHeading';
import HolidayInCard from '../common/HolidayInCard';
import { cardsData } from '../../constant/CardsData';
import chatIcon from "./../../assest/Frame (1).png"

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-main-container">
  <div className="dashboard-container">
  <h3 className='request-heading'>You currently  have {cardsData.length} requests</h3>
  </div>

 <div className="first-table">
    <div className="heading-table">
    <TableHeading/>
    </div>
    <div className="first-table-progressbar">
        <span className='recieved'>RECEIVED</span>
        <span className='nego'>NEGOTIATING</span>
        <span className='complete'>COMPLETED</span>



    </div>
 </div>

 <div className="second-table">
    <div className="second-table-heading-container">
    <TableHeading/>
    <div className="complete-progress">COMPLETED</div>
    </div>
    <div className="manage-cards">
    {
        cardsData?.map((item)=>{
            return( <HolidayInCard heading={item?.cardTag} single={item?.single} double={item?.double} badge={item?.rareFind} />)
        })
    }
    </div>
  <div className="chating"> <img className='chat-icon' src={chatIcon} alt="" /> </div>
 </div>

      </div>
    </>
  )
}

export default Dashboard
