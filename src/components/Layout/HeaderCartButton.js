import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';



const HeaderCartButton = props => {
    const CC = useContext(CartContext);

    const noOfCartItems = CC.items.reduce((currentNo, item ) => {
        return currentNo + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
              {noOfCartItems}
        </span>
    </button>

};
export default HeaderCartButton;