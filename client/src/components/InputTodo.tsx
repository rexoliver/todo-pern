import React, {Fragment, useState} from "react";
import '../styles/components.css'
import '../styles/App.css'
const InputTodo = () => {
    const [description, setDescription] = useState("");
    
    const onSubmitForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            const body = {description};
            const response = await fetch("http://localhost:3001/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location.href = "/"

        } catch (err:any) {
            console.log(err.message);
        }
    }

    return (
        <>
            <h1 className="apptitle">Pern Todo List</h1>
            <div className="searchbox">
                <form onSubmit={onSubmitForm}>
                    <input type='text' 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}/>
                    <button>Add</button>
                </form>
            </div>
            
        </>
    );
};

export default InputTodo;