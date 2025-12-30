import {
    TiThMenuOutline
} from "react-icons/ti";

import {
    ImCross
} from "react-icons/im";

import {
    useState
} from 'react';


import './Navbar.css';

export default function Navbar() {

    const [menu,
        setMenu] = useState(false);

    const showMenu = <TiThMenuOutline />
    const hideMenu = <ImCross />

    const [menuOption,
        setMenuOption] = useState(showMenu);

    const handleMenu = () => {
        !menu?setMenuOption(hideMenu): setMenuOption(showMenu);





        setMenu(!menu);
    }

    return(<>
        <nav className='navbar'>
            <div className='nav-cont'>

                <div className='nav-title-and-menu-icon'>

                    <div className='nav-title-cont'>

                        <div className='nav-title-first-letter-box'>
                            <h1 className='nav-title-first-letter'>G</h1>
                        </div>

                        <div className='nav-title-second-word-boxes'>
                            <div className='nav-title-second-word-box1 nav-title-second-word-box'>
                                <h4>IGENTA</h4>
                            </div>
                            <div className='nav-title-second-word-box2 nav-title-second-word-box'>
                                <h4>LOBAL</h4>
                            </div>
                        </div>

                    </div>





                    <div className='nav-menu-cont'>

                        <button className='nav-menu-icon' onClick={handleMenu}>
                            {menuOption}
                        </button>

                    </div>




                </div>


                <div className='nav-menu-list'>

                    <ul className={`nav-menus ${!menu?'show': ''}`}>

                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Solutions</li>
                        <li>Institutions</li>
                        <li>Students</li>
                        <li>Teachers</li>
                        <li>Contact Us</li>
                    </ul>


                </div>

            </div>

        </nav>

    </>
    )
}