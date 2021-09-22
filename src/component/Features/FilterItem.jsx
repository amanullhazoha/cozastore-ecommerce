import { useContext } from 'react';
import classes from '../../css/filterItem.module.css';
import product from '../Context/product';
import { Container, Row } from '../FrameWork.jsx';
import FilterValueMap from './FilterValueMap';

const FilterName = [
    'Default',
    'Popularity',
    'Average rating',
    'Newness',
    'Price: Low to High',
    'Price: High to Low',
];

const FilterPrice = [
    'All',
    '$0.00 - $50.00',
    '$50.00 - $100.00',
    '$100.00 - $150.00',
    '$150.00 - $200.00',
    '$200.00+',
];

const FilterColor = ['All', 'Black', 'Blue', 'Grey', 'Green', 'White'];

const FiltetItem = () => {
    const { filterOpen, priceFilter } = useContext(product);

    return (
        <section className={classes.filterItem} style={{ display: filterOpen ? 'block' : 'none' }}>
            <Container className={classes.filterItemStyle}>
                <Row>
                    <FilterValueMap
                        heading="Story By"
                        valueName={FilterName}
                        handelFilter={priceFilter}
                        name="story"
                    />

                    <FilterValueMap
                        heading="Price"
                        valueName={FilterPrice}
                        handelFilter={priceFilter}
                        name="price"
                    />

                    <FilterValueMap
                        heading="Color"
                        valueName={FilterColor}
                        handelFilter={priceFilter}
                        name="color"
                    />

                    <FilterValueMap heading="Story By" valueName={FilterName} />
                </Row>
            </Container>
        </section>
    );
};

export default FiltetItem;
