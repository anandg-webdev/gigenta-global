import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Intro from './components/intro/Intro.jsx';

import Home from './components/home/Home.jsx';

import About from './components/about/About.jsx';

import Contact from './components/contact/Contact.jsx';





export default function App() {
    return (

        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Intro />} />

                <Route path='/home' element={<Home />} />

                <Route path='/about-us' element={<About />} />

                <Route path='/contact-us' element={<Contact />} />

            </Routes>
        </BrowserRouter>

    )
}