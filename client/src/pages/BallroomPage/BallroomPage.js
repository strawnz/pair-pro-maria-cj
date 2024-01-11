import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BallroomPage.scss';

function BallroomPage() {
    let [ character, setCharacter ] = useState(null);
    let [ item, setItem ] = useState(null);

    useEffect(() => {
        async function getCharacters() {
            try {
                const response = await axios.get(`http://localhost:8080/characters`);
                setCharacter(response.data);
                console.log(response.data);
            } catch(error) {
                console.log("Error fetching character", error)
            }
        }

        getCharacters()
    },[])

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get(`http://localhost:8080/items`);
                let item = response.data.find((el) => el.location === 'ballroom');
                setItem(item);
            } catch(error) {
                console.log("Error fetching item", error)
            }
        }

        getItems()
    },[])

    if(item === null || character === null) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <section className='ballroom'>
            <h1 className='ballroom__header'>Talk to a suspect or <br/>select a room to investigate</h1>
            <div className='characters'>
                {character.map((char) => {
                    return(<div key={char.name} className='character'>
                        <img className='character__image' src={char.image} />
                        <h3 className='character__name'>{char.name}</h3>
                        <div className='character__tooltip'>
                            {char.story.map ((sentence) => {
                                return <div key={sentence}>{sentence}</div>
                            })
                            }
                        </div>
                    </div>)
                })
            }
            </div>
            <div className='ballroom-item__container'>
                <img className='ballroom-item' src={item.image} />
                <p className='ballroom-item__tooltip'>{item.info}</p>
            </div>
            <Link to="/study" className='ballroom__link ballroom__link--study'>Study</Link>
            <Link to="/library" className='ballroom__link ballroom__link--library'>Library</Link>
            <Link to="/guestroom" className='ballroom__link ballroom__link--guestroom'>Guest Room</Link>
            <Link to="/solve" className="ballroom__link ballroom__link--solve">Ready to Solve? </Link>
        </section>
    )
}

export default BallroomPage;