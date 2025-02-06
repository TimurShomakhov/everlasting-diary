import ShrinkIcon from "../assets/icons/ShrinkIcon";
import { useState } from "react";

const AddEntryModal = ({ addEntry, isOpen, setIsAdding }) => {
    if (!isOpen) return null;
    const [entry, setEntry] = useState({
        id: "",
        title: "",
        date: "",
        imgUrl: "",
        content: "",
        tags: [],
        rating: "",
    });
    const [rating, setRating] = useState(0);
    const handleSave = () => {
        if (!entry.title || !entry.date || !entry.imgUrl || !entry.content) {
            alert("All fields are required.");
            return;
        }
        setEntry(entry);
        addEntry(entry);
        setEntry({
            id: "",
            title: "",
            date: "",
            imgUrl: "",
            content: "",
            tags: [],
            rating: "",
        });
        setIsAdding(false);
    };

    return (
        <dialog id="addNewEntryDialog" className="modal w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl border">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                        What's on your mind?
                    </h2>
                    <button
                        className="text-gray-500 text-xl cursor-pointer"
                        onClick={() => setIsAdding(false)}>
                        <ShrinkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-700">Title</label>
                            <input
                                type="text"
                                placeholder="Enter a short, meaningful title"
                                value={entry.title}
                                onChange={(e) =>
                                    setEntry({
                                        ...entry,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-gray-700">Date</label>
                            <input
                                type="date"
                                value={entry.date}
                                onChange={(e) =>
                                    setEntry({ ...entry, date: e.target.value })
                                }
                                className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Thoughts */}
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Your thoughts
                        </label>
                        <textarea
                            placeholder="Write your thoughts, experiences, or ramblings here... No judgment, just memories!"
                            value={entry.content}
                            onChange={(e) =>
                                setEntry({ ...entry, content: e.target.value })
                            }
                            className="w-full p-2 border rounded bg-gray-100 text-gray-700 h-32"></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-700">
                                Image URL
                            </label>
                            <input
                                type="text"
                                placeholder="Paste an image link (optional)"
                                value={entry.imgUrl}
                                onChange={(e) =>
                                    setEntry({
                                        ...entry,
                                        imgUrl: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                            />
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-gray-700">Tags</label>
                            <input
                                type="text"
                                placeholder="e.g., #bananas #food"
                                value={entry.tags}
                                onChange={(e) =>
                                    setEntry({ ...entry, tags: e.target.value })
                                }
                                className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            How did you feel?
                        </label>
                        <div className="flex items-center gap-2">
                            {/* Interactive Star Rating */}
                            <div className="flex text-gray-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`text-2xl cursor-pointer ${
                                            rating >= star
                                                ? "text-yellow-500"
                                                : "text-gray-400"
                                        }`}
                                        onClick={(e) => {
                                            setRating(star);
                                            setEntry({
                                                ...entry,
                                                rating: star.toString(),
                                            });
                                            console.log(entry);
                                        }}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">
                                Rate your experience (1 = Meh, 5 = Amazing)
                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4">
                        <button
                            type="button"
                            className="px-4 py-2 border rounded-btn border-primary text-gray-600 cursor-pointer hover:scale-105 font-normal"
                            onClick={() => setIsAdding(false)}>
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 bg-primary text-white font-normal text-base  hover:bg-primary hover:scale-105 rounded-btn"
                            onClick={() => {
                                handleSave(entry);
                                setIsAdding(false);
                            }}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default AddEntryModal;
