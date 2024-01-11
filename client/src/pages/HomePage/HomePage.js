import { Link } from 'react-router-dom';
import './HomePage.scss';

function HomePage() {
    return (
        <section className='home'>
        <h1 className="home__header">Whispers of Wyndham Manor</h1>
        <div>
        <p className="home__copy">In the secluded Wyndham Manor, the night was shattered by a ghastly 
            scream. The wealthy philanthropist, Sir Archibald Wyndham, 
            was found lifeless in the grand ballroom. The guests, each with 
            their own secrets and motives, gathered to mourn, but whispers of 
            foul play echoed through the corridors.</p>
        </div>
        <Link className="home__button" to="/ballroom">Go In</Link>
        </section>
    )
}

export default HomePage;