import classes from '../../css/footer.module.css';
import { Button, Col, Container, Row } from '../FrameWork.jsx';
import FooterlistItem from './footerListItem';

const Catagoris = ['Women', 'Men', 'Shoes', 'Watches'];

const Help = ['Track Order', 'Returns', 'Shipping', 'FAQs'];

const Footer = () => (
    <footer id={classes.footer}>
        <Container>
            <div className={classes.footerTop}>
                <Row>
                    <FooterlistItem listValue={Catagoris} heading="CATEGORIES" />

                    <FooterlistItem listValue={Help} heading="HELP" />

                    <Col className="col-3">
                        <h3>GET IN TOUCH</h3>
                        <p>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
                            York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <ul className={classes.footerSocailLink}>
                            <li>
                                <a href="-">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="-">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="-">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-3">
                        <h3>NEWSLETTER</h3>
                        <form className={classes.subsribeForm}>
                            <input type="email" name="email" placeholder="email@example.com" />

                            <Button type="submit">Subscribe</Button>
                        </form>
                    </Col>
                </Row>
            </div>

            <div className={classes.footerBottom}>
                <div className={classes.paymentMethod}>
                    <a href="-">
                        <img src="./img/paypal.webp" alt="paypal" />
                    </a>
                    <a href="-">
                        <img src="./img/visa.webp" alt="visa" />
                    </a>
                    <a href="-">
                        <img src="./img/mastercard.webp" alt="mastercard" />
                    </a>
                    <a href="-">
                        <img src="./img/card.webp" alt="card" />
                    </a>
                    <a href="-">
                        <img src="./img/discoverd.webp" alt="discoverd" />
                    </a>
                </div>

                <div className={classes.copyRight}>
                    <p>
                        Copyright ©2021 All rights reserved | This template is made with by &#9825;{' '}
                        <a href="-">Colorlib</a>
                    </p>
                </div>
            </div>
        </Container>
    </footer>
);

export default Footer;
