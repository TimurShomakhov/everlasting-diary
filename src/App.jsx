import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import Movies from "./components/Movies";
import About from "./components/About";

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
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/movies" className="hover:underline">Movies</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </div>
        </div>
      </nav>

      {/* Page Routing */}
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
