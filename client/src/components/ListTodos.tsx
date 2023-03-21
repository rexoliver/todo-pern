import React, {Fragment, useState} from "react";
import '../styles/components.css'
import '../styles/App.css'

const ListTodos = () => {
    try {
        
    } catch (error: any) {
        console.log(error.message)
    }

    return (
        <>
            <h2 className="todolist">ListTodos</h2>
            <table className="formattable">
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>sampleID</td>
                    <td>sampleDesc</td>
                </tr>
                <tr>
                    <td>sampleID</td>
                    <td>sampleDesc</td>
                </tr>
            </table>
        </>
    )
}

export default ListTodos;