import Title from "./components/Title";
import EntryCard from "./components/EntryCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    window.getComputedStyle(document.documentElement).getPropertyValue("--tw-bg-opacity");
    return (
        <>
            <div className="">
                <Header />
                <Title />
                <EntryCard />
            </div>
            <Footer />
        </>
    );
}

export default App;
