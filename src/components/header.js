import { Dropdown, Container, Navbar, FormControl, Badge, Button } from "react-bootstrap";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserNameContext } from "../App";

const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = useContext(UserNameContext);

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        className="m-auto"
                        style={{ width: 500 }}
                        placeholder="Search product"
                        onChange={(e) => {
                            productDispatch({ type: "SORT_BY_SEARCH", payload: e.target.value });
                        }}
                    />
                </Navbar.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <Badge bg="success">{cart.length}</Badge>
                        <AiOutlineShoppingCart />
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        {cart.length > 0 ? (
                            <>
                                {cart.map((prod) => (
                                    <span className="cartItem">
                                        <img src={prod.image} alt={prod.name} className="cartImg" />
                                        <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span>{prod.price}</span>
                                        </div>
                                        <AiFillDelete
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                });
                                            }}
                                        />
                                    </span>
                                ))}
                                <div className="d-grid gap-2">
                                    <Button variant="primary">
                                        <Link to={"/cart"}>Go to cart</Link>
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <Dropdown.Item href="">Cart is empty</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
};

export default Header;
