import React from 'react'
// import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core"
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { NavLink} from 'react-router-dom'

import '../Header/Header.css'

const Header = () => {

    // const linkArr = ['home', 'diaries', 'auth']

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
            path: "account",
            display: "ACCOUNT"
        }
    ]



    return (
        <div className="navbar">
            <ModeOfTravelIcon sx={{ color: "black" }} />

            <div className="nav_items">
                <ul className='menu'>
                    {nav__links.map((nav, index) => (
                        <li className='nav__item' key={index}><NavLink to={nav.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{nav.display}</NavLink></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header