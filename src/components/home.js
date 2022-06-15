import React, { useContext } from "react";
import { UserNameContext } from "../App";
import SinglePerson from "./singleproduct";
import Filters from "./filters";

const Home = () => {
    const {
        state: { products },
    } = useContext(UserNameContext);
    console.log(products);
    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {products.map((prod) => {
                    return <SinglePerson prod={prod} key={prod.id} />;
                })}
            </div>
        </div>
    );
};

export default Home;
