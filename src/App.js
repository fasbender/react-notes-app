import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css';
import NotesList from './Screens/NotesList';

function App() {

  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]);
	const [search, setSearch] = useState('')

	const viewText = (text) => {
		const date = new Date()
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString()
		}
		const newNotes = [...notes, newNote]
		setNotes(newNotes)
	}

  return (
    <div className="App">
		<div className="header">
			<h1>Notes</h1>
			<button>Toggle</button>
		</div>
		<input type="search" name="" id="" placeholder="Search for notes..." onChange={(e) => setSearch(e.target.value)}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(search))} setNotes={setNotes} viewText={viewText}/>
    </div>
  );
}

export default App;
