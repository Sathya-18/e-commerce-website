import styles from './header.module.css';

function Header(){
    return(
        <header className={styles.container}>
            <div className={styles.header}>
            {/* <img></img> */}
            <p>Grocify.</p>
            <input type='text' className={styles.input} placeholder="Search here ..."></input>
            <p>Login</p>
            <p>Sign up</p>
            <p>Cart</p>
            </div>
        </header>
    )
}

export default Header;
