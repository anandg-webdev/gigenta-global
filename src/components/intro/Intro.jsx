
import {
    Link
} from 'react-router-dom';


import "./Intro.css";

export default function Intro() {
    return (
        <div className="intro">
            <h1 className="intro-gigenta-global">
                GIGENTA Global
            </h1>

            <h2 className="intro-service">Educational Services</h2>

            <p className="intro-introduction">
                Gigenta Global is an educational service platform created with the aim of making education easy and equitable for everyone. Our primary goal is to help students, teachers, and educational institutions grow effectively through the use of technology.
            </p>
            
            <Link to='/home' className='intro-to-home-link'>Go...</Link>

            
        </div>


    )
}