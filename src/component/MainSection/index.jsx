import classes from '../../css/mainSection.module.css';
import Features from '../Features';
import Services from './services';

const MainSection = () => (
    <main id={classes.mainSection}>
        <Services />
        <Features />
    </main>
);

export default MainSection;
