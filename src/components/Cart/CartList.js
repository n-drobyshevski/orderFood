import './CartList.module.css';

import CartItem from './CartItem';

const CartList = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                // console.log(data);
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        desc={item.description}
                        price={item.price}
                        amount={item.amount}
                    />
                );
            })}
        </ul>
    )
};

export default CartList;