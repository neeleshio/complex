type colorProp = {
    color: string;
};

const Moon = ({ color }: colorProp) => (
    <svg width="13" height="13" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.50036 3.47099e-08C6.85416 -6.86412e-05 5.24336 0.47789 3.86362 1.37582C2.48388 2.27375 1.39456 3.55302 0.727992 5.05822C0.0614218 6.56343 -0.153721 8.22982 0.108696 9.85497C0.371113 11.4801 1.0998 12.9941 2.20624 14.213C3.31268 15.4319 4.74927 16.3033 6.3415 16.7214C7.93374 17.1394 9.61311 17.0861 11.1756 16.5679C12.7381 16.0497 14.1166 15.089 15.1435 13.8023C16.1704 12.5157 16.8015 10.9585 16.9604 9.32C16.9694 9.22212 16.9494 9.12375 16.9028 9.03718C16.8563 8.95061 16.7852 8.87969 16.6986 8.83327C16.6119 8.78685 16.5135 8.767 16.4157 8.77621C16.3178 8.78541 16.2248 8.82325 16.1484 8.885C15.6316 9.30318 15.0366 9.61411 14.3982 9.79959C13.7598 9.98508 13.0908 10.0414 12.4304 9.96525C11.77 9.8891 11.1314 9.68202 10.552 9.35612C9.97257 9.03023 9.46395 8.59205 9.05589 8.06723C8.64783 7.54242 8.34853 6.9415 8.17549 6.29962C8.00245 5.65775 7.95914 4.98782 8.04811 4.32901C8.13708 3.6702 8.35653 3.03575 8.69363 2.46277C9.03073 1.88978 9.47871 1.38978 10.0114 0.992C10.0904 0.932947 10.1502 0.851831 10.1832 0.758863C10.2163 0.665896 10.2211 0.565233 10.197 0.469548C10.1729 0.373864 10.1211 0.287434 10.048 0.221141C9.97498 0.154848 9.88393 0.111655 9.78636 0.0969999C9.36074 0.0323864 8.93086 -3.87264e-05 8.50036 3.47099e-08Z"
            fill={color || '#565656'}
        />
    </svg>
);

export default Moon;