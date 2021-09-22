import classes from '../../css/model.module.css';

const Model = ({ children, modelStyleClass, modelView, isOpen }) => (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
        <div className={`${classes.modelContainer} ${modelStyleClass}`}>
            <div className={`${classes.model} ${modelView}`}>{children}</div>
        </div>
    </div>
);

export default Model;
