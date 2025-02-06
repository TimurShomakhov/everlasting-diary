import { useEffect, useRef, useState } from "react";

const AddEntryModal = ({ addEntry, isOpen, setIsAdding }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);

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
        <dialog ref={modalRef} className="modal w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl border">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">What's on your mind?</h2>
                    <button className="text-gray-500 text-xl cursor-pointer" onClick={() => setIsAdding(false)}>
                        &times;
                    </button>
                </div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Title</label>
                            <input
                                type="text"
                                placeholder="Enter a short, meaningful title"
                                value={entry.title}
                                onChange={(e) => setEntry({ ...entry, title: e.target.value })}
                                className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Date</label>
                            <input type="date" value={entry.date} onChange={(e) => setEntry({ ...entry, date: e.target.value })} className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Your thoughts</label>
                        <textarea
                            placeholder="Write your thoughts, experiences, or ramblings here... No judgment, just memories!"
                            value={entry.content}
                            onChange={(e) => setEntry({ ...entry, content: e.target.value })}
                            className="w-full p-2 border rounded bg-gray-100 text-gray-700 h-32"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Image URL</label>
                            <input
                                type="text"
                                placeholder="Paste an image link (optional)"
                                value={entry.imgUrl}
                                onChange={(e) => setEntry({ ...entry, imgUrl: e.target.value })}
                                className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Tags</label>
                            <input type="text" placeholder="e.g., #bananas #food" value={entry.tags} onChange={(e) => setEntry({ ...entry, tags: e.target.value })} className="w-full p-2 border rounded bg-gray-100 text-gray-700" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">How did you feel?</label>
                        <div className="flex items-center gap-2">
                            <div className="flex text-gray-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`text-2xl cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                                        onClick={() => {
                                            setRating(star);
                                            setEntry({ ...entry, rating: star.toString() });
                                        }}
                                    >
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">Rate your experience (1 = Meh, 5 = Amazing)</span>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button type="button" className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-200 cursor-pointer" onClick={() => setIsAdding(false)}>
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-700 cursor-pointer"
                            onClick={() => {
                                handleSave(entry);
                                setIsAdding(false);
                            }}
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
