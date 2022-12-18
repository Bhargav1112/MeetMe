import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import logo from "../images/logo.svg"
import avtar1 from "../images/users/avatar-1.jpg"

const Main = () => {
    return (
        <>
            <div className="layout-wrapper d-lg-flex">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Main