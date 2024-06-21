
// ui form FROM SEMANTIC UI

import { useState } from "react";

const AddTask = ({onSubmit}) => {

    {/****  WE HAVE CREATED A FUNCION BY WHICH IT WILL CONSOLE THE VALUE OF TEXT WE WILL WRITE IN INPUT BOX  ***/}

    const [task, setTask] = useState({
        title:"",
        description: "",
    });

    

    let handleInputChange = (e) => {
        // console.log(e.target.value);

        setTask(
            {
                ...task,
                [e.target.name]: e.target.value,
            }
        )
    }

    {/**** WE DONT WANT OUR FORM TO SUBMIT INFORMATION TO BROWSER THERFORE WE ARE DOING THIS TO PREVENT DEFAULT FEATURE */}

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    }

    return (
    // <p>This is add task</p>

    <>

    <h3 className="ui heading center">Add New Task</h3>

    <div className="ui form">

        <form onSubmit={onFormSubmit}>
            <div className="field">
                <label>Title</label>
                <input type="text" fdprocessedid="1qut7" placeholder="Task Title" name="title" onChange={handleInputChange} value={task.title}/>
            </div>

            <div className="field">
                <label>Description</label>
                <textarea rows="2" placeholder="Task Description" name="description" onChange={handleInputChange} value={task.description}></textarea>
            </div>

            <button type="submit" className="ui primary button" fdprocessedid="jhz0rs"> Submit </button>

        </form>

    </div>

    </>

    )
}

export default AddTask;

