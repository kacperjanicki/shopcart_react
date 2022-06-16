import React, { useReducer, useState } from "react";
import RenderTodos from "./RenderTodos";

const newTodo = (name) => {
    return { id: Math.floor(Math.random() * 5), name: name, date: Date(Date.now()).split("G")[0] };
};

const reducer = (todos, action) => {
    switch (action.type) {
        case "add":
            return [...todos, newTodo(action.payload.name)];
        case "delete":
            return todos.filter((todo) => todo.name !== action.payload.name);
        default:
            return todos;
    }
};

const Todo = () => {
    const [name, setName] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);

    const setText = (e) => {
        e.preventDefault();
        dispatch({ type: "add", payload: { name: name } });
        setName("");
    };

    return (
        <>
            <form onSubmit={setText}>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                        console.log(name);
                    }}
                ></input>
            </form>
            <RenderTodos todos={todos} dispatch={dispatch} />
        </>
    );
};

export default Todo;
