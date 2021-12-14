import React, {useState,useEffect} from 'react';
import './App.css';

//component
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App(){
  //useState
  const [inputText, setinputText] = useState('');
  const [Todos, setTodos] = useState([]);
  const [Status, setStatus] = useState('all');
  const [Filter, setFilter] = useState([]);

  //Functions
  //function untuk memfilter status todo
  const filterHandler = () =>{
    switch(Status){
      case 'completed':
        setFilter(Todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
        setFilter(Todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilter(Todos);
          break;
    }
  };

  useEffect(()=>{
    getLocal();
  },[]);

  //useEffect
   useEffect(()=> {
    filterHandler();
    saveLocal();
  }, [Todos, Status]);

  // Loval Store
  const saveLocal = () =>{
      localStorage.setItem('Todos', JSON.stringify(Todos));
  };
  
  const getLocal = () =>{
    if (localStorage.getItem('Todos') === null){
      localStorage.setItem('Todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('Todos'))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <TodoForm 
      inputText={inputText} 
      Todos={Todos} 
      setTodos={setTodos}
      setinputText={setinputText}
      setStatus={setStatus}
      />
      
    

      <TodoList 
      Todos={Todos}
      setTodos={setTodos}
      Filter={Filter}
      />
    </div>
  );
}

export default App;
