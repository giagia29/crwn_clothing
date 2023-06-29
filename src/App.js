import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign_in/sign_in.component";

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  )
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
