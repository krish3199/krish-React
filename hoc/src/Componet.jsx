import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Componet = (Displya,url) => {
    let [movie,setMovie] = useState([])
    let [flag,setFlag] = useState(true)
    return function KBC(){
        useEffect(()=>{
        flag ? axios.get(url)
            .then((res)=>{
                setMovie(res.data.results)
                setFlag(false)
            })
            .catch((err)=>{
                console.log(err);
                
            }) : null
        },[])
        return < Displya value={movie}/>
    }
 
}

export default Componet
