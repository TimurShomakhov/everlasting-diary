import Title from "./components/Title";
import EntryCard from "./components/EntryCard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [entries, setEntries] = useState([]); // State to hold the diary entries
  const [newEntry, setNewEntry] = useState({ title: "", content: "" }); // State for new entry form
   //Aniko
    window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--tw-bg-opacity");
  //
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
        <>
            <div className="container mx-auto">
                <Title />
                <EntryCard />
            </div>
            <Footer />
        </>
    );
}

export default App;
