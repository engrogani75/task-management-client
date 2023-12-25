import React from 'react';
import Home from '../Pages/Home/Home';
import '../Pages/Home/style.css'
import Nav from '../Component/Navbar/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/FooterBar';
import FooterBar from '../Pages/Footer/FooterBar';

const Layout = () => {
    return (
      
           <>
            <Nav></Nav>
            <Outlet></Outlet>
            <FooterBar></FooterBar>
           
            </>

      
    );
};

export default Layout;