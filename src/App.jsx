import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EntryCard from "./components/EntryCard";
import FotoCard from "./components/FotoCard";

const App = () => {
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
