import React from "react";

const SinglePerson = ({ prod }) => {
    return (
        <div>
            {prod.name}, {prod.price}
        </div>
    );
};

export default SinglePerson;
