import './Caculator.module.css';
import { useState } from 'react';

const Caculator = () => {
    const [result, setresult] = useState("");

    const handleClick = (e) => {
        setresult(result.concat(e.target.name));
    }

    const clear = () => {
        setresult('')
    }
    const removeListener = () => {
        setresult(result.slice(0, -1))
    }
    const results = () => {
        try {
            setresult(eval(result).toString())
        }
        catch {
            alert('Error!')
        }
    }
    return (
        <div className="Container">
            <from>
                <input type="text" value={result} />
            </from>
            <div className="keyBoard">
                <button onClick={clear} id="clear" className="blue">Clear</button>
                <button onClick={removeListener} className="blue" >C</button>
                <button onClick={handleClick} name="/" className="blue">&divide;</button>
                <button onClick={handleClick} name="7">7</button>
                <button onClick={handleClick} name="8">8</button>
                <button onClick={handleClick} name="9">9</button>
                <button onClick={handleClick} name="*" className="blue">&times;</button>
                <button onClick={handleClick} name="4">4</button>
                <button onClick={handleClick} name="5">5</button>
                <button onClick={handleClick} name="6">6</button>
                <button onClick={handleClick} name="-" className="blue">&ndash;</button>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleClick} name="2">2</button>
                <button onClick={handleClick} name="3">3</button>
                <button onClick={handleClick} name="+" className="blue">+</button>
                <button onClick={handleClick} name="0">0</button>
                <button onClick={handleClick} name=".">.</button>
                <button onClick={results} id="result" className="blue">=</button>
            </div>
        </div>
    );
}

export default Caculator;