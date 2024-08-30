import React from 'react'; 
import HamburgerMenu from '../Hamburger';
import LineChart from '../LineChart';
import './dashboard.css';
import PieChart from '../PieChart'

const Dashboard = () => (
    <div className='container'>
        <HamburgerMenu />
        <LineChart />
        <PieChart />
    </div>
);

export default Dashboard;
