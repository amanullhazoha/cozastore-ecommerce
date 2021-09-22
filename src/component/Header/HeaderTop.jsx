import classes from '../../css/headerTop.module.css';
import { Container, ListMap } from '../FrameWork.jsx';

const LISTS = ['Help & FAQs', 'My Account', 'EN', 'USD'];

const HeaderTop = () => (
    <div className={classes.headerTop}>
        <Container className={classes.content}>
            <p>Free shipping for standard order over $100</p>
            <ListMap items={LISTS} className={classes.topbar} />
        </Container>
    </div>
);

export default HeaderTop;
