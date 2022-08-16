import './CartList.module.css';

import CartItem from './CartItem';

const CartList = (props) => {
    console.log(props.items);
    return (
        <ul>
            {props.items.map((item) => {
                // console.log(data);
                return (
                    <CartItem
                        key={item.data.id}
                        name={item.data.name}
                        desc={item.data.description}
                        price={item.data.price}
                        amount={item.amount}
                    />
                );
            })}
        </ul>
    )
};

export default CartList;