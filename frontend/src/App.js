import './App.css';
import React from 'react'
import {Route} from "react-router-dom"
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';
function App() {  
  return (
   <div className='App'>
   <Route path="/" component={Homepage} exact/>
   <Route path="/chats" component={ChatPage} />

   </div>
  );  
}

export default App;
