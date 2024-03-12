import { useState } from "react"

function Calculate(){
    const [calculat,setCalculat] = useState("")

    function calculation(num){
        setCalculat(calculat+num)
        
        
    }
    function result(){
     let x = eval((calculat));
     setCalculat(x)
    
    }
    function clear(){
        setCalculat("")
    }
   
return (
    <>
    <div>
        <h2>Calculator</h2>
        <h2>Standard</h2>
        <p>{calculat}</p>
        <div>
            <button onClick={()=>calculation("(")} className="open-brace">(</button>
            <button onClick={()=>calculation(")")}>)</button>
            <button onClick={clear}>x</button>
            <button onClick={()=>calculation("%")}>%</button><br/>

            <button onClick={()=>calculation(7)}>7</button>
            <button onClick={()=>calculation(8)}>8</button>
            <button onClick={()=>calculation(9)}>9</button>
            <button onClick={()=>calculation('*')}>*</button><br/>
            <button onClick={()=>calculation(4)}>4</button>
            <button onClick={()=>calculation(5)}>5</button>
            <button onClick={()=>calculation(6)}>6</button>
            <button onClick={()=>calculation('-')}>-</button><br/>
            <button onClick={()=>calculation(1)}>1</button>
            <button onClick={()=>calculation(2)}>2</button>
            <button onClick={()=>calculation(3)}>3</button>
            <button onClick={()=>calculation('+')}>+</button><br/>
            <button onClick={()=>calculation('/')}>/</button>
            <button onClick={()=>calculation(0)}>0</button>
            <button onClick={()=>calculation('.')}>.</button>
            <button onClick={()=>result()}>=</button><br/>
        </div>
    </div>
    </>
)
}
export default Calculate