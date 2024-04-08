import logo from './logo.svg';
import './App.css';
import { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function createBulkTodos() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}


const App = () => {
  const [todos, setTodos] = useState(createBulkTodos)

  const nextID = useRef(6);
  const onInsert = useCallback(text => {

    const todo = {
      id: nextID.current,
      text,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextID.current += 1;
  },[todos]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id))
  },[todos]);

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, checked : !todo.checked} : todo,
      )
  );
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
};

export default App;

