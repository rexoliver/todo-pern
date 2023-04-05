import React, {Fragment, useEffect, useState} from "react";
import '../styles/components.css'
import '../styles/App.css'

interface Todo {
    todo_id: number;
    description: string;
}

const ListTodos = () => {
    
    const [todos, setTodos] = useState<Todo[]>([]);
    const getTodos = async (): Promise<any> => {
        
        try {
            const response = await fetch("http://localhost:3001/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
            console.log(jsonData);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`, {method: "DELETE"});

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error: any) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);
    
    console.log(todos);



    return (
        <>
            <h2 className="todolist">ListTodos</h2>
            <table className="formattable">
                <thead> 
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {todos.map((todo: Todo) => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td>Edit</td>
                                <td><button onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))}   
                </tbody>
            </table>
        </>
    );
}

export default ListTodos;