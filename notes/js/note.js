// note.js - Note class to manage a note

class Note {
    constructor(content) {
        this.content = content;
        this.dateCreated = new Date();
    }

    // Method to return note details
    getDetails() {
        return {
            content: this.content,
            dateCreated: this.dateCreated.toLocaleString(),
        };
    }
}

export { Note };
