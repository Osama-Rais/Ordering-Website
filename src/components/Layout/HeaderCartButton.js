import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
   const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
   const CC = useContext(CartContext);

   const noOfCartItems = CC.items.reduce((currentNo, item) => {
      return currentNo + item.amount;
   }, 0);

   const { items } = CC;
   const btnClasses = `${classes.button} ${
      btnIsHighLighted ? classes.bump : ""
   }`;

   useEffect(() => {
      if (items.length === 0) {
         return;
      }
      console.log("timmer working");
      setBtnIsHighLighted(true);
      const timer = setTimeout(() => {
         setBtnIsHighLighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [items]);

   console.log("It wokring till here");
   return (
      <button className={btnClasses} onClick={props.onClick}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className={classes.badge}>{noOfCartItems}</span>
      </button>
   );
};
export default HeaderCartButton;
