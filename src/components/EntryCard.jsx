import { useState } from "react";
import Modal from "./Modal";

import FotoCard from "./FotoCard";
// import { entry } from "../data/entrys";
import { entries } from "../data/entries.js";
// Displays a preview of diary entries, making the app visually appealing.
// Enables users to click and view details.

const EntryCard = () => {
    // State to store the selected entry
    const [selectedEntry, setSelectedEntry] = useState(null);

    // Function to set the selected entry when clicked
    const openModal = (entry) => {
        setSelectedEntry(entry);
        console.log("Selected Entry", entry);
    };

    const handleSubmit = (e) => {
        // Prevent the default form submission
        e.preventDefault();

        // Log the submit
        console.log(e.target.submit);
    };

    return (
        <>
            <Modal
                entry={selectedEntry}
                onClose={() => setSelectedEntry(null)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
                <form
                    onSubmit={handleSubmit}
                    className="bg-primary flex flex-col w-full card shadow-xl">
                    <div className="flex flex-col h-full justify-center items-center ">
                        <button type="submit" className="text-white  rounded ">
                            <div className="border border-white rounded-2xl mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className=" text-white ">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
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
                                console.log(
                                    "✅ onClick wurde an FotoCard übergeben für:",
                                    entry.title
                                );
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
