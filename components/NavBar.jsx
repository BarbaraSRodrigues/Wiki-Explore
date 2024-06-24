import './NavBar.css';

import SwitchModeIndex from './SwitchModeIndex';

const NavBar = () => {
  return (
    <div className='nav-bar-group'>
        <nav className="nav-bar">
            <ul className="nav-bar-list">
                <li className="nav-bar-item nav-bar-logo">
                    <span className='gradient-text wiki'>Wiki</span> explorer
                </li>
                <li className="nav-bar-item nav-bar-switch">
                  <SwitchModeIndex isNavBar={true}></SwitchModeIndex>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;
