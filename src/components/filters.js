import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserNameContext } from "../App";
import Rating from "./rating";

const Filters = () => {
    const [rate, setRate] = useState(3);
    const {
        productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
        productDispatch,
    } = useContext(UserNameContext);
    console.log(byStock, byFastDelivery, byRating, searchQuery, sort);

    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => {
                        productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" });
                    }}
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => {
                        productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" });
                    }}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() => productDispatch({ type: "SORT_BY_STOCK" })}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() => {
                        productDispatch({ type: "SORT_BY_DELIVERY" });
                    }}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating
                    rating={byRating}
                    style={{ cursor: "ponter" }}
                    onClick={(x) => productDispatch({ type: "SORT_BY_RATING", payload: x + 1 })}
                />
            </span>
            <span>
                <Button
                    variant="light"
                    onClick={() => {
                        productDispatch({ type: "CLEAR" });
                    }}
                >
                    Clear
                </Button>
            </span>
        </div>
    );
};
export default Filters;
