import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoInput = () => {
    const { inputValue, setInputValue, handleAddTodo } = useContext(TodoContext)
    return (<div className="todo-input">
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button className="input-submit" onClick={handleAddTodo} >
            Add
        </button>
    </div>)
}

export default TodoInput;