import React from "react";
import './App.css';
 import './wavy.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Student from './Student';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";

function App() {
  return (


    <div className="App">
      <div className="wavy">
<span  >W</span>
<span >E</span>
<span >L</span>
<span >C</span>
<span >O</span>
<span >M</span>
<span>E</span>
<span></span>
<span >U</span>
        <span >S</span>
        <span >E</span>
        <span >R</span>
        <span >.</span>
        <span >.</span>
        <span >.</span>
</div>
      <BrowserRouter>
      <Routes>

    <Route path='/' element={<Student />}></Route>
    <Route path='/create' element={<CreateStudent />}></Route>
    <Route path='/update/:id' element={<UpdateStudent />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
