import React, { useState } from 'react'
import './App.css'   // 👈 CSS import kiya

const App = () => {
  let [input,setInput] = useState("")
  let [todos,setTodo] = useState([])
  let [btn,setBtn] = useState(true) 
  let [index,setIndex] = useState(null)

  let handleAddorupadate = ()=>{
    if(input.trim() == "") return alert("input is empty");
    if(btn){
      let exit = todos.includes(input)
      if(exit){
        alert("Alraedy task exists") 
      }else{
        setTodo([...todos,input])
        setInput("")
      }
    }else{
      let newarray = [...todos]   
      newarray[index] = input
      setTodo(newarray)
      setIndex(null)
      setBtn(true)
      setInput("")
    }
  }

  let handleEdit = (i)=>{
    setInput(todos[i])
    setIndex(i)
    setBtn(false)
  }

  let handleRemove = (index)=>{
    let aray =  todos.filter((_,i) => i != index )
    setTodo(aray)
  }
  let handleClearALL = ()=>{
    setTodo([])
    alert("pls enter a task")
  }

  return (
    <>
      <div className="container">
        <h1 className="title">✨ My Todo List</h1>
        <div className="input-box">
          <input type="text" onChange={(e)=> setInput(e.target.value)} value={input}/>
          <button onClick={handleAddorupadate}>
            { btn ? "Add" : "Update" }
          </button>
          <button onClick={handleClearALL}>Clear All</button>
        </div>

        <ul className="todo-list">
          {
            todos.map((e,i)=>{
              return(
                <div key={i} className="todo-item">
                  <li>{e}</li>
                  <div className="btn-group">
                    <button onClick={()=>handleEdit(i)} className="edit-btn">Edit</button>
                    <button onClick={()=>handleRemove(i)} className="remove-btn">Remove</button>
                  </div>
                </div>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
