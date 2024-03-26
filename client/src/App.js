import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import FirstPage from './Components/FirstPage';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' exact Component={Register}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/firstPage' exact Component={FirstPage}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
