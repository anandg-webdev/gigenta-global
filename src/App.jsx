import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Intro from './components/intro/Intro.jsx';


import Home from './components/home/Home.jsx';





export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Intro />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>

    )
}