import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className='grandParent'>
     <div className="border">
     Hello this is border box
     </div>
     <h1>Hello</h1>
       <div className='child'>
         <input className='input1' disabled type="text"/>
         <input className='input2' type="text"/>
       </div>
       <div className='background'>

       </div>
       <div className='var'>
         a;lkdjfl;aksjfa;slfjal;fsdfjka;f
       </div>
     </div> 
    )
  }
}

export default App;
