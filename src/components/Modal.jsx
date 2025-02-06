import EditIcon from "../assets/icons/EditIcon";
import ShrinkIcon from "../assets/icons/ShrinkIcon";
import { useEffect } from "react";
import { entries } from "../data/entries";

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
                            <div>{entry?.tags.map((tag) => `#${tag} `)}</div>
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
                            <button className="btn bg-primary text-white font-normal text-base  hover:bg-primary hover:scale-105">
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
