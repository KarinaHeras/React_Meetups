import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import Meetups from '../components/Meetups/Meetups';
function FavoritesPage() {
    const favoriteContext = useContext(FavoritesContext);

    let favorites;
    if(favoriteContext.totalFavorites === 0) {
        favorites = <h6 style={{textAlign: 'center'}}>If you want to add your Meeup to favorites. please add them here</h6>
    } else {
        favorites = <Meetups meetups={favoriteContext.favorites} />
    }


    return (
        <section>
            <h1 style={{textAlign: 'center'}}>My Favorites</h1>
            {favorites}
        </section>
    );
}

export default FavoritesPage;