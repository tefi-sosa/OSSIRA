import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'


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
            <div className='flex-row'>

                <h2>Ossira</h2>
            </div>
            <nav>
                <ul className='main-nav'>
                    <li>
                        <NavLink style={styleActiveLink} to='/'>Home</NavLink>
                    </li>
                    {token && <li>
                        <NavLink style={styleActiveLink} to='profile'>Profile</NavLink>
                    </li>}
                    {!token ? ( <li>
                        <NavLink style={styleActiveLink} to='auth'><i class="fa-regular fa-user"></i> Login or Register</NavLink>
                    </li> ) : ( <button onClick={() => {
							dispatch(authActions.logout())
							navigate('/')
						}}>Logout</button> )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header