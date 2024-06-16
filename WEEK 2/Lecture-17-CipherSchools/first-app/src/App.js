import logo from './logo.svg';
import './App.css';

import { Component } from "react";      {/* we have to import component from react, to create a component */}

// function App() {

//   const name = "CipherSchools!";
//   return (

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

    

//     <div>
//       <h1>Hello from CipherSchools!</h1>
//       <h1>Hello from {name}</h1>     {/* WE CAN ACCESS VARIABLE VALUE BY THIS */} 
      
//       <h1 style={         

//         {
//           color: "red",
//           textAlign: "center",
//         }

//       }>Hello</h1>

//       {/* STYLE ATTRIBUTE IS USED AS OBJECT HERE , 1ST CURLY BRACES REPRESENTS THAT WE HAVE TO WRITE SOMTHING IN JS AND 2ND REPRESENTS OBJECT */}

//       {/* WE CAN NOT MAKE ANOTHER DIV IN JSX AS JSX ELEMENTS HAVE TO BE WRAPPED IN 1 PARENT ELEMENT ONLY  */}
      
//     </div>
    
//   );
// }

class App extends Component{
  
  name = "CipherSchools"

  render() {
    return (

      <>

      <div>
        <h1>This is CipherSchools!</h1>
        <h1>This is {this.name}</h1>
      </div>

      <div>
        <p>This is paragraph and name is: {this.name}</p>
      </div>

      </>
    )
  }

}

{/* we have to extend Component class */}

// there must be a render function inside which it should return something and that must be the UI of Application

// This App Component acts like a function means wherever we will use App that will act. In index.js file if we will write App again then content will repeat

export default App;
