import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './StudyPage.scss';

function StudyPage() {
    let [ item, setItem ] = useState(null);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get(`http://localhost:8080/items`);
                let item = response.data.find((el) => el.location === 'study');
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
        <section className='study'>
            <h1 className='study__title'>Study</h1>
            <Link to='/ballroom' className='study__back'>Go back</Link>
            <div className='study-item__container'>
                <img className='study-item' src={item.image} />
                <p className='study-item__tooltip'>{item.info}</p>
            </div>
        </section>
    )
}

export default StudyPage;