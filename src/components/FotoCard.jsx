const FotoCard = ({ date, title, img }) => {
  return (
    <>
      <div className="w-25 h-25 rounded-t-lg">
        <img className="rounded-t-lg h-18 w-25" src={img} alt={title} />

        <div className="flex shadow-lg">
          <div>
            <p className="text-[#ADADAD] text-[0.4rem] mt-[0.1rem] ml-[0.3rem]">
              {date}
            </p>
            <h4 className="text-[0.4rem] ml-[0.3rem] mb-2">{title}</h4>
          </div>
          <div className="flex items-center justify-end ml-4  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default FotoCard;
