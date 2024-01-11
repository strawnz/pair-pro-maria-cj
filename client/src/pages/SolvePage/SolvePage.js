import './SolvePage.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SolvePage() {
    let [ character, setCharacter ] = useState(null);
    let [ solvedItCorrectly, setSolvedItCorretly ] = useState(false);
    let [ solvedItIncorrectly, setSolvedItIncorrectly ] = useState(false);

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

    if (character === null) {
        return <p>Loading...</p>
    }

    function handleClick(didIt) {
        if(didIt === "true") {
            setSolvedItIncorrectly(false);
            setSolvedItCorretly(true);
        } else {
            setSolvedItCorretly(false);
            setSolvedItIncorrectly(true);
        }
    }


    return (
        <section className='solve'>
        <h1 className='solve__header'>Who killed Sir Archibald?</h1>
        <div className='characters'>
            {character.map((char) => {
                return (
                    <div key={char.name} className='character' onClick={() => {handleClick(char.didIt)}}>
                        <img className='character__image' src={char.image} />
                        <h3 className='character__name'>{char.name}</h3>
                    </div>
                )
            })}
            </div>
            {solvedItCorrectly && <p className='solve__message'>You did it! Thanks for playing!</p>}
            {solvedItIncorrectly && <p className='solve__message'>That's not quite right, try again!</p>}
        {(solvedItCorrectly) &&<Link to='/' className='solve__link'>Play Again </Link>}
        </section>
    )
}

export default SolvePage;