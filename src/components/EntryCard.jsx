// Displays a preview of diary entries, making the app visually appealing.
// Enables users to click and view details.

const EntryCard = () => {
  const handleSubmit = (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Log the submit
    console.log(e.target.submit);
  };

  return (
    // <h1>Entry Card</h1>
    // form
    <form
      onSubmit={handleSubmit}
      className="bg-[#526664] mb-4 flex flex-col w-25 h-25"
    >
      <div className="flex flex-col h-full justify-center items-center ">
        <button type="submit" className="text-white  rounded">
          <div className="border border-white rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          New Entry
        </button>
      </div>
    </form>
    // end of form
  );
};

export default EntryCard;
