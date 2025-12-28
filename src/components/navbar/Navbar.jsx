import {
    TiThMenuOutline
} from "react-icons/ti";


import './Navbar.css';

export default function Navbar() {
    return(<>
        <nav className='navbar'>
            <div className='nav-cont'>
                <div className='nav-title-cont'>
                    <div className='nav-title-first-letter-box'>
                        <h1 className='nav-title-first-letter'>G</h1>
                    </div>
                    <div className='nav-title-second-word-boxes'>
                        <div className='nav-title-second-word-box1'>
                            <h4>IGENTA</h4>
                        </div>
                        <div className='nav-title-second-word-box2'>
                            <h4>LOBAL</h4>
                        </div>
                    </div>
                </div>

                <div className='nav-menu-cont'>
                    
                    <button className='nav-menu-icon'>
                        <TiThMenuOutline />
                    </button>
                    <ul className='nav-menus'>

                    </ul>
                </div>



            </div>

        </nav>
    </>
    )
}