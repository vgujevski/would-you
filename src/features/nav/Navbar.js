import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../auth/authSlice'
import { selectAuthedUser } from '../auth/authSlice'
import { selectUserById } from '../users/usersSlice'

export const Navbar = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const authedUser = useSelector(selectAuthedUser)
  const { name } = useSelector(state => selectUserById(state, authedUser))

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

          <div className="user-container">
            <h3>{name}</h3>
            <button className="button" onClick={handleLogout}>Logout</button>
          </div>

        </div>
      </div>
    </div>
  )
}