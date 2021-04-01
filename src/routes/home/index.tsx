import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Welcome!</h1>
            <p>
                Hello! this is a simple, but yet powerful site of the enterprise zharii com!
            </p>
            <p>
                Everyone is welcome here, but first you must log in, or you are not gonna be welcome here!
            </p>
        </div>
    );
};

export default Home;
