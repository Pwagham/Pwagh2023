import React from 'react';
import { Container } from 'react-bootstrap';
import {useState} from 'react'


function Sign(props) {

  const[name,setname]= useState();
  function handleSumbit(e){
    e.prevenDefualt();
    props.getData(name)

  }
  

   
  return (

    <div className="App">

        <form onSubmit={handleSumbit}>

          <Container className="con">

         <label className="font-effect-outline">Title</label> 

         <br></br>

         <select>
          <option className="input">Mr</option> 
          <br></br>
          
          <option className="input">Mrs</option>
          <option className="input">Miss</option>
          </select>  
          <br></br>

        <lable className="font-effect-outline"> First name :</lable> 
        <br></br>
        <input type="text" className="input"></input>
        <br></br>

        <lable className="font-effect-outline"> Last name :</lable> 
        <br></br>
        <input type="text" className="input" value={name} onChange={(e)=> {setname(e.target.value)}}></input>
        <br></br>

        {/* <lable className="font-effect-outline"> Email id :</lable> 
        <br></br>
        <input type="email" className="input"></input>
        <br></br>

        <lable className="font-effect-outline"> Paasword :</lable> 
        <br></br>
        <input type="password" className="input"></input>
        <br></br>
        <br></br> */}

        

        <button type='submit' className="submit font-effect-shadow-multiple" onSubmit={handleSumbit} >submit</button>

        <br></br>
       
        <button type='reset' className="submit font-effect-shadow-multiple">clear</button>

        </Container>

      </form>

      <h1></h1>

    </div>

  );
}

export default Sign;












