import { useContext } from 'react';
import classes from '../../css/filter.module.css';
import product from '../Context/product';
import { Button } from '../FrameWork.jsx';

const ButtonValue = ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches'];

const Filter = () => {
    const { toggler, filterOpen, filter, inputValue, inputSearch, searchOpen } =
        useContext(product);

    return (
        <>
            <div className={classes.filter}>
                <div className={classes.filterText}>
                    {ButtonValue.map((value) => (
                        <Button type="button" key={value} onClick={() => filter(value)}>
                            {value}
                        </Button>
                    ))}
                </div>

                <div className={classes.filterSearch}>
                    <Button type="button" onClick={() => toggler('filterOpen')}>
                        {filterOpen ? (
                            <i className="fas fa-times" />
                        ) : (
                            <i className="fas fa-sort-amount-down" />
                        )}
                        <p>Filter</p>
                    </Button>
                    <Button type="button" onClick={() => toggler('searchOpen')}>
                        {searchOpen ? (
                            <i className="fas fa-times" />
                        ) : (
                            <i className="fas fa-search" />
                        )}
                        <p>Search</p>
                    </Button>
                </div>
            </div>
            <div className={classes.searchInput} style={{ display: searchOpen ? 'block' : 'none' }}>
                <input
                    type="text"
                    name="inputSearch"
                    value={inputValue}
                    placeholder="Search"
                    onChange={inputSearch}
                />
            </div>
        </>
    );
};

export default Filter;
