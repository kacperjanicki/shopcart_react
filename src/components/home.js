import React, { useContext } from "react";
import { UserNameContext } from "../App";
import SinglePerson from "./singleproduct";

const Home = () => {
    const {
        state: { products },
    } = useContext(UserNameContext);
    console.log(products);
    return (
        <div className="productContainer">
            {products.map((prod) => {
                return <SinglePerson prod={prod} key={prod.id} />;
            })}
        </div>
    );
};

export default Home;
