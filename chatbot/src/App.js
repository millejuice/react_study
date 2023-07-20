import { useState } from 'react';
import './App.css';
import {sendMessageToOpenAI} from './openai.jsx'

function App() {
  const [input,setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const handle = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      {text : input, isUser : true},
      {text : response, isUser : false},
    ]);
    console.log(response);
    setInput("");
  };

  return (
    <div className="App">
      <div className='chat'>
        {/* chat div안에서는 사용자와 chatbot 사이의 message들 다룰 예정 */}
        {messages.map((messages, index)=>(
          <div key={index} className={messages.isUser? "user-message" : "bot-message"}>
            {messages.text}
          </div>
        ))}
      </div>
      
      <div className='input-container'>
        <input type="text"
        placeholder='Ask a Question'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button className='button' 
      onClick={handle}>
        send
      </button>
      </div>
    </div>
  );
}

export default App;
