import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart";
import React, { useReducer } from "react";
import Header from "./components/header";
import { faker } from "@faker-js/faker";
import Todo from "./components/todo";
import { cartReducer } from "./context/reducers";
import { productReducer } from "./context/reducers";

export const UserNameContext = React.createContext();
faker.seed(99);

function App() {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        inStock: [0, 3, 5, 6, 7][Math.floor(Math.random() * 5)],
        image: faker.image.image(),
        fastDelivery: faker.datatype.boolean(),
        ratings: [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)],
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return (
        <Router>
            <UserNameContext.Provider value={{ state, dispatch, productState, productDispatch }}>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/cart" exact element={<Cart />} />
                        <Route path="/todo" exact element={<Todo />} />
                    </Routes>
                </div>
            </UserNameContext.Provider>
        </Router>
    );
}

export default App;
