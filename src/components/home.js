import React, { useContext } from "react";
import { UserNameContext } from "../App";
import SinglePerson from "./singleproduct";
import Filters from "./filters";

const Home = () => {
    const {
        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = useContext(UserNameContext);

    const transform = () => {
        let sorted = products;

        if (sort) {
            sorted = sorted.sort((a, b) => (sort === "lowToHigh" ? a.price - b.price : b.price - a.price));
        }
        if (!byStock) {
            sorted = sorted.filter((prod) => prod.inStock);
        }
        if (byRating) {
            sorted = sorted.filter((prod) => prod.ratings >= byRating);
        }
        if (searchQuery) {
            sorted = sorted.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
        }
        if (byFastDelivery) {
            sorted = sorted.filter((prod) => prod.fastDelivery);
        }

        return sorted;
    };

    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {transform().map((prod) => {
                    return <SinglePerson prod={prod} key={prod.id} />;
                })}
            </div>
        </div>
    );
};

export default Home;
