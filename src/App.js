import React,{useState} from 'react'

function App() {

  const [calc,setcalc]=useState("");
  const [result,setresult]=useState("");
  const ops=['/','*','+','-','.'];

  const updatecalc=value=>{
    
    if(
      ops.includes(value)&& calc===''||
      ops.includes(value)&& ops.includes(calc.slice(-1))
    ){
      return;
    }
    setcalc(calc+value);

    if(!ops.includes(value)){
      setresult(eval(calc+value))
    }
  }

  const createdigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={()=>updatecalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits
  }

  const calculate=()=>{
    setcalc(eval(calc).toString())
  }
  const deletelast=()=>{
    if(calc===""){
      return;
    }
    const value=calc.slice(0,-1);
    setcalc(value);
  }
  const wipe=()=>{
    setcalc("");
    setresult("")
  }

  return (
    
    <div className='App' >
     <div className='calculator'>
     <div className='display'>
     {result?<span>({result})</span>:""} {calc||"0"}
     </div>
    <div className='operators'>
    <button onClick={wipe}>CE</button>
    <button onClick={()=>updatecalc('/')}>/</button>
    <button onClick={()=>updatecalc('*')}>*</button>    
    <button onClick={()=>updatecalc('-')}>-</button>
    <button onClick={()=>updatecalc('+')}>+</button>

    <button onClick={deletelast}>DEL</button>
    
    </div>

    <div className='digits'>
    
    {createdigits()}
    <button onClick={()=>updatecalc('0')}>0</button>
    <button onClick={()=>updatecalc('.')}>.</button> 
    <button onClick={calculate}>=</button>
    
    </div>

     </div>
    </div>
  );
}

export default App;
