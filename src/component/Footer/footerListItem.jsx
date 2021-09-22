import classes from '../../css/footerListItem.module.css';
import { Col } from '../FrameWork.jsx';

const FooterlistItem = ({ listValue, heading }) => (
    <Col className="col-3">
        <h3>{heading}</h3>
        <ul className={classes.listItems}>
            {listValue.map((value) => (
                <li key={value}>
                    <a href="-">{value}</a>
                </li>
            ))}
        </ul>
    </Col>
);

export default FooterlistItem;
