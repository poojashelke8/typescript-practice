import { profile } from 'console';
import './App.css';
// import Greet from './Components/Greet';
// import Greet2 from './Components/Greet2';
// import User from './Components/Context/User';
// import Form from './Components/Form';
// import { ContextProvider } from './Components/Context/ThemeContext';
// import Box from './Components/Context/Box';
// import { ContextProvider } from './Components/Context/ThemeContext';
// import User from './Components/Basics/User';
import Private from './Components/Componenet_prop/Private';
import Profile from './Components/Componenet_prop/Profile';

function App() {
// const PersonName = {
//   first:"Adarsh",
//   last:"Singh"
// }

// const Namelist = [
//   {
//     first:"Adarsh",
//     last:"Singh"
//   },
//   {
//     first:"Aayush",
//     last:"Singh"
//   },
//   {
//     first:"Babita",
//     last:"Singh"
//   },

// ]

  return (
    <div className="App">
      Hello world
      {/* -----Individual types------- */}
      {/* <Greet name='Pooja' messagecount={5} isloggedin={true} />  */}

      {/* -------Objects------ */}
      {/* <Greet name={PersonName}/> */}

      {/* ----------Array of object-------------- */}
      {/* <Greet name={Namelist}/> */}


      {/* Passing another component as a parameter to component */}
      {/* <Greet>
        <Greet2>Hey greet2</Greet2>
      </Greet> */}
    {/* <User/> */}
    {/* <Form/> */}

    {/* <ContextProvider>
      <Box/>
    </ContextProvider> */}

    {/* <ContextProvider>
      <User/>
    </ContextProvider> */}
    <Private isloggedin={true} component={Profile}/>
    </div>
  );
}

export default App;
