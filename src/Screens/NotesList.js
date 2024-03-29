import React from 'react'
import Notes from '../components/Notes'
import AddNote from '../components/AddNote'
import '../App.css'

const NotesList = ({notes, setNotes, viewText, search}) => {
    return (
        <div className="note-list">
           {notes.map(note => {
               return (
                   <Notes notes={notes} note={note} key={note.id} setNotes={setNotes}/>
               )
           })}
           {!search ? <AddNote viewText={viewText}/> : ''}
        </div>
    )
}

export default NotesList
