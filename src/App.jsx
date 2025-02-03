import React, { useState, useEffect } from 'react';

function App() {
  // Step 1: Create a state variable to hold the diary entries
  const [entries, setEntries] = useState([]);

  // Step 2: Retrieve saved entries from localStorage when the component mounts
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries'));
    if (savedEntries) {
      setEntries(savedEntries); // Load the saved entries into state
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  // Step 3: Save the entries to localStorage whenever they change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem('diaryEntries', JSON.stringify(entries));
    }
  }, [entries]); // Runs whenever the entries state changes

  // Function to add a new diary entry
  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <div>
      <h1>Personal Diary</h1>
      <button onClick={() => addEntry("A new diary entry!")}>
        Add Entry
      </button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
