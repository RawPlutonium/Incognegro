import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatDisplay from './components/ChatDisplay';

function App() { 
  const chat = {
   "user": "Leo",
    "chat":"this is a chat"
  }
  return (
    <div>
      <Navbar />
      <ChatDisplay chat={chat}/>
      <Footer />
    </div>
  );
}

export default App;
