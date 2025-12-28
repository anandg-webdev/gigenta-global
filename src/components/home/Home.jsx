
import {
    Link
} from 'react-router-dom';

import Navbar from '../navbar/Navbar.jsx';

export default function Home(){
    return(
        <>
            <h2>
                Home Page
            </h2>
            
            <Navbar />
            
            
            <Link to='/contact-us'>contact</Link>
        </>
    )
}