import { useContext } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
   const CC = useContext(CartContext);

   const totalAmount = `$${CC.totalAmount.toFixed(2)}`;

   const hasItems = CC.items.length > 0;

   const cartItemRemoveHandler = (id) => {
      CC.removeItem(id);
   };

   const cartItemaddHandler = (item) => {
      CC.addItem(item);
   };

   const cartItems = (
      <ul className={classes["cart-items"]}>
         {CC.items.map((item) => (
            <CartItem
               key={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onRemove={cartItemRemoveHandler.bind(null, item.id)}
               onAdd={cartItemaddHandler.bind(null, item)}
            />
         ))}
      </ul>
   );

   return (
      <Modal onClose={props.onClose}>
         {cartItems}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
         <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
               Close
            </button>
            {hasItems && <button className={classes.button}>Order</button>}
         </div>
      </Modal>
   );
};

export default Cart;
