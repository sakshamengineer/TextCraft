import React, {useState} from 'react'

export default function TextForm(props) {
    const btnclicked = () =>{
        uptext(text.toUpperCase());
        props.showmsg("Text Converted to UpperCase","success")
    }
    const btnclicked2 = () =>{
        uptext(text.toLowerCase());
        props.showmsg("Text Converted to LowerCase","success")
    }
    const clrtxt = () =>{
        uptext('');
        props.showmsg("Text Cleared","success")
    }
    const updatedtxt = (events) =>{
        uptext(events.target.value);
    }
    const capitalizeParagraph = () => {
        uptext(text.split(' ').map(word => word.charAt(0).toUpperCase() + (word.slice(1)).toLowerCase()).join(' '));
        props.showmsg("Text Converted to Official","success")
      }
    const [text , uptext] = useState("")
    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}} className='my-5'>
            <h1 className='my-3'>Enter Your Text Here</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#0003':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={updatedtxt} id="my-box" rows="8"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={btnclicked}>Convert to Uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={btnclicked2}>Convert to Lowercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={capitalizeParagraph}>Convert to Official</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={clrtxt}>Clear</button>
        </div>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').filter((element)=>{return element.length !== 0}).length} minutes to read</p>
        </div>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text===''?'Enter Your Text in Textarea to Preview it':text}</p>
        </div>
        </>
    )
}
