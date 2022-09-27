import grstyle from './grocery.module.css';
import { useEffect, useState } from 'react';
import GroceryItems from './groceryItems';

function Grocery() {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/groceries').then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false;
            }
        }).then((data) => {
            setList(data);
        })
    }, [])

    return (
        <div className={grstyle.container}>

            <div className={grstyle.container2}>
                <h1>Groceries</h1>
                <div className={grstyle.wrap}>
                    {
                        list.map((data) => {
                            return (
                                <GroceryItems key={data.id} name={data.name} quantity={data.quantity} price={data.price} item={data}></GroceryItems>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Grocery;