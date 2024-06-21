import { Component, useState } from "react";

import ToDoScreen from "./screens/ToDoScreen";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AddTask from "./components/AddTask";

            { /* CLASS BASED COMPONENTS */ }
            
            
// class App extends Component{
//     render() {
//         return(
//             <ToDoScreen/>
//         )
//     }

// }


            { /* FUNCTIONAL BASED COMPONENTS */ } 
            
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <ToDoScreen />,
        },

        {
            path: "/add-task",
            element: <AddTask />,
        },
    ]
)

{/*** WE ARE PASSING ARRAY OF OBJECTS IN THAT FUNCTION  ******/}

const App = () => {
    cosnt [tasks, setTasks] = useState([]);
    
    return <RouterProvider router={router} />;
}
            
            

export default App;

