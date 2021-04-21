import React,{useState} from 'react'

export default function Complain(props) {
    
    const{name,crime}=props
    const [check,setCheck]=useState(false)
    
    return (
        <div className={`container ${check&&'strike'}`} >
           <h1>{name}</h1>
           <p>{crime}</p>
           <input checked={check} onChange={()=>setCheck(!check)} type="checkbox" name="" id=""/> <span>Forgive</span>
        </div>
    )
}
///strike
