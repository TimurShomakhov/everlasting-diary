import { useState } from "react";

const AddEntryModal = ({ addEntry, isOpen, setIsAdding }) => {
    if (!isOpen) return null;
    const [entry, setEntry] = useState({ id: "", title: "", date: "", imgUrl: "", content: "", tags: [], rating: "" });
    const [rating, setRating] = useState(0);
    
    const handleSave = () => {
        if (!entry.title || !entry.date || !entry.imgUrl || !entry.content) {
            alert("All fields are required.");
            return;
        }
        addEntry(entry);
        setEntry({ id: "", title: "", date: "", imgUrl: "", content: "", tags: [], rating: "" });
        setIsAdding(false);
    };

    return (
        <dialog id="addNewEntryDialog" className="modal w-full flex items-center justify-center">
            <div className="bg-[#f5f1e3] p-6 rounded-xl shadow-lg w-full max-w-2xl border border-[#c2a87d] relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b pb-2 border-[#c2a87d]">
                    <h2 className="text-2xl font-semibold text-[#6b4f3f] font-serif">Dear Diary...</h2>
                    <button className="text-[#6b4f3f] text-xl cursor-pointer" onClick={() => setIsAdding(false)}>
                        &times;
                    </button>
                </div>

                {/* Form */}
                <form>
                    <div className="mb-4">
                        <label className="block text-[#6b4f3f] font-serif">Title</label>
                        <input
                            type="text"
                            placeholder="Give your entry a name..."
                            value={entry.title}
                            onChange={(e) => setEntry({ ...entry, title: e.target.value })}
                            className="w-full p-2 border border-[#c2a87d] rounded bg-[#faf6ee] text-[#6b4f3f]"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#6b4f3f] font-serif">Date</label>
                        <input
                            type="date"
                            value={entry.date}
                            onChange={(e) => setEntry({ ...entry, date: e.target.value })}
                            className="w-full p-2 border border-[#c2a87d] rounded bg-[#faf6ee] text-[#6b4f3f]"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#6b4f3f] font-serif">Your thoughts</label>
                        <textarea
                            placeholder="Pour your heart out..."
                            value={entry.content}
                            onChange={(e) => setEntry({ ...entry, content: e.target.value })}
                            className="w-full p-3 border border-[#c2a87d] rounded bg-[#faf6ee] text-[#6b4f3f] h-32 font-serif"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#6b4f3f] font-serif">Image URL</label>
                        <input
                            type="text"
                            placeholder="Attach a memory (optional)"
                            value={entry.imgUrl}
                            onChange={(e) => setEntry({ ...entry, imgUrl: e.target.value })}
                            className="w-full p-2 border border-[#c2a87d] rounded bg-[#faf6ee] text-[#6b4f3f]"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#6b4f3f] font-serif">Tags</label>
                        <input
                            type="text"
                            placeholder="#memories #feelings"
                            value={entry.tags}
                            onChange={(e) => setEntry({ ...entry, tags: e.target.value })}
                            className="w-full p-2 border border-[#c2a87d] rounded bg-[#faf6ee] text-[#6b4f3f]"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[#6b4f3f] font-serif">Mood Rating</label>
                        <div className="flex text-[#c2a87d]">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`text-2xl cursor-pointer ${rating >= star ? "text-yellow-500" : "text-[#c2a87d]"}`}
                                    onClick={() => {
                                        setRating(star);
                                        setEntry({ ...entry, rating: star.toString() });
                                    }}
                                >
                                    &#9733;
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-4">
                        <button type="button" className="px-4 py-2 border border-[#c2a87d] rounded text-[#6b4f3f] hover:bg-[#e8ddcc] cursor-pointer" onClick={() => setIsAdding(false)}>
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-[#c2a87d] text-white rounded hover:bg-[#a78b63] cursor-pointer"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default AddEntryModal;
