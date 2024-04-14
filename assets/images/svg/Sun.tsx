type colorProp = {
    color: string;
};

const Sun = ({ dark }: colorProp) => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 0C7.74864 0 7.9871 0.098772 8.16291 0.274587C8.33873 0.450403 8.4375 0.68886 8.4375 0.9375V1.875C8.4375 2.12364 8.33873 2.3621 8.16291 2.53791C7.9871 2.71373 7.74864 2.8125 7.5 2.8125C7.25136 2.8125 7.0129 2.71373 6.83709 2.53791C6.66127 2.3621 6.5625 2.12364 6.5625 1.875V0.9375C6.5625 0.68886 6.66127 0.450403 6.83709 0.274587C7.0129 0.098772 7.25136 0 7.5 0ZM11.25 7.5C11.25 8.49456 10.8549 9.44839 10.1517 10.1517C9.44839 10.8549 8.49456 11.25 7.5 11.25C6.50544 11.25 5.55161 10.8549 4.84835 10.1517C4.14509 9.44839 3.75 8.49456 3.75 7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75C8.49456 3.75 9.44839 4.14509 10.1517 4.84835C10.8549 5.55161 11.25 6.50544 11.25 7.5ZM10.815 12.1406L11.4778 12.8034C11.6546 12.9742 11.8914 13.0687 12.1373 13.0666C12.3831 13.0644 12.6182 12.9658 12.792 12.792C12.9658 12.6182 13.0644 12.3831 13.0666 12.1373C13.0687 11.8914 12.9742 11.6546 12.8034 11.4778L12.1406 10.815C11.9638 10.6442 11.727 10.5497 11.4812 10.5519C11.2354 10.554 11.0002 10.6526 10.8264 10.8264C10.6526 11.0002 10.554 11.2354 10.5519 11.4812C10.5497 11.727 10.6442 11.9638 10.815 12.1406ZM12.8025 2.19656C12.9783 2.37237 13.077 2.61078 13.077 2.85938C13.077 3.10797 12.9783 3.34638 12.8025 3.52219L12.1406 4.185C12.0541 4.27454 11.9507 4.34596 11.8363 4.39509C11.7219 4.44423 11.5989 4.47009 11.4744 4.47117C11.35 4.47225 11.2265 4.44853 11.1113 4.4014C10.9961 4.35426 10.8914 4.28464 10.8034 4.19662C10.7154 4.1086 10.6457 4.00392 10.5986 3.88871C10.5515 3.77349 10.5277 3.65004 10.5288 3.52556C10.5299 3.40108 10.5558 3.27806 10.6049 3.16368C10.654 3.0493 10.7255 2.94586 10.815 2.85938L11.4778 2.19656C11.6536 2.02081 11.892 1.92208 12.1406 1.92208C12.3892 1.92208 12.6267 2.02081 12.8025 2.19656ZM14.0625 8.4375C14.3111 8.4375 14.5496 8.33873 14.7254 8.16291C14.9012 7.9871 15 7.74864 15 7.5C15 7.25136 14.9012 7.0129 14.7254 6.83709C14.5496 6.66127 14.3111 6.5625 14.0625 6.5625H13.125C12.8764 6.5625 12.6379 6.66127 12.4621 6.83709C12.2863 7.0129 12.1875 7.25136 12.1875 7.5C12.1875 7.74864 12.2863 7.9871 12.4621 8.16291C12.6379 8.33873 12.8764 8.4375 13.125 8.4375H14.0625ZM7.5 12.1875C7.74864 12.1875 7.9871 12.2863 8.16291 12.4621C8.33873 12.6379 8.4375 12.8764 8.4375 13.125V14.0625C8.4375 14.3111 8.33873 14.5496 8.16291 14.7254C7.9871 14.9012 7.74864 15 7.5 15C7.25136 15 7.0129 14.9012 6.83709 14.7254C6.66127 14.5496 6.5625 14.3111 6.5625 14.0625V13.125C6.5625 12.8764 6.66127 12.6379 6.83709 12.4621C7.0129 12.2863 7.25136 12.1875 7.5 12.1875ZM2.85938 4.185C2.94642 4.2721 3.04976 4.34121 3.16351 4.38837C3.27726 4.43554 3.39919 4.45983 3.52232 4.45988C3.64546 4.45992 3.76741 4.43571 3.88119 4.38863C3.99497 4.34154 4.09837 4.27251 4.18547 4.18547C4.27257 4.09843 4.34168 3.99508 4.38884 3.88133C4.43601 3.76758 4.4603 3.64566 4.46035 3.52252C4.46039 3.39938 4.43618 3.27744 4.3891 3.16366C4.34201 3.04987 4.27298 2.94648 4.18594 2.85938L3.52219 2.19656C3.34537 2.02579 3.10856 1.93129 2.86275 1.93343C2.61694 1.93557 2.3818 2.03416 2.20798 2.20798C2.03416 2.3818 1.93557 2.61694 1.93343 2.86275C1.93129 3.10856 2.02579 3.34537 2.19656 3.52219L2.85938 4.185ZM4.185 12.1406L3.52219 12.8034C3.34537 12.9742 3.10856 13.0687 2.86275 13.0666C2.61694 13.0644 2.3818 12.9658 2.20798 12.792C2.03416 12.6182 1.93557 12.3831 1.93343 12.1373C1.93129 11.8914 2.02579 11.6546 2.19656 11.4778L2.85938 10.815C3.03619 10.6442 3.273 10.5497 3.51881 10.5519C3.76462 10.554 3.99976 10.6526 4.17358 10.8264C4.3474 11.0002 4.446 11.2354 4.44813 11.4812C4.45027 11.727 4.35577 11.9638 4.185 12.1406ZM1.875 8.4375C2.12364 8.4375 2.3621 8.33873 2.53791 8.16291C2.71373 7.9871 2.8125 7.74864 2.8125 7.5C2.8125 7.25136 2.71373 7.0129 2.53791 6.83709C2.3621 6.66127 2.12364 6.5625 1.875 6.5625H0.9375C0.68886 6.5625 0.450403 6.66127 0.274587 6.83709C0.098772 7.0129 0 7.25136 0 7.5C0 7.74864 0.098772 7.9871 0.274587 8.16291C0.450403 8.33873 0.68886 8.4375 0.9375 8.4375H1.875Z"
            fill={dark ? '#e2e2e0' : '#565656'}
        />
    </svg>
);

export default Sun;
