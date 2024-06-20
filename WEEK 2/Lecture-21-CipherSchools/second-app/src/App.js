import { Component } from "react";

import ToDoScreen from "./screens/ToDoScreen";

            { /* CLASS BASED COMPONENTS */ }
            
            
// class App extends Component{
//     render() {
//         return(
//             <ToDoScreen/>
//         )
//     }

// }


            { /* FUNCTIONAL BASED COMPONENTS */ }   


const App = () => {
    return <ToDoScreen />;
}
            
            

export default App;

