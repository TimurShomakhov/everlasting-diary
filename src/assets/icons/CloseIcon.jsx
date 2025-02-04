const CloseIcon = ({ className }) => (
    <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <g clipPath="url(#clip0_5203_68)">
            <path
                d="M33.75 1.25L1.25 33.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.25 1.25L33.75 33.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_5203_68">
                <rect width="35" height="35" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default CloseIcon;
