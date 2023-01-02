import React, {useState} from 'react';
import Sign from './Sign';



function Service(){

  const[data,setdata]=useState(null)
  const[Print,setPrint]=useState(false)

  const[show, setshow]=React.useState(null)

  function getData(val){

    console.log(val.target.value)
    setdata (val.target.value)
    setPrint(false)
  }


  return (

<div >

<input type="text" className='inout' placeholder="Enter Full name" onChange={getData}/> 

<br></br>
<br></br>

<button onClick={()=>setPrint(true)} className="submit1 bn29" > submit</button>

<br></br>

<button onClick={()=>setshow(!show)} className="submit2 bn292">Next</button>

{
show?

   <div className='sbox'>

      
        <h1 className='sh1 RGB '>Pankaj S. Waghamabare</h1>
        
        <p className='shp dance1'> is whishing you have great </p>

        <img src='Hny.png' alt='Hny' className='Hny dance'></img>

        {
    Print? 
    <div className='divborder'>
   <h1 className='h1data'> To {data}</h1>
   </div>
   :null
   }


        <Sign getData={getData}/>

   

   </div>

   :null

  }


</div>

  );
}

export default Service;


