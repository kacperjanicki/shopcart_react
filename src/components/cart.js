import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup, Row, Col, Form } from "react-bootstrap";
import { UserNameContext } from "../App";
import Rating from "./rating";
import { AiFillDelete } from "react-icons/ai";
import { prettyDOM } from "@testing-library/react";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = useContext(UserNameContext);
    console.log(cart);

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart]);

    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map((element) => (
                        <ListGroup.Item key={element.id}>
                            <Row>
                                <Col md={1}>
                                    <span>{element.name}</span>
                                </Col>
                                <Col md={1}>${element.price}</Col>
                                <Col md={3}>
                                    <Rating rating={element.ratings}></Rating>
                                </Col>
                                <Col md={1}>
                                    <Form.Control
                                        as="select"
                                        // value={element.qty}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: element.id,
                                                    qty: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        {[...Array(element.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <AiFillDelete
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: element,
                                            });
                                        }}
                                    />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">Subtotal {cart.length} items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
                <Button disabled={cart.length < 1}>Proceed to checkout</Button>
            </div>
        </div>
    );
};

export default Cart;
