import React, {Fragment} from 'react';
import './styles/App.css';
import InputTodo from "./components/InputTodo";
import ListTodos from './components/ListTodos';

function App() {
  return (
    <>
      <div className='container'>
        <InputTodo />
        <ListTodos/>
      </div>
    </>
  );
}

export default App;
