const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50 py-3">
            <div className="container mx-auto navbar bg-base-100 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl text-primary font-bold	">
                        Everlasting Diary
                    </a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
