import React from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer'

import { Switch, Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min.js'
import Home from './components/home.jsx'

export default function App() {
  
  return (
    <div>
      
       <Navbar />
      
      

      <Switch>

        <Route exact path="/">
        <Home/>
          {/* <Home theArr={destinationList} /> */}
          {/* <UnderConstruction /> */}
          
        </Route>

      </Switch>
      
       <Footer />



    </div>
  )
}
