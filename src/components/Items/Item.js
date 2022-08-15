import './Item.module.css';

const Item = (props) => {
    return (
        <li>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <h2>{props.prix}</h2>
        </li>
    )
};

export default Item;