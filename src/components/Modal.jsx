import EditIcon from "../assets/icons/EditIcon";
import ShrinkIcon from "../assets/icons/ShrinkIcon";
import { useEffect } from "react";

const Modal = ({ entry }) => {
    useEffect(() => {
        if (entry) {
            document.getElementById("my_modal_4").showModal();
        }
    }, [entry]);

    return (
        <>
            <dialog id="my_modal_4" className="modal w-full">
                <div className="container mx-auto bg-bgSoft rounded-lg border border-primary p-8">
                    {/* Top icon bar with Edit and Shrink buttons (aligned left & right) */}
                    <div className="flex justify-between mb-10">
                        <button className="hover:text-primary">
                            <EditIcon className="w-6 h-6" />
                        </button>
                        <form method="dialog">
                            <button className="hover:text-primary">
                                <ShrinkIcon className="w-6 h-6" />
                            </button>
                        </form>
                    </div>

                    {/* Grid layout for content */}
                    <div className="grid grid-cols-12 gap-8 items-center">
                        {/* Left side: Date, Title, Content, Tags, Rating (6 columns starting from column 2) */}
                        <div className="col-span-12 sm:col-span-6 sm:col-start-2">
                            <p className="font-light">{entry?.date}</p>
                            <h3 className="font-bold text-2xl">
                                {entry?.title}
                            </h3>
                            <p className="py-4">{entry?.content}</p>
                            <div>
                                {(Array.isArray(entry?.tags)
                                    ? entry.tags
                                    : entry?.tags?.split(" ") || []
                                ).map((tag) => `#${tag} `)}
                            </div>

                            <div className="flex text-gray-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`text-2xl cursor-pointer ${
                                            entry?.rating >= star
                                                ? "text-yellow-500"
                                                : "text-gray-400"
                                        }`}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right side: Image (4 columns) */}
                        <div className="col-span-12 sm:col-span-4">
                            {entry?.imgUrl ? (
                                <img
                                    src={entry.imgUrl}
                                    alt={entry.title || "Example"}
                                    className="w-full rounded-lg"
                                />
                            ) : (
                                <div className="w-full h-48 bg-primary flex items-center justify-center text-white text-lg rounded-lg">
                                    No Image Available
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Centered buttons at the bottom */}
                    <div className="modal-action flex justify-center gap-4 mt-6 ">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="py-2 px-4 bg-primary text-white font-normal text-base  hover:bg-primary hover:scale-105 rounded-btn">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;
