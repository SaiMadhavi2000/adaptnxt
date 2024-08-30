import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HamburgerMenu from './components/Hamburger';
import Dashboard from './components/Dashboard';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HamburgerMenu />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
