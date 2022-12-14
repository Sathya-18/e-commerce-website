import { useNavigate } from 'react-router-dom';
import stylesG from './items.module.css';

function Items(props){

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`./${props.link}`)
    }

    return(
        <div className={stylesG.container} onClick={handleClick}>
            <div className={stylesG.image}>
            <img src={props.image} alt="catogories"></img>
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default Items;