
import { Component } from "react";

import { useState } from "react";

import Task from "../components/Task";

import AddTask from "../components/AddTask";

{/******** CLASS BASED COMPONENT ***********/}

// class ToDoScreen extends Component{

//     taskCount=0;

//     state = {
//         taskCount:0,
//     };

//     render() {
//         return (
//             <div className="screens">
//                 <h1 className="ui heading center"> To Do List</h1> 
//                             {/* ui heading is pre-defined class of semantic ui  */}

//                 <div>
//                     <button onClick={
//                         (e) => {

//                             // console.log("Add Task button is clicked");
//                             // this.taskCount++;
//                             // console.log(this.taskCount);
                            
//                             /***** HERE IN CONSOLE WHENEVER WE WILL CLICK BUTTON TASKCOUNT WILL INCREASE AND WILL PRINT IN CONSOLE **********/
                            
//                             /********  CORRECT WAY TO INCREASE VALUE OF TASKCOUNT  ***********/
                            
                            
//                             console.log("Add Task button is clicked");
//                             this.setState(
//                                 {
//                                     ...this.state,
//                                     taskCount: this.state.taskCount + 1,
//                                 }

//                             );

//                             console.log(this.state.taskCount);
                            

//                         }
//                     } className="ui secondary button">Add Task</button>
//                             {/* ui secondary button is pre-defined class of semantic ui  */}

//                     <p>The number of tasks are: {this.taskCount}</p>

//                     {/* HERE IT IS SUPPOSED TO INCREASE TASKCOUNT BUT IT IS NOT INCREASING */}
                    
//                     <p>The number of tasks are: {this.state.taskCount}</p>

                    
//                 </div>    

//             </div>
//         )
//     }
// }


/*******  IN JSX VARIABLE KI VALUE KO DYNAMICALLY INCREASE KARNE KE LIYE STATE VARIABLE MEIN RAKHNA HOTA HAI  ***********/

/*********  IN JSX class="" IS WRITTEN AS className=""    ***************/


{/******** FUNCTION BASED COMPONENT ***********/}


const ToDoScreen = () => {

    // const [taskCount, setTaskCount] = useState(0);

    const [taskList, setTaskList] = useState([]);

    {/**** HERE taskCount IS THE STATE VARIABLE AND setTaskCount IS THE SETTER FUNCTION WHICH IS USED TO MODIFY THE VALUE OF taskCount ****/}
    {/**** ON RHS useState FUNCTION IS CALLED WITH A DEFAULT / INITIAL VALUE AS ARGUMENT  *****/}

    let addNewTask = (task) => {
        setTaskList([...taskList,{...task, createdDate: new Date()}]);
    }

    return (
        
        <>

        <div className="screens">
            <h1 className="ui heading center"> To Do List</h1> 
                    {/* ui heading is pre-defined class of semantic ui  */}
        
            <div>
                <button onClick={
                    (e) => {

                        // setTaskCount(taskCount + 1);

                        setTaskList([...taskList,
                            {
                                title: "Go to gym",
                                description: "Going to gym is good for muscle growth",
                                createdDate: new Date(),
                            }
                        ])

                    }
                } className="ui secondary button">Add Task</button>
                        {/* ui secondary button is pre-defined class of semantic ui  */}
        
                {/* <p>The number of tasks are: {taskCount}</p> */}

                <p>The number of tasks are: {taskList.length}</p>

                <section>

                    <div className="ui cards">

                        {taskList.map((task) => <Task task = {task}/>)}

                    </div>

                </section>

                {/* ui cards IS SEMANTIC UI PREDEFINED CARD CSS */}

                {/* THEN WE HAVE TO PASTE WHOLE CARD CONTENT IN Task.js   */}

        
                            
            </div>    
        
            {/* <AddTask onSubmit={addNewTask}/> */}
        </div>
        

        </>
    )

}

export default ToDoScreen;

