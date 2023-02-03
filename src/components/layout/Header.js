import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { useSelector} from 'react-redux'
import Search from '../pages/Search'

import classes from './Header.module.css'

const Header = () => {
    const [searchIsShown, setSearchIsShown] = useState(false)

    const token = useSelector(state => state.auth.token)

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

    const showSearch = () => {
        setSearchIsShown(true)
    }
  
    const hideSearch = () => {
        setSearchIsShown(false)
    }

    return (
        <header >
            <nav className={classes.brand_nav}>
                <div className={classes.header_item_rigth} >
                    <i className="fa-solid fa-magnifying-glass fa-xl" onClick={showSearch}></i>
                    {searchIsShown && <Search onClose={hideSearch} />}          
                </div>
                <div className={classes.brand_title}>
                    <h1>
                        <NavLink to='/'>O S S I R A</NavLink>
                    </h1>                    
                </div>
                <div className={classes.header_item_left}>
                    {token && <li>
                        <NavLink style={styleActiveLink} to='user/profile'><i className="fa-regular fa-user fa-xl"></i></NavLink>
                    </li>}
                    {!token && <li>
                        <NavLink style={styleActiveLink} to='auth'><i className="fa-regular fa-user fa-xl"></i></NavLink>
                    </li>}
                    <li>
                        <NavLink style={token && styleActiveLink} to={!token ? ('auth') : ('user/wishlist')}><i className="fa-regular fa-heart fa-xl"></i></NavLink>
                    </li> 
                    <li>
                        <NavLink style={styleActiveLink} to='cart'><i className="fa-solid fa-cart-shopping fa-xl"></i></NavLink>
                        <div className='close'>
                            {!emptyCart && <i className="fa-solid fa-circle fa-xs"></i>}
                        </div>
                    </li>  
                </div>
                
            </nav>
            <nav className={classes.nav_hide}>
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