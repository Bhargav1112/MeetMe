import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import logo from "../../images/logo.svg"
import avtar1 from "../../images/users/avatar-1.jpg"

const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate("/", { replace: true })
  }
  return (
    <>
      <div className="side-menu flex-lg-column me-lg-1 ms-lg-0">
      
        {/* LOGO */}
        <div className="navbar-brand-box">
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="logo1" height={30} />
            </span>
          </a>
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src={logo} alt="logo1" height={30} />
            </span>
          </a>
        </div>
        {/* end navbar-brand-box */}
        {/* Start side-menu nav */}
        <div className="flex-lg-column my-auto">
          <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Profile">
              <NavLink className="nav-link" to="/profile">
                <i className="ri-user-2-line" />
              </NavLink>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Chats">
              <NavLink className="nav-link" to="/chat">
                <i className="ri-message-3-line" />
              </NavLink>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Groups">
              <NavLink className="nav-link" to="/group">
                <i className="ri-group-line" />
              </NavLink>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Contacts">
              <NavLink className="nav-link" to="/contact">
                <i className="ri-contacts-line" />
              </NavLink>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
              <NavLink className="nav-link" to="/setting">
                <i className="ri-settings-2-line" />
              </NavLink>
            </li>
            <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="assets/images/users/avatar-1.jpg" alt className="profile-user rounded-circle" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-end text-muted" /></a>
                <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-end text-muted" /></a>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/">Log out <i className="ri-logout-circle-r-line float-end text-muted" /></Link>
              </div>
            </li>
          </ul>
        </div>
        {/* end side-menu nav */}
        <div className="flex-lg-column d-none d-lg-block">
          <ul className="nav side-menu-nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link light-dark-mode" href="#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" title="Dark / Light Mode">
                <i className="ri-sun-line theme-mode-icon" />
              </a>
            </li>
            <li className="nav-item btn-group dropup profile-user-dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={avtar1} alt className="profile-user rounded-circle" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-end text-muted" /></a>
                <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-end text-muted" /></a>
                <div className="dropdown-divider" />
                {/* <Link className="dropdown-item" to="/">Log out <i className="ri-logout-circle-r-line float-end text-muted" /></Link> */}
                <button type='button' className="dropdown-item" onClick={handleLogout}>
                  Log out <i className="ri-logout-circle-r-line float-end text-muted" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar