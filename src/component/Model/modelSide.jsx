import { useContext, useEffect } from 'react';
import classes from '../../css/modelSide.module.css';
import showCart from '../Context/showCart';
import { Button } from '../FrameWork.jsx';
import Model from './model';

const ModelSide = ({ isOpen, toggler }) => {
    const { cartList, totalAmount, setTotalAmount, totalValueFun, removeProduct } =
        useContext(showCart);

    useEffect(() => {
        setTotalAmount(totalValueFun());
    }, [setTotalAmount, totalValueFun]);

    return (
        <Model modelView={classes.modelStyle} isOpen={isOpen}>
            <div className={classes.heading}>
                <h3>Your Cart</h3>
                <Button type="button" onClick={toggler}>
                    <i className="fas fa-times" />
                </Button>
            </div>

            {cartList.map((list) => (
                <div className={classes.addCartList}>
                    <figure>
                        <img src={`img/${list.thumbnil}`} className="img-fluid" alt="product" />
                    </figure>

                    <div className={classes.productName}>
                        <p>{list.name}</p>
                        <p>
                            {list.quintity} x {list.price}
                        </p>
                        <p>
                            <span style={{ fontWeight: '600' }}>Total:</span> {list.totalPrice}
                        </p>
                    </div>
                    <Button type="button" onClick={() => removeProduct(list)}>
                        <i className="fas fa-times" />
                    </Button>
                </div>
            ))}

            <div className={classes.totalValue}>
                <h3>Total: ${totalAmount}</h3>
                <div className={classes.checkOut}>
                    <Button type="button">View Cart</Button>
                    <Button type="button">Check Out</Button>
                </div>
            </div>
        </Model>
    );
};

export default ModelSide;
