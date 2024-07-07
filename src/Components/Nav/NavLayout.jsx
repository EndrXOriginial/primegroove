import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './nav.css';

export const NavLayout = () => {
    return (
        <>
        <nav className='nav'>
            <div className='wrapper-desktop nav-div'>
                <img src={logo} alt='Logo of the company' />
                <ul className='nav-ul'>
                    <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/'>Home</NavLink></li>
                    <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/products'>Products</NavLink></li>
                    <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
        <Outlet />
        <footer className='footer'>
            <div className='wrapper-desktop center'>
                <p className='footer-p'>Company is fake and made with FakeStoreApi</p>
            </div>
        </footer>
        </>
    )
};