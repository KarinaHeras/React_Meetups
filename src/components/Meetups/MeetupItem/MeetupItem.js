import classes from './MeetupItems.module.css';
import Card from '../../UI/Card/Card';
import {useContext} from 'react';
import FavoritesContext from '../../../store/favorite-context';

function MeetupItem(props) {
    const favoriteContext = useContext(FavoritesContext);

    const isItemFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(isItemFavorite) {
            favoriteContext.removeFavorite(props.id);
        } else {
            favoriteContext.addFavorite({
                id: props.id,
                title: props.title,
                description:props.description,
                image:props.image,
                address: props.address
            });
        }
    }

    return (
       <li className={classes.item} data-test='meet-up-item'>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button data-test="orderModuleHeaderButton" onClick={toggleFavoriteStatusHandler}>{isItemFavorite?'Remove From Favorite': 'Add to Favorite'}</button>
            </div>
        </Card>
       </li>
    );
}

export default MeetupItem;