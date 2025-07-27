// Sample saved notes (to be replaced with database storage)
let notes = [
    { id: 1, title: "Enter Note Title", content: "Enter Note Content:", date: "Date" },
    // { id: 2, title: "Meeting Notes", content: "Discuss project deadlines", date: "2025-03-19" }
    ];
    // Function to load notes and display them in card format
    function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = ""; // Clear previous notes
    notes.forEach((note, index) => {
    let noteCard = `
    <div class="note-card">
    <h3>${note.title}</h3>
    <p>${note.content}</p>
    <small>${note.date}</small>
    <div class="note-actions">
    <button class="edit-btn" onclick="editNote(${index})">Edit</button>
    <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    </div>
    </div>
    `;
    notesContainer.innerHTML += noteCard;
    });
    }
    // Function to add a new note
function addNewNote() {
    let title = prompt("Enter Note Title:");
    let content = prompt("Enter Note Content:");
    let date = new Date().toISOString().split("T")[0]; // Get today's date
    if (title && content) {
    notes.push({ id: notes.length + 1, title, content, date });
    loadNotes(); // Refresh notes list
    } else {
    alert("Title and content cannot be empty!");
    }
    }
    // Function to edit a note
function editNote(index) {
    let newTitle = prompt("Edit Note Title:", notes[index].title);
    let newContent = prompt("Edit Note Content:", notes[index].content);
    if (newTitle && newContent) {
    notes[index].title = newTitle;
    notes[index].content = newContent;
    loadNotes(); // Refresh notes list
    } else {
    alert("Title and content cannot be empty!");
    }
    }
    // Function to delete a note
    function deleteNote(index) {
    if (confirm("Are you sure you want to delete this note?")) {
    notes.splice(index, 1); // Remove the note from the array
    loadNotes(); // Refresh notes list
    }
    }
    // Function to go back to Home Page
    function goHome() {
    window.location.href = "home.html"; // Redirect to Home Page
    }
    // Load notes when the page loads
    window.onload = loadNotes;
