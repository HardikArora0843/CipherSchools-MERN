import logo from './logo.svg';
import './App.css';


function App() {

  const name = "CipherSchools!";
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    
    <div>
      <h1>Hello from CipherSchools!</h1>
      <h1>Hello from {name}</h1>     {/* WE CAN ACCESS VARIABLE VALUE BY THIS */} 
      
      <h1 style={         

        {
          color: "red",
          textAlign: "center",
        }

      }>Hello</h1>

      {/* STYLE ATTRIBUTE IS USED AS OBJECT HERE , 1ST CURLY BRACES REPRESENTS THAT WE HAVE TO WRITE SOMTHING IN JS AND 2ND REPRESENTS OBJECT */}

      {/* WE CAN NOT MAKE ANOTHER DIV IN JSX AS JSX ELEMENTS HAVE TO BE WRAPPED IN 1 PARENT ELEMENT ONLY  */}
      
    </div>
    
  );
}


export default App;
