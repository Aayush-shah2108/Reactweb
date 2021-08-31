import React from 'react'
import { useState } from 'react';


export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title can't be empty")
        }
        else if(!desc){

            alert("Desc can't be empty")
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container">
            <h3 className="text-center">Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Desc</label>
                    <input type="description" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
