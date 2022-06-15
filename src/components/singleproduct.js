import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./rating";
import { UserNameContext } from "../App";
import { useContext } from "react";

const SinglePerson = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = useContext(UserNameContext);
    console.log(cart);

    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle>
                        <span>${prod.price}</span>
                        {prod.fastDelivery ? <div>Fast Delivery</div> : <div>Slow Delivery</div>}
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                    {cart.some((x) => x.id === prod.id) ? (
                        <Button
                            variant="danger"
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                });
                            }}
                        >
                            Remove from cart
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,
                                });
                            }}
                            disabled={prod.inStock < 1}
                        >
                            {!prod.inStock ? "Out of stock" : "Add to cart"}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePerson;
