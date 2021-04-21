import './App.css';
import React,{useState} from 'react'
import Complain from './Complain'
function App() {
  const[name,setName]=useState('')
  const[crime,setCrime]=useState('')
  
  const [complains,setComplains]=useState([])

const handleSubmit=(e)=>{
  e.preventDefault()
  

  setComplains([...complains,{name,crime}])
  setName('')
  setCrime('')
}

  return  <>
          <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control"  />
            
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Complain</label>
            <input value={crime} onChange={(e)=>setCrime(e.target.value)} type="text" className="form-control" />
          </div>
        
          <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
          <h1>Number of Complains:{complains.length}</h1>
        {complains.map(complain=><Complain {...complain}/> )}

      </>
  
}

export default App;
