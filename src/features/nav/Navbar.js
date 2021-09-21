import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../auth/authSlice'

export const Navbar = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    history.push("/login")
  }

  return (
    <div className="navbar">
      <div className="content-container">
        <div className="nav-container">
          <div>
            <NavLink exact activeClassName="link-active" className="button" to="/">Home</NavLink>
            <NavLink style={{ marginLeft: "2rem" }} exact activeClassName="link-active" className="button" to="/new">New Poll</NavLink>
            <NavLink style={{ marginLeft: "2rem" }} exact activeClassName="link-active" className="button" to="/leaderboard">leaderboard</NavLink>
          </div>
          <button className="button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}