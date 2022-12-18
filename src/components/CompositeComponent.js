import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../Utils'
import Sidebar from './Sidebar'

const CompositeComponent = () => {
  const { loggedIn } = isLoggedIn()
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