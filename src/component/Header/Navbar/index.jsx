/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useState } from 'react';
import classes from '../../../css/navbar.module.css';
import showCart from '../../Context/showCart';
import { Container, ListMapLink } from '../../FrameWork.jsx';
import ModelSide from '../../Model/modelSide';

const NavListItems = [
    { value: 'Home', link: 'home' },
    { value: 'Shope', link: 'shope' },
    { value: 'Features', link: 'features' },
    { value: 'Blog', link: 'blog' },
    { value: 'About', link: 'about' },
    { value: 'Contact', link: 'contact' },
];

const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const { cartList } = useContext(showCart);

    const toggler = () => {
        setCartOpen((prevSate) => !prevSate);
    };

    return (
        <nav className={classes.navbar}>
            <Container className={classes.content}>
                <div className={classes.logo}>
                    <a href="-">
                        <h1>
                            coza<span> store</span>
                        </h1>
                    </a>
                </div>

                <ListMapLink items={NavListItems} className={classes.navLink} />

                <ul className={classes.navIcon}>
                    <li>
                        <i className="fas fa-search" />
                    </li>
                    <li onClick={toggler}>
                        <i className="fas fa-shopping-cart" />
                        <p className={classes.selectItem}>{cartList.length}</p>
                    </li>
                    <li>
                        <i className="far fa-heart" />
                        <p className={classes.selectItem}>2</p>
                    </li>
                </ul>
            </Container>
            <ModelSide isOpen={cartOpen} toggler={toggler} />
        </nav>
    );
};

export default Navbar;
