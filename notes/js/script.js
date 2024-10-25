import { Note } from './note.js';

const notes = [];

// Function to add a note
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteContent = noteInput.value.trim();

    if (noteContent) {
        const newNote = new Note(noteContent);
        notes.push(newNote);
        displayNotes();
        noteInput.value = ''; // Clear input
    } else {
        alert('Please write a note!');
    }
}

// Function to display notes
function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = ''; // Clear the current note list

    notes.forEach((note, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = note.content + ' (Created on: ' + note.dateCreated.toLocaleString() + ')';

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeNote(index); // Pass the index to removeNote

        listItem.appendChild(removeBtn);
        noteList.appendChild(listItem);
    });
}

// Function to remove a note
function removeNote(index) {
    notes.splice(index, 1); // Remove note from array
    displayNotes(); // Update displayed notes
}

// Add event listener for the Add Note button
document.getElementById('addNoteBtn').addEventListener('click', addNote);
