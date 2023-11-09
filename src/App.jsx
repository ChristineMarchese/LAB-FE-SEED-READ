// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import IndexPage from './components/IndexPage';
import NewPage from './components/NewPage';
import ShowPage from './components/ShowPage';
import EditPage from './components/EditPage'

// import './App.css'

function App() {
 

  return (
    <>
    <Router>
       <NavBar />
     <Routes>
      <Route path= "/songs" element={<IndexPage/>}/>
      <Route path= "/songs/:id" element={<ShowPage/>}/>
      <Route path= "/songs/new" element={<NewPage/>}/>
      <Route path= "/songs/:id/edit" element={<EditPage/>}/>
     </Routes>
    </Router> 
    </>
  )
}

export default App
