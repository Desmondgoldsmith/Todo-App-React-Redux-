import React from 'react';
import './App.css';
import Todo from './app/Components/Todo';
import Todocontent from './app/Components/Todocontent';
import {Toastr} from 'reactjs-toastr/lib/react-toast';
function App() {
  return (
    <>
    <div className="App">
     <Todo />
     <Todocontent/>
      </div>
     <Toastr/>
    </>
  );
}

export default App;
