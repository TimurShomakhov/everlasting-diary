import EditIcon from "../assets/icons/EditIcon";
import ShrinkIcon from "../assets/icons/ShrinkIcon";

const Modal = () => {
    return (
        <>
            <button
                className="btn"
                onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                }>
                open modal
            </button>
            <dialog id="my_modal_4" className="modal w-full">
                <div className="container mx-auto bg-bgSoft rounded-lg border border-primary p-8">
                    <div className="flex justify-between mb-10">
                        <button className="hover:text-primary">
                            <EditIcon className="w-6 h-6" />
                        </button>
                        <button className="hover:text-primary">
                            <ShrinkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;
