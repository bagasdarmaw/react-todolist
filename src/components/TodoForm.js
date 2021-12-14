import React, {useState} from "react";

const TodoForm = ({setinputText,Todos, setTodos, inputText, setStatus}) =>{
    const inputTodoHandler = (e) => {
        setinputText(e.currentTarget.value);
    };
    
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...Todos,{
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 1000)
            }
        ]);
        setinputText('');
    };

    const setatusHandler = (e) =>{
        setStatus(e.target.value);
    }

    const deleteAllHandler = () =>{
        let filtered = Todos.filter(text =>{
            return !text.completed;
        });
        setTodos(filtered);
    }

    return(
    <form>
        <input onChange={inputTodoHandler} value={inputText} type="text" className="todo-input" placeholder="Add todo here ..." />
        <button onClick={submitTodoHandler} className="form-button" type="submit">
          <i className="fas fa-plus"></i>
        </button>
        <div className="select">
          <select onChange={setatusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <button onClick={deleteAllHandler} className="delete-all-btn">
            Delete All Complete Task
        </button>
    </form>
    );
}

export default TodoForm;
