import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store/authSlice'
import Search from '../pages/Search'

import classes from './Header.module.css'
import { FastField } from 'formik'

const Header = () => {

    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.cart)

    let emptyCart = true
    if (cart.length >= 1) {
        emptyCart = false
    } else {
        emptyCart = true
    }

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }

    return (
        <header >
            <nav className={classes.brand_nav}>
                <div>
                    <Search></Search>                    
                </div>
                <div>
                    <h1>
                        <NavLink to='/'>O S S I R A</NavLink>
                    </h1>                    
                </div>
                <div className={classes.header_item_left}>
                    {token && <li>
                        <NavLink style={styleActiveLink} to='profile'>Profile</NavLink>
                    </li>}
                    {!token ? ( <li>
                        <NavLink style={styleActiveLink} to='auth'><i className="fa-regular fa-user fa-xl"></i> Login or Register</NavLink>
                    </li> ) : ( <button onClick={() => {
                            dispatch(authActions.logout())
                            navigate('/')
                        }}>Logout</button> )
                    }
                    <li>
                        <NavLink style={token && styleActiveLink} to={!token ? ('auth') : ('wishlist')}><i className="fa-regular fa-heart fa-xl"></i></NavLink>
                    </li> 
                    <li>
                        <NavLink style={styleActiveLink} to='cart'><i className="fa-solid fa-cart-shopping fa-xl"></i></NavLink>
                        <div className='close'>
                            {!emptyCart && <i className="fa-solid fa-circle fa-xs"></i>}
                        </div>
                    </li>  
                </div>
                
            </nav>
            <nav>
                <li>
                    <NavLink style={styleActiveLink} to='/all'>NEW ARRIVALS</NavLink>
                </li>
                <li>
                    <NavLink style={styleActiveLink} to='/platforms'>PLATFORMS</NavLink>
                </li>
                <li>
                    <NavLink style={styleActiveLink} to='/flats'>FLATS</NavLink>
                </li>
                <li>
                    <NavLink style={styleActiveLink} to='/sneakers'>SNEAKERS</NavLink>
                </li>
            </nav>
        </header>
    )
}

export default Header