import Main from './assets/components/Main'
import EditNote from './assets/components/EditNote'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
function App() {
  

  return (
    <BrowserRouter>   
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/editNote/:id' element={<EditNote/>}/>         
            
      </Routes>
    </BrowserRouter>
  )
}

export default App
