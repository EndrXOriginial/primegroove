import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/icon/cart.svg';
import userIcon from '../../assets/icon/user.svg';
import './navLayout.css';

export const NavLayout = () => {
    const handleClick = (e) => {
        let target = e.target;
        const modale = document.querySelector('.nav-modale');
        modale.classList.toggle("visible");
        if (target.childElementCount === 0) {
            target = target.parentElement;
        }
        for (let i = 0; i < target.childElementCount; i++) {
            if (target.childNodes[i].classList.contains('menu-close-anim')) {
                target.childNodes[i].classList.toggle('menu-close-anim');
                target.childNodes[i].classList.toggle('menu-open-anim');
            } else {
                target.childNodes[i].classList.toggle('menu-open-anim');
                target.childNodes[i].classList.toggle('menu-close-anim');
            }
        }
    }

    return (
        <>
        <div className="nav-burger-menu">
            <svg onClick={handleClick} viewBox="0 0 100 100" className='menu-svg'>
                <line className='menu-open-anim' y1="35" x1="20" x2="80" y2="35" stroke="#56514A" stroke-width="3"/>
                <line className='menu-open-anim' y1="50" x1="20" x2="80" y2="50" stroke="#56514A" stroke-width="3"/>
                <line className='menu-open-anim' y1="65" x1="20" x2="80" y2="65" stroke="#56514A" stroke-width="3"/>
            </svg>
        </div>
        <div className="nav-modale">
            <ul className='nav-modale-ul'>
                <li className='nav-modale-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/'>Home</NavLink></li>
                <li className='nav-modale-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/products'>Products</NavLink></li>
                <li className='nav-modale-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/about'>About</NavLink></li>
                {/* <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/cart'><img src={cart} /></NavLink></li> */}
                {/* <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/profile'><img src={userIcon} /></NavLink></li> */}
            </ul>
        </div>

        <nav className='nav'>
            <div className='wrapper-desktop nav-div'>
                <img src={logo} alt='Logo of the company' />
                <ul className='nav-ul'>
                    <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/'>Home</NavLink></li>
                    <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/products'>Products</NavLink></li>
                    <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/about'>About</NavLink></li>
                    {/* <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/cart'><img src={cart} /></NavLink></li> */}
                    {/* <li className='nav-li'><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' nav-link-active' : '')} to='/profile'><img src={userIcon} /></NavLink></li> */}
                </ul>
            </div>
        </nav>
        <Outlet />
        <footer className='footer'>
            <div className='wrapper-desktop center'>
                <p className='footer-p'>Company is fake and made with the FakeStoreApi</p>
            </div>
        </footer>
        </>
    )
};