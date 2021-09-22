import classes from '../../css/header.module.css';
import HeaderTop from './HeaderTop';
import Navbar from './Navbar';

const Header = () => (
    <header id={classes.header}>
        <HeaderTop />
        <Navbar />
    </header>
);

export default Header;
