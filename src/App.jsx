import React from 'react'
import Topbar from './components/Topbar'
import All from './components/All'
import FullStackDevelopment from './components/FullStackDevelopment'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

function App() {
  return <>
  

  <BrowserRouter>
  <Topbar/>
  <br/><br/>
    <Routes>
      <Route path='/all' element={<All/>}></Route>
      <Route path='/fullstackdevelopment' element={<FullStackDevelopment/>}></Route>
      <Route path='/datascience' element={<DataScience/>}></Route>
      <Route path='/cybersecurity' element={<CyberSecurity/>}></Route>
      <Route path='/career' element={<Career/>}></Route>
      <Route path='*' element={<Navigate to='/all'/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}


export default App