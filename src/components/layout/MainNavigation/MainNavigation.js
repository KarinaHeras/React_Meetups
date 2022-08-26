import {Link} from 'react-router-dom'
import { useState } from 'react';
import classes from './MainNavigation.module.css';

import {useContext} from 'react';
import FavoritesContext from '../../../store/favorite-context';


function MainNavigation () {

    const [navbar, setNavbar] = useState(false)
    const favoriteContext = useContext(FavoritesContext)
    
    function changeBackground(){
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <header className={classes.header}>
           <div className={ navbar ? 'navbar header_bg ' : navbar}></div>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetup</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            My Favorites
                            <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div/>
        </header>
    );
}

export default MainNavigation;