import React from 'react'
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'
import { useSelector } from 'react-redux';

const Header = () => {
    const isloggedIn = useSelector(state=> state.isloggedIn)

    const nav__links = [
        {
            path: "home",
            display: "HOME"
        },
        {
            path: "diaries",
            display: "DIARIES"
        },
        {
            path: "login",
            display: "ACCOUNT"
        }
    ]

    const loggedIn__Links = [
        {
            path: "home",
            display: "HOME"
        },
        {
            path: "diaries",
            display: "DIARIES"
        },
        {
            path: "add",
            display: "ADD POST"
        },
        {
            path: "profile",
            display: "PROFILE"
        },
    ]




    return (
        <div className="navbar">
            <ModeOfTravelIcon sx={{ color: "black" }} />

            <div className="nav_items">
                <ul className='menu'>

                    {
                        isloggedIn ?

                            loggedIn__Links.map((nav, index) => (
                                <li className='nav__item' key={index}>
                                    <NavLink to={nav.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                        {nav.display}
                                    </NavLink>
                                </li>))
                            :
                            nav__links.map((nav, index) => (
                                <li className='nav__item' key={index}>
                                    <NavLink to={nav.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                        {nav.display}
                                    </NavLink>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header