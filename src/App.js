

import Landing from './pages/Landing';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <div>Dashboard</div>}/>
    <Route path='/register' element={ <div>Dashboard</div>}/>
    <Route path='/Landing' element={ <Landing/>}/>
    <Route path='/' element={ <div>Dashboard</div>}/>
           
  </Routes>
  </BrowserRouter>
  )
   
}

export default App;
