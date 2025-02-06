import { entries } from "../data/entries";
export const getEntries = () => {
    return JSON.parse(localStorage.getItem("diaryEntries")) || entries;
};

export const saveEntry = (entries) => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
};
