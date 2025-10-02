import React, { useState } from 'react';
import './App.css';

const App = () => {

    let [input, setInput] = useState("");
    let [inputtwo, setInputtwo] = useState("");

    let [arr, setArr] = useState(JSON.parse(localStorage.getItem("Data")) || []);

    let hendleSendl = () => {
        let laft = { id: "you", msg: input };
        setArr([...arr, laft]);
        setInput("");
        localStorage.setItem("Data",JSON.stringify(arr))
    };

    let hendleSendr = () => {
        let right = { id: "Resiver", msg: inputtwo };
        setArr([...arr, right]);
        setInputtwo("");
        
      };
      localStorage.setItem("Data",JSON.stringify(arr))

    return (
        <div className="main">
            <div className="mainl">
                <div className="name">CHAT SEND</div>
                <div className="main_msgl">
                    <div className="chat-boxl">
                        {
                            arr.map((e, key) => (
                                <div key={key} className="divone">
                                    <h1 id={e.id}>{e.msg}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Type here..." value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className="btn-l" onClick={hendleSendl}>Send</button>
                    </div>
                </div>
            </div>

            <div className="mainr">
                <div className="name">CHAT RESIVER</div>

                <div className="main_msgr">
                    <div className="chat-boxr">
                        {
                            arr.map((e, key) => (
                                <div key={key} className="divtwo">
                                    <h1 id={e.id}>{e.msg}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Type here..." value={inputtwo} onChange={(e) => setInputtwo(e.target.value)} />
                        <button className="btn-r" onClick={hendleSendr}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;