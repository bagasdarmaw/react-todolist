import React from 'react';
//Import componenst
import Todo from './Todo';


const TodoList = ({Todos, setTodos, Filter}) =>{
    
    return(
    <div className="todo-container">
      <ul className="todo-list">
          {Filter.map(todo =>(
              <Todo 
              setTodos={setTodos} 
              Todos={Todos}
              key={todo.id}
              todo={todo}
              text={todo.text}/>
          ))}
      </ul>
    </div>
    );
};

export default TodoList;