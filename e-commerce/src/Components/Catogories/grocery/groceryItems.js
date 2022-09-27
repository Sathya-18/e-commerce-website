// import { useState } from 'react';
import styles from './grocery.module.css';
import { useContext } from 'react';
import MyContext from '../../../context';

function GroceryItems(props){
    //  const[qty, setQty] = useState(1)
    const cart = useContext(MyContext);
    const addCart = ()=>{
        cart.addItems(props.item);
        console.log(props.item);
    }

    return( 
        <div className={styles.item}>
            <div className={styles.div}></div>
            <h3>{props.name}</h3>
            <p>{props.quantity}</p>
            <p>M.R.P: Rs.<span>{props.price}</span></p>
            <button onClick={addCart}>Add to cart</button>
            <br></br>
            {/* <p>{qty}</p>
            <button onClick={()=>{
                if(qty>1){
                    setQty(qty-1)
                }
            }}>-</button>
            <button onClick={()=>{
                setQty(qty+1)
            }}>+</button> */}
        </div>
    )
}

export default GroceryItems;