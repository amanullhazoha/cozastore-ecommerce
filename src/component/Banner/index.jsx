import classes from '../../css/banner.module.css';
import { Button, Container } from '../FrameWork.jsx';

const Banner = () => (
    <section className={classes.bannerSection}>
        <div className={classes.banner} style={{ backgroundImage: 'url(./img/headerBg1.webp)' }}>
            <Container className={classes.content}>
                <h3>Men Collection 2021</h3>
                <h1>new arrivauls</h1>
                <Button type="button">shop now</Button>

                <div className={classes.arrowBtn}>
                    <div className={classes.leftArrow}>
                        <i className="fas fa-caret-left" />
                    </div>
                    <div className={classes.rightArrow}>
                        <i className="fas fa-caret-right" />
                    </div>
                </div>
            </Container>
        </div>
    </section>
);

export default Banner;
