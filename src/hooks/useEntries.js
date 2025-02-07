import { useState, useEffect } from "react";
import { getEntries, saveEntry } from "../modules/storage";

export const useEntries = () => {
    const [entries, setEntries] = useState([]);

    // Load entries from localStorage on mount
    useEffect(() => {
        setEntries(getEntries());
    }, []);

    // Add a new entry and update state + localStorage
    const addEntry = (entry) => {
        const isEntryExisting = entries.find((e) => e.date === entry.date);
        if (isEntryExisting) {
            alert("An entry already exists for this date. Please try again tomorrow.");
            return;
        }
        entry = { ...entry, id: entries.length + 1 };
        const updatedEntries = [entry, ...entries];
        setEntries(updatedEntries);
        saveEntry(updatedEntries);
    };

    return { entries, addEntry };
};
