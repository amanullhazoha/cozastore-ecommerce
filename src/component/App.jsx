import { useState } from 'react';
import Banner from './Banner';
import showCart from './Context/showCart';
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';

const App = () => {
    const [cartList, setCartList] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const totalValueFun = () => {
        if (cartList.length > 0) {
            const array = cartList.map((list) => list.totalPrice);
            const reducer = (prev, curr) => prev + curr;
            return Math.round(array.reduce(reducer) * 100) / 100;
        }

        return 0;
    };

    const addToCart = (product) => {
        const update = cartList.find((list) => list.id === product.id);

        if (update) {
            const updateCartList = [...cartList];
            const index = updateCartList.indexOf(update);
            updateCartList.splice(index, 1, product);

            setCartList(updateCartList);
        } else {
            setCartList((prevstate) => [product, ...prevstate]);
        }
    };

    const removeProduct = (product) => {
        const remove = [...cartList];
        const update = remove.filter((p) => !(p.id === product.id));

        setCartList(update);
    };

    return (
        <>
            <showCart.Provider
                value={{ cartList, totalAmount, setTotalAmount, totalValueFun, removeProduct }}
            >
                <Header />
            </showCart.Provider>

            <Banner />

            <showCart.Provider value={{ addToCart }}>
                <MainSection />
            </showCart.Provider>

            <Footer />
        </>
    );
};
export default App;
