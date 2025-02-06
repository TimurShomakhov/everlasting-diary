import PeaceIcon from "../assets/icons/PeaceIcon";
import CoffeeIcon from "../assets/icons/CoffeeIcon";
import MagicIcon from "../assets/icons/MagicIcon";

const Footer = () => {
    return (
        //Footer
        <footer className=" p-10 bg-primary w-full">
            <div className="container flex flex-col sm:flex-row mx-auto justify-between">
                {/* left side */}
                <div className="">
                    <h3 className=" text-white text-2xl mb-3">
                        Everlasting Diary
                    </h3>
                    <p className="text-white text-xl font-light">
                        Because you past deserves better then being lost in your
                        brain cache.
                    </p>

                    <p className="text-sm font-light mt-10 text-white">
                        © {new Date().getFullYear()} Everlasting Diary - No
                        regrets,just entries.{" "}
                    </p>
                </div>
                {/* end of left side */}

                {/* right side */}
                <div className="flex flex-col items-start sm:items-end sm:justify-end text-white mt-10 sm:mt-0">
                    <div className="flex flex-row gap-10 ">
                        <PeaceIcon />
                        <CoffeeIcon />
                        <MagicIcon />
                    </div>
                    <p className="text-sm font-light mt-10 text-white text-right">
                        Powered by questionable life choices, caffeine & magic.
                    </p>
                </div>
                {/* end of right side */}
            </div>
        </footer>
    );
};

export default Footer;
