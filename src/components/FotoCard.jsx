import ExpandIcon from "../assets/icons/ExpandIcon";

const FotoCard = ({ id, date, title, imgUrl, onClick }) => {
    console.log("🟢 FotoCard received props:", { title, onClick });
    return (
        <>
            <div className="card bg-base-100 w-full shadow-xl min-h-[250px]">
                {/* Image */}
                {imgUrl ? (
                    <figure className="w-full h-48 overflow-hidden">
                        <img
                            src={imgUrl}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                ) : (
                    <div className="w-full h-48 bg-primary flex items-center justify-center text-white text-lg">
                        Nothing to see
                    </div>
                )}
                {/* Content */}
                <div className="card-body flex justify-between ">
                    <div className="flex">
                        <div>
                            <p className="text-xs font-light">{date}</p>
                            <h4 className="">{title}</h4>
                        </div>

                        <div
                            className="flex items-center ml-auto cursor-pointer"
                            onClick={() => {
                                console.log(
                                    "📢 Expand-Icon in FotoCard wurde geklickt!"
                                );
                                if (onClick) {
                                    console.log(
                                        "✅ onClick existiert, wird jetzt aufgerufen..."
                                    );
                                    onClick();
                                } else {
                                    console.log("❌ onClick ist undefined!");
                                }
                            }}>
                            <button className="hover:text-primary">
                                <ExpandIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FotoCard;
