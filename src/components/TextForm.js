import React, { useState } from 'react'

// console.log(useState('Enter text here2'))

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        // setText("You have clicked on HandleUp Click")
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here2');

    // text = "new text" // wrong way
    // setText("kljeiowj");
    // setText("new text");
    return (
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>

        </div>
    );
};
