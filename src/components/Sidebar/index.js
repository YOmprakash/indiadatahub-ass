import {useState} from 'react'
import { IoMdSearch,IoIosHelpCircleOutline ,IoMdCalendar} from "react-icons/io";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlineDesktopWindows,MdHeadphones } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";
import './index.css'
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className='sidebar-container'>
    <div className='top-sidebar'>
   
    <button onClick={() => setIsOpen(!isOpen)} className='btn'>

    <img src='https://yt3.ggpht.com/MfJtUnuhUgD0L6HgjUAQugnq9pBXr0t7Xo4LlUvAggkvYF05ulY17YdG_-XGCvKKH71FzNyw2Hg=s68-c-k-c0x00ffffff-no-rj'
     alt='logo' className='logo'/>
    </button>
   
   
     <div className='side-links-icons'>
<div className='icon-card'>
    <IoMdSearch className='icon'  color='#606060' size={24} />
    <span>Search</span>
</div>
<div className='icon-card'>
    <MdOutlineDesktopWindows className='icon'  color='#606060' size={24} />
    <span>Analytics</span>
</div>
<div className='icon-card'>
    <IoIosHelpCircleOutline className='icon'  color='#606060' size={24} />
    <span>Insights</span>
</div>
<div className='icon-card'>
    <IoMdCalendar className='icon'  color='#606060' size={24} />
    <span>Calendar</span>
</div>
<div className='icon-card'>
    <CgOrganisation className='icon'  color='#606060' size={24} />
    <span>Organization</span>
</div>
<div className='icon-card'>
    <BiSolidDollarCircle className='icon'  color='#606060' size={24} />
    <span>Pricing</span>
</div>
<div className='icon-card'>
    <MdHeadphones className='icon'  color='#606060' size={24} />
    <span>DataSpot</span>
</div>
     </div>
    </div>
    <div className='icon-card'>
    <IoSettingsSharp color='#606060' size={24} />
    <span>Settings</span>
    </div>
    
    </div>
    </div>
  )
}
