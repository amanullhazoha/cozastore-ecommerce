/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import classes from '../../css/addCartModel.module.css';
import showCart from '../Context/showCart';
import { Button } from '../FrameWork.jsx';
import Model from './model';

const AddCartModel = ({ isOpen, viewCart, setIsOpen }) => {
    const [orderProduct, setOrederProduct] = useState(viewCart);
    const [thimbnil, setThimbnil] = useState(viewCart.thumbnil);

    const cartAdd = useContext(showCart);
    const { addToCart } = cartAdd;

    const increment = (item) => {
        setOrederProduct((prevState) => ({
            ...item,
            quintity: prevState.quintity + 1,
            totalPrice: Math.round(prevState.price * (prevState.quintity + 1) * 100) / 100,
        }));
    };

    const deCrement = (item) => {
        setOrederProduct((prevState) => {
            if (prevState.quintity > 0) {
                return {
                    ...item,
                    quintity: prevState.quintity - 1,
                    totalPrice: Math.round(prevState.price * (prevState.quintity - 1) * 100) / 100,
                };
            }

            return {
                ...item,
                quintity: prevState.quintity,
                totalPrice: prevState.price * prevState.quintity,
            };
        });
    };

    const handelChange = (item, e) => {
        setOrederProduct({
            ...item,
            ...[e.target.name],
            [e.target.name]: e.target.value,
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        setIsOpen((prevState) => !prevState);
        addToCart(orderProduct);
    };

    return (
        <Model modelStyleClass={classes.modelStyle} modelView={classes.quickView} isOpen={isOpen}>
            <div className={classes.closeBtn}>
                <Button type="button" onClick={() => setIsOpen((prevState) => !prevState)}>
                    X
                </Button>
            </div>
            <div className={classes.photoList}>
                {orderProduct.photo.map((p) => (
                    <figure key={p}>
                        <img
                            src={`./img/${p}`}
                            alt="product"
                            className="img-fluid"
                            onClick={() => setThimbnil(p)}
                        />
                    </figure>
                ))}
            </div>

            <div className={classes.imgView}>
                <figure>
                    <img src={`./img/${thimbnil}`} alt="product" className="img-fluid" />
                </figure>
            </div>

            <div className={classes.porductDitels}>
                <h2>{orderProduct.name}</h2>
                <p className={classes.price}>{orderProduct.totalPrice}</p>
                <p className={classes.discription}>{orderProduct.discription}</p>

                <div className={classes.chooseAndOrder}>
                    <form onSubmit={handelSubmit}>
                        <label htmlFor="size">
                            Size
                            <select
                                id="size"
                                name="orderSize"
                                onChange={(e) => handelChange(orderProduct, e)}
                            >
                                <option>Choose</option>
                                {orderProduct.size.map((s) => (
                                    <option value={s}>Size {s}</option>
                                ))}
                            </select>
                        </label>

                        <label htmlFor="color">
                            Color
                            <select
                                id="Color"
                                name="orderColor"
                                onChange={(e) => handelChange(orderProduct, e)}
                            >
                                <option>Choose</option>
                                {orderProduct.color.map((c) => (
                                    <option value={c}>Size {c}</option>
                                ))}
                            </select>
                        </label>

                        <div className={classes.quintityBtn}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => deCrement(viewCart)}
                                            >
                                                -
                                            </Button>
                                        </td>
                                        <td>
                                            <p>{orderProduct.quintity}</p>
                                        </td>
                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => increment(viewCart)}
                                            >
                                                +
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={classes.addCartBtn}>
                            <Button type="submit">Add To Cart</Button>
                        </div>
                    </form>

                    <div className={classes.icon}>
                        <ul>
                            <li>
                                <i className="far fa-heart" />
                            </li>
                            <li>
                                <a href="-">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="-">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="-">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Model>
    );
};

export default AddCartModel;
