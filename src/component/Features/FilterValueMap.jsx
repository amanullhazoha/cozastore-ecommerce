import classes from '../../css/filterValueMap.module.css';
import { Button, Col } from '../FrameWork.jsx';

const FilterValueMap = ({ heading, valueName, handelFilter, name }) => (
    <Col className="col-3">
        <div className={classes.content}>
            <h3>{heading}</h3>
            <div className={classes.filterText}>
                {valueName.map((item) => (
                    <Button
                        type="button"
                        key={item}
                        value={item}
                        name={name}
                        onClick={handelFilter}
                    >
                        {item}
                    </Button>
                ))}
            </div>
        </div>
    </Col>
);

export default FilterValueMap;
