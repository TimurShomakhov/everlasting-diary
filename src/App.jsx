import React, { useState } from "react";
import "./index.css"; // TailwindCSS 

function App() {
  const [entries, setEntries] = useState([]); // State to hold the diary entries
  const [newEntry, setNewEntry] = useState({ title: "", content: "" }); // State for new entry form

  // Handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  // Handle adding a new entry
  const handleAddEntry = () => {
    if (newEntry.title && newEntry.content) {
      setEntries([...entries, newEntry]);
      setNewEntry({ title: "", content: "" }); // Reset form
    }
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Diary</h1>

      {/* Input fields for adding a new entry */}
      <div className="space-y-4">
        <input
          type="text"
          name="title"
          value={newEntry.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="p-2 w-full border rounded"
        />
        <textarea
          name="content"
          value={newEntry.content}
          onChange={handleInputChange}
          placeholder="Content"
          className="p-2 w-full border rounded"
        />
        <button
          onClick={handleAddEntry}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Entry
        </button>
      </div>

      {/* Displaying all diary entries */}
      <div className="mt-8 space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="entry-card p-4 border rounded shadow-md">
            <h3 className="text-xl font-semibold">{entry.title}</h3>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
