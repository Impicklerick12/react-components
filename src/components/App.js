import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import "../styles/index.css"

import {
  Navbar,
  RandomQuote,
  YellingGreeting,
  BitcoinTracker,
  Form,
  Hooks,
  Calculator,
  CurrencyConverter
} from './export'

import faker from "faker"
import Comment from './Comment'
import BuzzyButton from './BuzzyButton'
// import ColorSelector from './ColorSelector'
import Canvas from './Canvas'
import Plaque from './Plaque'
import UseEffect from "./UseEffect"

// const App = () => {
//     return(
//       // Comments Example
//       // <div className="comments">
//       //     <Comment 
//       //       author="Callum Worall"
//       //       text="You are awesome"
//       //     />
//       //     <Comment 
//       //       author="Ashley"
//       //       text="You are nice"
//       //     />
//       //     <Comment 
//       //       author="Sevda"
//       //       text="You are nice"
//       //     />
//       // </div>

//       // YellingGreeting Challenge
//       // <div className='titile'>
//       //   <YellingGreeting message="this is my inside voice!" />
//       // </div>

//       // Buzzy Button App
//       // <BuzzyButton />

//       // RandomQuote Generator
//       // <RandomQuote />
//     )
// }

const App = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/randomquote" component={() => <RandomQuote />} />
          <Route exact path="/yellinggreeting" component={() => <YellingGreeting />} />
          <Route exact path="/bitcointracker" component={() => <BitcoinTracker />} />
          <Route exact path="/calculator" component={() => <Calculator />} />
          <Route exact path="/currencyconverter" component={() => <CurrencyConverter />} />
        </Switch>
      </Router>
    )
}

export default App