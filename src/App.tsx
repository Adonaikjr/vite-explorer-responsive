import { useState } from 'react'
import Home from './page/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle  from './GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
  <GlobalStyle/>
      <Routes>
      <Route path='/' element={ <App/> }/>
     <Route path ='/Home' element={ <Home/> } />
      </Routes>
   
    </BrowserRouter>
  )
}

export default App;
