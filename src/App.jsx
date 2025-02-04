import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EntryCard from "./components/EntryCard";
import FotoCard from "./components/FotoCard";

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
    <div className="min-h-screen flex flex-col">
      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry" element={<EntryCard />} />
          <Route path="/photos" element={<FotoCard />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        <p>&copy; {new Date().getFullYear()} Everlasting Diary. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
