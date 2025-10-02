import React from 'react'

const Displya = (movie) => {
    let data = movie.value
    console.log(data)
  return (
    <div>
      {
        data.map((e,i)=>{
            return(
                <div key={i}>
                    <h1>{e.original_title}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default Displya
