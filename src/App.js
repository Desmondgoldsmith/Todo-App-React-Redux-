import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Todo from './app/Components/Todo';
import Todocontent from './app/Components/Todocontent';

function App() {
  return (
    <>
    <div className="App">
     <Todo />
     <Todocontent/>
      </div>
     <Toaster toastOptions={{
      style: {
        fontSize: '18px',
      }
     }}/>
    </>
  );
}

export default App;
