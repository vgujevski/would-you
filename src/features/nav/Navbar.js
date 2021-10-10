import React from 'react'
import { NavLink } from 'react-router-dom'
import { AuthButton } from '../auth/AuthButton'

export const Navbar = () => {

  return (
    <div className="navbar">
      <div className="content-container">
        <div className="nav-container">
          <div>
            <NavLink exact activeClassName="link-active" className="button" to="/">Home</NavLink>
            <NavLink style={{ marginLeft: "2rem" }} exact activeClassName="link-active" className="button" to="/new">New Poll</NavLink>
            <NavLink style={{ marginLeft: "2rem" }} exact activeClassName="link-active" className="button" to="/leaderboard">Leader Board</NavLink>
          </div>
          <AuthButton />
        </div>
      </div>
    </div>
  )
}