import { useState } from "react";

import { ChangeEvent } from "react";
import "../css/Message.css"


function FetchData(){

    const [inputText, setInputText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        //  Store the input value to local state
        setInputText(e.target.value);
      };

    const req={
        method: 'POST',
        body: JSON.stringify({ "name":inputText}),
        headers: { 'Content-Type': 'application/json' }
        
    };

    const url="http://127.0.0.1:2345/price";

    const [data, setData] = useState(0);
    
    const eventHandler=()=>{
    fetch(url, req).then((res=>{
        return res.json();
    })).then(price=>{
        console.log(price);
        setData(price as unknown as number);
        
    });
    }
    return (
        <>
        <br />
        <input onChange={handleChange} value = {inputText} className="s3"></input>
        <h1 className="s4">{data}</h1>
        <button onClick={eventHandler} className="s2">Query</button>
        </>
    )

    
}

export default FetchData;