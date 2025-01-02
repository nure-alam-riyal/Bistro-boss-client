import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer> 

        </div>
    );
};

export default MainLayOut;