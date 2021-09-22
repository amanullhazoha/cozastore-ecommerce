import classes from '../../css/services.module.css';
import services from '../../data/services';
import { Button, Col, Container, Row } from '../FrameWork.jsx';

const Services = () => (
    <section id={classes.services}>
        <Container>
            <Row>
                {services.map(({ title, discripiton, img, id }) => (
                    <Col className="col-4" key={id}>
                        <div className={classes.content}>
                            <img src={`./img/${img}`} alt="services" className="img-fluid" />
                            <div className={classes.title}>
                                <h2>{title}</h2>
                                <p>{discripiton}</p>
                            </div>

                            <div className={classes.hoverTitle}>
                                <Button type="button">show now</Button>
                                <div className={classes.border} />
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Services;
