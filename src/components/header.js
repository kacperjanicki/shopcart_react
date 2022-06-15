import { Dropdown, Container, Navbar, FormControl } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search product" />
                </Navbar.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <AiOutlineShoppingCart />
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="">Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
};

export default Header;
