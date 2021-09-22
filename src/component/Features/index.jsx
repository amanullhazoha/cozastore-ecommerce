import { useEffect, useState } from 'react';
import productsData from '../../data/products';
import product from '../Context/product';
import { Container } from '../FrameWork.jsx';
import Filter from './Filter';
import FiltetItem from './FilterItem';
import Products from './Products';

const Features = () => {
    const [products, setProducts] = useState([]);
    const [filterValue, setFilterValue] = useState('All Product');
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [filterPrice, setFilterPrice] = useState('All');
    const [filterColor, setFilterColor] = useState('All');
    const [filterStory, setFilterStory] = useState('Default');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setProducts(productsData);
    }, [products]);

    const toggler = (value) => {
        if (value === 'filterOpen') {
            setFilterOpen((prev) => !prev);
            if (searchOpen === true) {
                setSearchOpen(false);
            }
        }

        if (value === 'searchOpen') {
            setSearchOpen((prev) => !prev);
            if (filterOpen === true) {
                setFilterOpen(false);
            }
        }
    };

    const filter = (value) => {
        setFilterValue(value);
    };

    const filtering = (value) => {
        console.log(value);
        if (value === 'Women') {
            const filterResult = products.filter((p) => p.catagory === 'Women');
            return filterResult;
        }
        if (value === 'Men') {
            return products.filter((p) => p.catagory === 'Men');
        }
        if (value === 'Bag') {
            return products.filter((p) => p.catagory === 'Bag');
        }

        if (value === 'Shoes') {
            return products.filter((p) => p.catagory === 'Shoes');
        }
        if (value === 'Watches') {
            return products.filter((p) => p.catagory === 'Watches');
        }

        return products;
    };

    const priceFilter = (e) => {
        const { value } = e.target;
        const { name } = e.target;
        if (name === 'story') {
            setFilterStory(value);
        }
        if (name === 'price') {
            setFilterPrice(value);
        }

        if (name === 'color') {
            setFilterColor(value);
        }
    };

    const storyFiltering = (filterProducts) => {
        if (filterStory === 'Popularity') {
            return filterProducts.sort((a, b) => a.rating - b.rating);
        }

        if (filterStory === 'Newness') {
            return filterProducts.sort((a, b) => a.date - b.date);
        }

        if (filterStory === 'Price: Low to High') {
            return filterProducts.sort((a, b) => a.rating - b.rating);
        }

        if (filterStory === 'Price: High to Low') {
            return filterProducts.sort((a, b) => b.rating - a.rating);
        }
        return filterProducts;
    };

    const priceFiltering = (filterProducts) => {
        console.log(filterPrice);
        if (filterPrice === '$0.00 - $50.00') {
            return filterProducts.filter((p) => p.price < 51);
        }

        if (filterPrice === '$50.00 - $100.00') {
            return filterProducts.filter((p) => p.price > 50 && p.price < 101);
        }

        if (filterPrice === '$100.00 - $150.00') {
            return filterProducts.filter((p) => p.price > 100 && p.price < 151);
        }

        if (filterPrice === '$150.00 - $200.00') {
            return filterProducts.filter((p) => p.price > 150 && p.price < 201);
        }
        if (filterPrice === '$200.00+') {
            return filterProducts.filter((p) => p.price > 200);
        }

        return filterProducts;
    };

    const colorFiltering = (filterProducts) => {
        if (filterColor === 'Black') {
            return filterProducts.filter((p) => p.color.includes('black'));
        }
        if (filterColor === 'Blue') {
            return filterProducts.filter((p) => p.color.includes('blue'));
        }
        if (filterColor === 'Grey') {
            return filterProducts.filter((p) => p.color.includes('grey'));
        }
        if (filterColor === 'Green') {
            return filterProducts.filter((p) => p.color.includes('green'));
        }
        if (filterColor === 'White') {
            return filterProducts.filter((p) => p.color.includes('white'));
        }

        return filterProducts;
    };

    const inputSearch = (e) => {
        const { value } = e.target;
        console.log(value);
        setInputValue(value);
    };

    const searchFiltering = (filterProducts) => {
        if (inputValue === '') {
            return filterProducts;
        }

        return filterProducts.filter((p) => {
            const name = p.name.toLowerCase();
            const value = inputValue.toLowerCase();
            if (name.includes(value)) {
                return p;
            }
            return 0;
        });
    };

    const prefrom = () => {
        let filterProducts = filtering(filterValue);
        filterProducts = storyFiltering(filterProducts);
        filterProducts = priceFiltering(filterProducts);
        filterProducts = colorFiltering(filterProducts);
        filterProducts = searchFiltering(filterProducts);
        console.log(filterProducts);
        return filterProducts;
    };

    return (
        <section id="productSection">
            <Container>
                <div className="heading">
                    <h1>PRODUCT OVERVIEW</h1>
                </div>
                <product.Provider
                    value={{
                        products: prefrom(),
                        filter,
                        filterOpen,
                        toggler,
                        priceFilter,
                        inputValue,
                        inputSearch,
                        searchOpen,
                    }}
                >
                    <Filter />
                    <FiltetItem />
                    <Products />
                </product.Provider>
            </Container>
        </section>
    );
};

export default Features;
