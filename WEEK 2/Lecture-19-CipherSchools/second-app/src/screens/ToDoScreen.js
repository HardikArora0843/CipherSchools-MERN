
import { Component } from "react";

class ToDoScreen extends Component{

    taskCount=0;

    state = {
        taskCount:0,
    };

    render() {
        return (
            <div className="screens">
                <h1 className="ui heading center"> To Do List</h1> 
                            {/* ui heading is pre-defined class of semantic ui  */}

                <div>
                    <button onClick={
                        (e) => {

                            // console.log("Add Task button is clicked");
                            // this.taskCount++;
                            // console.log(this.taskCount);
                            
                            /***** HERE IN CONSOLE WHENEVER WE WILL CLICK BUTTON TASKCOUNT WILL INCREASE AND WILL PRINT IN CONSOLE **********/
                            
                            /********  CORRECT WAY TO INCREASE VALUE OF TASKCOUNT  ***********/
                            
                            
                            console.log("Add Task button is clicked");
                            this.setState(
                                {
                                    ...this.state,
                                    taskCount: this.state.taskCount + 1,
                                }

                            );

                            console.log(this.state.taskCount);
                            

                        }
                    } className="ui secondary button">Add Task</button>
                            {/* ui secondary button is pre-defined class of semantic ui  */}

                    <p>The number of tasks are: {this.taskCount}</p>

                    {/* HERE IT IS SUPPOSED TO INCREASE TASKCOUNT BUT IT IS NOT INCREASING */}
                    
                    <p>The number of tasks are: {this.state.taskCount}</p>

                    
                </div>    

            </div>
        )
    }
}


/*******  IN JSX VARIABLE KI VALUE KO DYNAMICALLY INCREASE KARNE KE LIYE STATE VARIABLE MEIN RAKHNA HOTA HAI  ***********/

/*********  IN JSX class="" IS WRITTEN AS className=""    ***************/

export default ToDoScreen;

