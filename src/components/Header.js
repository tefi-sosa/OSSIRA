import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'
import Search from './pages/Search'


const Header = () => {

    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? '#f57145' : ''
        }
    }

    return (
        <header className='header flex-row'>
            <nav className='brand-name'>
                <Search></Search>
                <h2>Ossira</h2>
                {token && <li>
                    <NavLink style={styleActiveLink} to='profile'>Profile</NavLink>
                </li>}
                {!token ? ( <li>
                    <NavLink style={styleActiveLink} to='auth'><i className="fa-regular fa-user"></i> Login or Register</NavLink>
                </li> ) : ( <button onClick={() => {
                        dispatch(authActions.logout())
                        navigate('/')
                    }}>Logout</button> )
                }
            </nav>
            <nav>
                <ul className='main-nav'>
                    <li>
                        <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={styleActiveLink} to='/platforms'>Platforms</NavLink>
                    </li>
                    <li>
                        <NavLink style={styleActiveLink} to='/flats'>Flats</NavLink>
                    </li>
                    <li>
                        <NavLink style={styleActiveLink} to='/sneakers'>Sneakers</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header