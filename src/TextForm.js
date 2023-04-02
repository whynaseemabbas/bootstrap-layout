import React, { useState } from 'react'

function TextForm (props) {

    const [text ,setText] =useState("")

    const textClick =()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(": Converted to UpperCase","success")
    }
  
    const lowerText =()=>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert(": Converted to LowerCase","success")

    }
  
    const clearText =()=>{
      let newText = ""
      setText(newText)
      props.showAlert(": Text Cleared","success")
    }

    const copyText =()=>{
     var text= document.getElementById('box');
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert(": Text Copied","success")
    }

    const removeSpaces =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert(": Spaces removed","success")
    }
  
   const handleOnChange=(event)=>{
    setText(event.target.value)
   }

  return (
    <div style={{color: props.mode==='light'?'black':'white'}}>
    <div className=" d-flex flex-column justify-content-center align-self-center ">
      <h3>{props.title}</h3>
    <textarea rows={8} value={text} id='box' onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#f8f9fa':'gray',color: props.mode==='light'?'dark':'light'}} />
    </div>
    <div className='mt-3'>
    <button disabled={text.length===0} className='mx-2 my-1 text-white bg-primary' onClick={textClick}>Upper Case</button>
    <button disabled={text.length===0} className='mx-2 my-1 text-white bg-primary' onClick={lowerText}>Lower Case</button>
    <button disabled={text.length===0} className='mx-2 my-1 text-white bg-primary' onClick={clearText}>Clear Text</button>
    <button disabled={text.length===0} className='mx-2 my-1 text-white bg-primary' onClick={copyText}>Copy Text</button>
    <button disabled={text.length===0} className='mx-2 my-1 text-white bg-primary' onClick={removeSpaces}>Remove Extra Spaces</button>
    
    </div>
    <div>
    <div className='m-4'>
      <h4>Text length</h4>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
    </div>
    <div className='m-4'>
      <h4>Text Preview</h4>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
        </div>
        </div>
  );
};

export default TextForm;
