import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upper case!","success");
    }
    const handledownClick=()=>{
      
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lower case!","success");
    }
    const handleclearClick=()=>{
        
        let newtext="";
        setText(newtext);
        props.showAlert("cleared All!","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
    }
    const handleExtraspaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState("");
    let x=text.split(" ").length;
    if(text[text.length-1]===" ")x--;
    if(text.length===0)x=0;
  return (
    <>
    <div class="container " style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div class="mb-3">
      
      <textarea class="form-control" value={text} onChange={handleOnChange}id="mybox" rows="10"  style={{backgroundColor:props.mode==='light'?'white':'#2d2828',color:props.mode==='dark'?'white':'black'}}></textarea>
     <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to upper case</button>
     <button className="btn btn-primary mx-2 my-3" onClick={handledownClick}>Convert to lower case</button>
     <button className="btn btn-primary mx-2 my-3" onClick={handleclearClick}>Clear</button>
     <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy</button>
     <button className="btn btn-primary mx-2 my-3" onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div >
    </div>
    <div className="container my-5"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
   
    <p>{x} words and {text.length} characters</p>
    <p>Takes {0.008*(text.split(" ").length)} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length===0?"Enter something to preview here": text}</p>
    </div>
    </>  
  )
}
