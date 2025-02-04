import Title from "./components/Title";
import EntryCard from "./components/EntryCard";
import Modal from "./components/Modal";

function App() {
    window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--tw-bg-opacity");

    return (
        <>
            <div className="container mx-auto">
                <Title />
                <EntryCard />
            </div>
            <Modal />
        </>
    );
}

export default App;
