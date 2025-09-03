// import React, { useState } from "react";

// const App = () => {
//   let [input,setInput] = useState("")
//   let [todos,setTodo] = useState([])
  
//   let handleButton = ()=>{
//     setTodo([...todos,input])
//     setInput("")
//   }
//   return (
//    <>
//    <input type="text" onChange={(e)=> setInput(e.target.value)} value={input}/>
//    <button onClick={handleButton}>Add</button>


//    <ul>
//     {
//       todos.map((e,i)=>{
//         return(
//           <div key={i}>
//             <li>{e}</li>
//           </div>
//         )
//       })
//     }
//    </ul>
//    </>



//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let [input,setInput] = useState("")
//   let [todo,setTodo] = useState([])
//   let [btn,setBtn] = useState(true)

//   let Add = ()=>{
//     setTodo([...todo,input])
//     setInput("")
//     if(input == ""){
//     setTodo([...todo])
//     alert("Pls enter a value....")
//     }
//   }

//   let handleRemove = (i)=>{
//     setTodo(todo.filter((_,k)=>k !== i))
//   }
//   let handleEdit = (i)=>{
//     setInput(todo[i])
//     setBtn(i)
//   }
//   let handleSave = (i)=>{
//     todo[i] = input
//     setTodo([...todo])
//     setBtn(!btn)
//     setInput("")
//   }

//   let cAll = () => {
//     setTodo([])
//   }
//   return (
//     <>
//     <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
//     <button onClick={Add}>Add</button>
//     <button onClick={cAll}>clear all</button>

//     <ul>
//       {
//         todo.map((e,i)=>{
//           return(
//             <div key={i}>
//               <li>{e}</li>
//               <button onClick={()=>handleRemove(i)}>Remove</button>
              
//               {
//                btn === i ? <button onClick={()=>handleSave(i)}>Save</button> :
//               <button onClick={()=>handleEdit(i)}>Edit</button>
//               }
              
//             </div>
//           )
//         })
//       }
//     </ul>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  let [input,setInput] = useState("")
  let [todo,setTodo] = useState([])
  let [btn,setBtn] = useState(true)
  let [index,setIndex] = useState(null)

  let Addorupadate = ()=>{
    if(btn && input != ""){
      setTodo([...todo,input])
      setInput("")
    }
    else if(input == ""){
      alert("pls enter a value")
  
    }
    else{
      setBtn(true)
      todo[index] = input
      setInput("")
      setTodo([...todo])
    }
  }
  
  let handleRemove = (i)=>{
    setTodo(todo.filter((_,k)=>k !== i))
  }
  let handleEdit = (i)=>{
    setInput(todo[i])
    setBtn(false)
    setIndex(i)
  }
 

  let cAll = () => {
    setTodo([])
  }
  return (
    <>
    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
    <button onClick={()=>Addorupadate()}>{
      btn ? "Add" : "Update"  
      }</button>
    <button onClick={cAll}>clear all</button>

    <ul>
      {
        todo.map((e,i)=>{
          return(
            <div key={i}>
              <li>{e}</li>
              <button onClick={()=>handleRemove(i)}>Remove</button>
              <button onClick={()=>handleEdit(i)}>Edit</button>
              
              
            </div>
          )
        })
      }
    </ul>
    </>
  )
}

export default App