import { NavLink, Outlet } from 'react-router-dom';
import './nav.css';

export const NavLayout = () => {
    return (
        <>
        <nav className='nav'>
            {/* <img src='/assets/images/logo.svg' alt='Logo of the company' /> */}
            <ul className='nav-ul'>
                <li className='nav-li'><NavLink to='/'>Home</NavLink></li>
                <li className='nav-li'><NavLink to='/home'>Products</NavLink></li>
                <li className='nav-li'><NavLink to='/home'>About</NavLink></li>
            </ul>
        </nav>
        <Outlet />
        <footer className='footer'>
            <div className='wrapper-desktop'>
                <p className='footer-p'>Company is fake and made with FakeStoreApi</p>
            </div>
        </footer>
        </>
    )
};