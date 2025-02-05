import Title from "./components/Title";
import EntryCard from "./components/EntryCard";
import Footer from "./components/Footer";

function App() {
    //Aniko
    window.getComputedStyle(document.documentElement).getPropertyValue("--tw-bg-opacity");
    //
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
