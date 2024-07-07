import { NavLink, Outlet } from 'react-router-dom';
import './nav.css';

export const NavLayout = () => {
    return (
        <>
        <nav className='nav'>
            {/* <img src='/assets/images/logo.svg' alt='Logo of the company' /> */}
            <ul className='nav-ul'>
                <li className='nav-li'><NavLink to='/home'>Home</NavLink></li>
                <li className='nav-li'><NavLink to='/home'>Products</NavLink></li>
                <li className='nav-li'><NavLink to='/home'>About</NavLink></li>
            </ul>
        </nav>
        </>
    )
};