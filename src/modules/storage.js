export const getEntries = () => {
    return JSON.parse(localStorage.getItem("diaryEntries")) || [];
};

export const saveEntry = (entries) => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
};
