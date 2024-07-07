import React,{useState} from 'react'

export default function Textform(props) {
  const[text,settext]=useState('Enter the text here')
  const Handlesettext=()=>{
     console.log("Button has been clicked")
     const newText=text.toUpperCase()
     settext(newText)
  }
  const Handlesettext1=()=>{
    const newtext=text.toLowerCase()
    settext(newtext)
  }
  const Handleonchamge=(event)=>{
    console.log("Onchange event")
    settext(event.target.value)
  }
  const Handlesettext3=()=>{
    settext("")
  }
  function characters(){
    let count =0
    const length=text.length
    for(let i=0;i<length;i++){
      if(text[i]!=" "){
        count++
      }
    }
    return count
  }
  function countWords(inputText) {
    // Trim the input text to remove leading and trailing whitespace
    const trimmedText = inputText.trim();
    // Split the trimmed text into words using any whitespace as delimiter
    const wordsArray = trimmedText.split(/\s+/);
    // Filter out empty strings which might occur if there are consecutive spaces
    const filteredWordsArray = wordsArray.filter(word => word !== "");
    // Calculate the number of words
    const wordCount = filteredWordsArray.length;
    return wordCount
  }
  
  return (
    <>
    <div className="mb-3">
</div>
<div className="mb-3">
  <div className="container">
    <h1 style={{color:props.color}}>{props.heading}</h1>
  <textarea className="form-control my-3" value={text} id="exampleFormControlTextarea1" rows="3" onChange={Handleonchamge}></textarea>
  <button className="btn btn-primary mx-2" onClick={Handlesettext}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={Handlesettext1}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={Handlesettext3}>Clear Text</button>
  </div>
</div>
<div className="container" style={{color:props.node}}>
    <h1>Text Summary</h1>
     <p>No of words:{countWords(text)}</p>
     <p>No of Characters:{characters()}</p>
  </div>
    </>
  )
}










