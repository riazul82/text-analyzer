import React, { useState, useRef } from 'react';

const Analyzer = () => {
    const [text, setText] = useState('');
    const textRef = useRef(null);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleSentenceCase = () => {
        let myText = text.toLowerCase();

        let newText = myText.replace(/(^\s*\w|[.!?]\s*\w)/g, (ch) => {
            return ch.toUpperCase();
        });
        
        setText(newText);
    }

    const handleCapitalizedCase = () => {
        let myText = text.toLowerCase();
        let ara = myText.split(' ');

        let newAra = ara.map((str) => {
            if (str !== '') {
                let tempAra = str.split('');
                tempAra[0] = tempAra[0].toUpperCase();
                return tempAra.join('');
            } else {
                return '';
            }
        });

        setText(newAra.join(' '));
    }

    const handleAlternatingCase = () => {
        let ara = text.split('');

        for (let i = 0; i < ara.length; i++) {
            if (i % 2) {
                ara[i] = ara[i].toUpperCase();
            } else {
                ara[i] = ara[i].toLowerCase();
            }
        }

        setText(ara.join(''));
    }

    const handleInverseCase = () => {
        let ara = text.split('');

        for (let i = 0; i < ara.length; i++) {
            if (ara[i] >= 'A' && ara[i] <= 'Z') {
                ara[i] = ara[i].toLowerCase();
            } else if (ara[i] >= 'a' && ara[i] <= 'z') {
                ara[i] = ara[i].toUpperCase();
            }
        }

        setText(ara.join(''));
    }

    const handleReverseCase = () => {
        setText(text.split('').reverse().join(''));
    }

    const handleExtraSpace = () => {
        setText(text.split(/\s+/).join(' '));
    }

    const handleCopyText = () => {
        textRef.current.select();
        navigator.clipboard.writeText(text);
    }

    const handleClearText = () => {
        setText('');
    }

    return (
        <div className="container">
            <div className="appContent">
                <div className="title">
                    <h1>Text Analyzer</h1>
                </div>
                <div className="textField">
                    <textarea name="text-box" id="text-box" ref={textRef} value={text} onChange={handleChange} placeholder="Insert your text here..."></textarea>
                </div>
                <div className="buttonField">
                    <button onClick={handleUpperCase}>UPPER CASE</button>
                    <button onClick={handleLowerCase}>lower case</button>
                    <button onClick={handleSentenceCase}>Sentence case</button>
                    <button onClick={handleCapitalizedCase}>Capitalized case</button>
                    <button onClick={handleAlternatingCase}>aLtErNaTiNg cAsE</button>
                    <button onClick={handleInverseCase}>InVeRsE CaSe</button>
                    <button onClick={handleExtraSpace}>Remove extra space</button>
                    <button onClick={handleReverseCase}>Reverse case</button>
                    <button onClick={handleCopyText}>Copy to clipboard</button>
                    <button onClick={handleClearText}>Clear</button>
                </div>
                <div>
                    <p className="textSummary">
                        <strong>Summary: </strong>
                        <span>{text.split(/[ ]+/).filter((str) => str !== '').length} Words</span>
                        <span> | {text.length} Characters</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Analyzer;