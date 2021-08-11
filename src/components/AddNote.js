import React, { useState } from 'react'
import '../App.css'

const AddNote = ({viewText}) => {

    const [addText, setAddText] = useState('');
    const [shake, setShake] = useState(false);
    const characterLimit = 200;
    const charLeft = characterLimit - addText.length;

    const changeText = (e) => {
        if(characterLimit - e.target.value.length >= 0) {
            setAddText(e.target.value);
        }
    }

    const saveText = () => {
        if(addText.trim().length > 0) {
            viewText(addText);
            setAddText('');
        } else {
            setTimeout(() => {
                setShake(true)
            })
            setShake(false)
        }
    }

    return (
        <div className={`note new ${shake ? 'shake' : ''}`}>
            <textarea name="" id="" cols="10" rows="8" placeholder="Type to add a note..." value={addText} onChange={changeText}></textarea>
            <div className="note-footer">
                <small>{charLeft} Remaining</small>
                <button className="save" onClick={saveText}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
