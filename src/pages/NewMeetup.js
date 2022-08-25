import NewMeetupForm from "../components/Meetups/NewMeetupForm/NewMeetupForm";
import {useHistory} from 'react-router-dom';
import  {useFetch} from '../util-hooks/useFetch'
function NewMeetup() {
    const history = useHistory();
    const { data } = useFetch({
        url: "/data.json",
      });
    function addMeetupHandler(meetupData) {
        fetch(data,
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=> {
            history.replace('/');
        });

    }

    return (
        <section>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        
    );
}

export default NewMeetup;