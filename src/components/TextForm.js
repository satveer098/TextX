import React ,{useState}from "react";



export default function TextForm(props) {
    const handleUpclick=()=>{
      
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase successfully","success");
        

    }
    const handleLowclick=()=>{
       
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase successfully","success");
        

    }
    const clearText=()=>{
        
        
        setText('');
        props.showAlert("Text cleared","success");
        

    }
    const handleOnchange=(event)=>{
        
        setText(event.target.value);
    }
    const copyText=()=>{
       
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied","success");
  }
  const handleExtraSpaces=()=>{
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra spaces has been removed","success");
    
}

  const [text ,setText]=useState('');
  
  
  return (
    <>
    <div className="container"  style={{
           
            color:props.mode==="light"?"black":"white"
          }}>
      <h1 className="mb-4">{props.heading}</h1>
       
      <div className="mb-3" >
       
        <textarea
          className="form-control"
          id="mybox"
          style={{
            backgroundColor:props.mode==="light"?"white":"#13466e",
            color:props.mode==="light"?"black":"white"
          }}
          rows="8" value={text} onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={copyText}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces </button>
      
      
    </div>
    <div className="container my-3"  style={{
           
            color:props.mode==="light"?"black":"white"
          }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0;
        }).length} words, {text.length} characters</p>
        <p>{text.split(/\s+/).filter((element)=>{
             return element.length!==0;
        }).length*0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>
    </>
  );
}
