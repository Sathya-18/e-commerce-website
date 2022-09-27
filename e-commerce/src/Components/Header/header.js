import styles from './header.module.css';
import MyContext from '../../context';
import { useContext} from 'react';

function Header(){

    let cartItems = useContext(MyContext);

    return(
        <header className={styles.container}>
            <div className={styles.header}>
            {/* <img></img> */}
            <p>Grocify.</p>
            <input type='text' className={styles.input} placeholder="Search here ..."></input>
            <p>Login</p>
            <p>Sign up</p>
            <p>Cart(<span>{cartItems.cart.length}</span>)</p>
            </div>
        </header>
    )
}

export default Header;
