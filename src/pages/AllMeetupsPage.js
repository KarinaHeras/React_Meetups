import Meetups from '../components/Meetups/Meetups';
import { useEffect, useState } from 'react';
import Spinner from '../components/UI/Spinner/Spinner';

function AllMeetupsPage() {
    const [data,setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch("data.json",{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          )
        .then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];
            for(let key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
        
    }, []);
    console.log(data);

    if(isLoading) {
        return (
            <section>
                <Spinner />
            </section>
        );
    }

    return (
        <section>
            <h1 style={{textAlign: 'center'}}>All Meetups</h1>
            <ul>
            <Meetups meetups={loadedMeetups} />
            </ul>
        </section>

    );
}

export default AllMeetupsPage;