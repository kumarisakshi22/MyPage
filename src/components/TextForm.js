import React, { useState } from 'react'

// console.log(useState('Enter text here2'))

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        // setText("You have clicked on HandleUp Click")
    }
    const handleLoClick = () => {
        console.log("LowerCase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        // setText("You have clicked on HandleUp Click")
    }
    const handleClearClick = () => {
        console.log("clear text" + text);
        let newText = '';
        setText(newText)
        // setText("You have clicked on HandleUp Click")
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // setText(newText)
        // setText("You have clicked on HandleUp Click")
    }
    const [text, setText] = useState('');

    // text = "new text" // wrong way
    // setText("kljeiowj");
    // setText("new text");
    return (
        <>

            <div className="conatiner" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#2d2929' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to lower case </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>

            </div>
            <div className="conatiner my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >Your text summary</h1>
                <p>{text.split(" ").length}words and {text.length} charecters </p>

                <p>{0.008 * text.split(" ").length} Minutes read </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>

        </>
    );
};
