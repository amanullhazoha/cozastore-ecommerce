/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import classes from '../../css/products.module.css';
import product from '../Context/product';
import { Button, Col, Row } from '../FrameWork.jsx';
import AddCartModel from '../Model/addCartModel';

const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewCart, setViewCart] = useState(null);

    const context = useContext(product);
    const { products } = context;

    const cartOpenHandel = (item) => {
        setIsOpen((prevState) => !prevState);
        return setViewCart(item);
    };

    // console.log('product render');

    return (
        <>
            <div className={classes.products}>
                <Row>
                    {products.map((item) => (
                        <Col className={`col-3 ${classes.marginBottom}`} key={item.id}>
                            <div className={classes.content}>
                                <figure>
                                    <img
                                        src={`./img/${item.thumbnil}`}
                                        alt={item.name}
                                        className="img-fluid"
                                    />
                                    <figcaption>
                                        <Button type="button" onClick={() => cartOpenHandel(item)}>
                                            Quick Veiw
                                        </Button>
                                    </figcaption>
                                </figure>
                                <div className={classes.productTitle}>
                                    <p>{item.name}</p>
                                    <Button type="button" onClick={() => console.log('clicked')}>
                                        {item.bookMark ? (
                                            <i
                                                className="fas fa-heart"
                                                style={{ color: '#6c7ae0' }}
                                            />
                                        ) : (
                                            <i className="far fa-heart" />
                                        )}
                                    </Button>
                                </div>
                                <div className={classes.price}>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className={classes.paginationBtn}>
                <button type="button">Load More</button>
            </div>
            {isOpen && <AddCartModel isOpen={isOpen} viewCart={viewCart} setIsOpen={setIsOpen} />}
        </>
    );
};

export default React.memo(Products);
