
"use client";

import { Button, Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { doSignOut } from "../firebase/auth";
import styles from "../App.module.css"

export function NavBar() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  
  return (
    <>
    <Navbar fluid rounded>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Task Manager</span>
      
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={'/'} active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to={'/about'}>About</Navbar.Link>
        {userLoggedIn ?  
        <Navbar.Link as={Link} to={'/logout'}>Logout</Navbar.Link>
        :
        <>
        <Navbar.Link as={Link} to={'/login'}>Login</Navbar.Link>
        <Navbar.Link as={Link} to={'/register'}>Register</Navbar.Link>
        </>
        }
        
        <Navbar.Link as={Link} to={'/task/create'}>Create task</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
    
  );
}
