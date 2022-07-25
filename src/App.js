import { useState, useEffect } from 'react'
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
	const [dark, setDark] = useState(false)

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

	const darkMode = () => {
		setDark(!dark)
	}

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
		setNotes(savedNotes)
	}, [])

	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
	}, [notes])

  return (
	  <div className={`${dark && 'dark-mode'}`}>
		<div className="App">
			<div className="header">
				<h1>Notes</h1>
				{dark ? <button className="save" onClick={darkMode}>Light</button> : <button className="save" onClick={darkMode}>Dark</button>}
			</div>
			<input type="search" name="" id="" placeholder="Search for notes..." onChange={(e) => setSearch(e.target.value)}/>
			<NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(search))} setNotes={setNotes} viewText={viewText} search={search}/>
    	</div>
	  </div>
  );
}

export default App;
