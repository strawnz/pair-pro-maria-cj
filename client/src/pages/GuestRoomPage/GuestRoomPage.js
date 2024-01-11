import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './GuestRoomPage.scss';

function GuestRoomPage() {
    let [ item, setItem ] = useState(null);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get(`http://localhost:8080/items`);
                let item = response.data.find((el) => el.location === 'guestroom');
                setItem(item);
            } catch(error) {
                console.log("Error fetching item", error)
            }
        }

        getItems()
    },[])

    if(item === null) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <section className='guestroom'>
            <h1 className='guestroom__title'>Guest Room</h1>
            <Link to='/ballroom' className='guestroom__back'>Go back</Link>
            <div className='guestroom-item__container'>
                <img className='guestroom-item' src={item.image} />
                <p className='guestroom-item__tooltip'>{item.info}</p>
            </div>
        </section>
    )
}

export default GuestRoomPage;