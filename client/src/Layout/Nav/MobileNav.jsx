import React, {useState} from 'react'
import "./MobileNav.css"
import { Link } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import { SidebarData } from './SidebarData';

export default function NavLinks() {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="navbar">

          <Link to="#" className="menu-bars">
            <MenuIcon onClick={showSidebar} />
          </Link>

        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <div className="navbar-toggle">
              
            
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          </div>
          </ul>
        </nav>
    </div>
  )
}
