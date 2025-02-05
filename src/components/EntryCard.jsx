import { useEffect, useState } from "react";
import Modal from "./Modal";
import FotoCard from "./FotoCard";
import { useEntries } from "../hooks/useEntries.js";
// import { entry } from "../data/entrys";

import AddEntryModal from "./AddNewEntryModal.jsx";
// Displays a preview of diary entries, making the app visually appealing.
// Enables users to click and view details.

const EntryCard = () => {
    //custom hook to manage the state of the whole entries
    const { entries, addEntry } = useEntries();
    const [isAdding, setIsAdding] = useState(false);
    useEffect(() => {
        if (isAdding) {
            document.getElementById("addNewEntryDialog").showModal();
        }
    }, [isAdding]);

    // State to store the selected entry
    const [selectedEntry, setSelectedEntry] = useState(null);

    // Function to set the selected entry when clicked
    const openModal = (entry) => {
        setSelectedEntry(entry);
        console.log("Selected Entry", entry);
    };
    const displayAddingNewEntryModal = () => document.getElementById("addNewEntryDialog").showModal();

    const handleSubmit = (e) => {
        // Prevent the default form submission
        e.preventDefault();

        // Log the submit
        console.log(e.target.submit);
    };

    return (
        <>
            <AddEntryModal addEntry={addEntry} isOpen={isAdding} setIsAdding={setIsAdding} />
            <Modal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />

            <div className="grid grid-cols-4 gap-6 mt-6 ml-2 auto-rows-min ">
                <form onSubmit={handleSubmit} className="bg-primary mb-4 flex flex-col w-full">
                    <div className="flex flex-col h-full justify-center items-center ">
                        <button type="submit" onClick={() => setIsAdding(true)} className="text-white  rounded  text-[0.7rem] mt-2">
                            <div className="border border-white rounded-2xl mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            New Entry
                        </button>
                    </div>
                </form>

                {/* <FotoCard {...entry} entry={entry} /> */}

                {entries.map((entry) => {
                    return (
                        <FotoCard
                            key={entry.id}
                            {...entry}
                            onClick={() => {
                                console.log("✅ onClick wurde an FotoCard übergeben für:", entry.title);
                                openModal(entry);
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default EntryCard;
