import React from 'react'
import "./Sidebar.css"
import { PanelSidebar } from '../constant/panelSidebar'
import { Link } from 'react-router-dom'
import Button from '../component/common/Button'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <h5 className='sidebar-heading'>LODGN</h5>
    
       <div className="inner">
      
            {
              PanelSidebar?.map((item) => {
                return (
                  <>
                      <div className='link-container'>          
                   
                    <Link className={item.active?" sidebar-item-active ":'sidebar-item' } to={item.route}>{item.name}</Link>
                                      
                    </div>    
                    <div className="sidebar-item-bottom"></div>
                    </>  
                )
              })
            }
    
          </div>
          <div className="sidebar-button-container">
            <Button name ="Log-Out" height="70px" width="215px" fontSize=" 22px" backgroundColor="#44A16F" />
          </div>
<div className="contact-info">
  <h5 className='contact-heading text-alighn-center'>Help-Desk:</h5>
  <h6 className='contact-number text-alighn-center'>786-874 9988</h6>
</div>
    </div>
  )
}

export default Sidebar
