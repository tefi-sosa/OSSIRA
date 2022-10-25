import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classes from './User.module.css'
import { authActions } from '../../store/authSlice'

const User = () => {

  const styleActiveLink = ({ isActive }) => {
    return {
        color: isActive ? '#f57145' : ''
    }
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className={`container ${classes.user}`}>
      <nav className={classes.user_nav}>
          <li>
              <NavLink style={styleActiveLink} to='profile'>PROFILE</NavLink>
          </li>
          <li>
              <NavLink style={styleActiveLink} to='orders'>MY ORDERS</NavLink>
          </li>
          <li>
          <button onClick={() => {
                            dispatch(authActions.logout())
                            navigate('/')
                        }}>Logout</button>
          </li>
      </nav>
      <div className={classes.user_right}>
        <Outlet/>
      </div>
    </div>
  )
}

export default User