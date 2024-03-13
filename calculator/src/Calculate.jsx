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
    <div className="calculator-div">
        <h2 className="calculate-h2">Calculator</h2>
        <h2 className="calculator-h2">Standard</h2>
        <p className="calculate-p">{calculat}</p>
        <div className="calculate-button">
            <button onClick={()=>calculation("(")} className="open-brace">(</button>
            <button onClick={()=>calculation(")")} className="open-brace">)</button>
            <button onClick={clear} className="x">x</button>
            <button onClick={()=>calculation("%")} className="module">%</button><br/>
            <button onClick={()=>calculation(7)} className="seven">7</button>
            <button onClick={()=>calculation(8)} className="eight">8</button>
            <button onClick={()=>calculation(9)} className="nine">9</button>
            <button onClick={()=>calculation('*')} className="star">*</button><br/>
            <button onClick={()=>calculation(4)} className="four">4</button>
            <button onClick={()=>calculation(5)} className="five">5</button>
            <button onClick={()=>calculation(6)} className="six">6</button>
            <button onClick={()=>calculation('-')} className="minus">-</button><br/>
            <button onClick={()=>calculation(1)} className="one">1</button>
            <button onClick={()=>calculation(2)} className="two">2</button>
            <button onClick={()=>calculation(3)} className="three">3</button>
            <button onClick={()=>calculation('+')} className="pluse">+</button><br/>
            <button onClick={()=>calculation('/')} className="over">/</button>
            <button onClick={()=>calculation(0)} className="zero">0</button>
            <button onClick={()=>calculation('.')} className="point">.</button>
            <button onClick={()=>result()} className="equal">=</button><br/>
        </div>
    </div>
    </>
)
}
export default Calculate