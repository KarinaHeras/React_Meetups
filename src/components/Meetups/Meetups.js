import classes from './Meetups.module.css';
import MeetupItem from  './MeetupItem/MeetupItem';
function Meetups(props) {
    return  (
        <ul className={classes.Meetups}>
            {props.meetups.map((meetup,index) => (
                <MeetupItem key={meetup.id} id={meetup.id} 
                image={meetup.image} title={meetup.title} 
                address={meetup.address} description={meetup.description}/>
                
            ))}
        </ul>
    );
}

export default Meetups;