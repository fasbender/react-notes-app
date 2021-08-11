import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import '../App.css'

const Notes = ({note, setNotes, notes}) => {

    const deleteNotes = () => {
        setNotes(
            notes.filter((el) => el.id !== note.id)
        )
    }

    return (
        <div className="note">
            <span>{note.text}</span>
            <div className="note-footer">
                <small>{note.date}</small>
                <MdDeleteForever size="1.3rem" onClick={deleteNotes} style={{cursor: 'pointer'}}/>
            </div>
        </div>
    )
}

export default Notes
