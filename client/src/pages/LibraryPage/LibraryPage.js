import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './LibraryPage.scss';

function LibraryPage() {

    let [ item, setItem ] = useState(null);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get(`http://localhost:8080/items`);
                let item = response.data.find((el) => el.location === 'library');
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
        <section className='library'>
            <h1 className='library__title'>Library</h1>
            <Link to='/ballroom' className='library__back'>Go back</Link>
            <div className='library-item__container'>
                <img className='library-item' src={item.image} />
                <p className='library-item__tooltip'>{item.info}</p>
            </div>
        </section>
    )
}

export default LibraryPage;