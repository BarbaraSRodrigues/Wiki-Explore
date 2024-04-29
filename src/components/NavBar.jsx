import './NavBar.css';

import SwitchModeResult from './SwitchModeResult';

const NavBar = () => {
  return (
    <div className='nav-bar-group'>
        <nav className="nav-bar">
            <ul className="nav-bar-list">
                <li className="nav-bar-item nav-bar-logo">
                    <span className='gradient-text wiki'>Wiki</span> explorer
                </li>
                <li className="nav-bar-item nav-bar-switch">
                  <SwitchModeResult></SwitchModeResult>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;
