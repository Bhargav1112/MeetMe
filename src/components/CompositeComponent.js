import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../Utils'
import Sidebar from './Sidebar'

const CompositeComponent = () => {
  const { loggedIn } = isLoggedIn()
  const navigate = useNavigate()

  const location = useLocation()
console.log("location", location.pathname);
  useEffect(() => {
    if(loggedIn && location.pathname === "/"){
      navigate("/chat")
    }
  }, [loggedIn, navigate, location])

  if (loggedIn) {
    return (
      <div className="layout-wrapper d-lg-flex">
        <Sidebar />
        <Outlet />
      </div>
    )
  }
  return (
    <Navigate to={"/login"} />
  )
}

export default CompositeComponent