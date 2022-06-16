import React from "react";

const RenderTodos = ({ todos, dispatch }) => {
    console.log(todos);
    return (
        <>
            {todos.map((item) => (
                <div key={item.id}>
                    Todo added at {item.date}, name: {item.name}, id: {item.id}
                    <button
                        onClick={() => {
                            dispatch({ type: "delete", payload: { name: item.name } });
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
};

export default RenderTodos;
