import React from "react";
import '../styles/App.css'
import '../styles/components.css'
const EditTodo = () => {
    return (
        <>
            <button id="myBtn">Edit</button>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                    </div>
            </div>
        </>
    );
}

export default EditTodo;