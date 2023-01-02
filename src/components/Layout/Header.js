import { Fragment } from "react";
import headerimg from '../../assets/img1.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
return <Fragment>
    <header className={classes.header}>
        <h1>
            Dawaai.Pk
        </h1>
            <HeaderCartButton  onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img
        src={headerimg}
        alt="Dawa ly lo is phely Dua ki zarorat parh jai!"
        />
    </div>
</Fragment> 
};
export default Header;