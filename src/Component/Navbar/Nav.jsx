'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Nav = () => {
  const {user, logOut} = useAuth()
  const handleLogOut = () =>{
    logOut()
    .then(() => { })
    .catch(error => console.log(error));
  }
  console.log(user);
    return (
      <Navbar fluid rounded>
        <Navbar.Brand>
         
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Link to='/'>Os Task Mangement</Link>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user?.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
               <NavLink to='/dashboard'> <Dropdown.Item>Dashboard</Dropdown.Item></NavLink>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}> Sign out</Dropdown.Item>
                {/* <button onClick={handleLogOut} className="btn btn-ghost bg-transparent text-blue-800">LogOut</button> */}
              </Dropdown>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}

          <Navbar.Toggle />
        </div>

        
        <Navbar.Collapse>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/condact-us">Condact us</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Navbar.Collapse>
      
       
      </Navbar>
      
    );
};

export default Nav;