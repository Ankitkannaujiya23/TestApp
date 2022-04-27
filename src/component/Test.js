import React from 'react'
import { useState } from 'react'

const Test = () => {

    const [toggle, setToggle] = useState(true)
    console.log(toggle);

  return (

    <div>
        <div className="d-flex mt-5 mx-5">
    {!toggle ? <label className='mx-2'>Sum</label> :""}
       
        
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>setToggle(!toggle)} />
  {toggle ?<label className='mx-2'>Modal Premium</label>:"" }
 
</div>
{toggle ? <input type="number" className='mx-2' placeholder='enter sum assured'  /> : <input type="number" className='mx-2' placeholder='enter Modal Premium'  />}
        
    </div>

    </div>
  )
}

export default Test