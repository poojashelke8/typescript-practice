import './App.css';
// import Greet from './Components/Greet';
// import Greet2 from './Components/Greet2';
// import User from './Components/User';
import Form from './Components/Form';

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
    <Form/>
    </div>
  );
}

export default App;
