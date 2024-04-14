const Js = ({ dark }) => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_95_37)">
            <path d="M0 0H256V256H0V0Z" fill={dark ? '#0a0a08' : '#f5f5f7'} />
            <path
                d="M44.001 165.779L63.591 153.923C67.371 160.624 70.809 166.294 79.056 166.294C86.961 166.294 91.946 163.202 91.946 151.174V69.376H116.003V151.514C116.003 176.431 101.397 187.773 80.087 187.773C60.842 187.773 49.671 177.806 44 165.777M129.07 163.201L148.658 151.86C153.815 160.281 160.517 166.467 172.373 166.467C182.342 166.467 188.698 161.483 188.698 154.609C188.698 146.361 182.168 143.439 171.17 138.629L165.157 136.049C147.8 128.662 136.287 119.382 136.287 99.792C136.287 81.748 150.034 68 171.515 68C186.809 68 197.807 73.328 205.711 87.247L186.979 99.277C182.854 91.888 178.388 88.967 171.514 88.967C164.468 88.967 160 93.435 160 99.277C160 106.494 164.468 109.417 174.778 113.885L180.792 116.462C201.242 125.227 212.755 134.162 212.755 154.266C212.755 175.92 195.743 187.776 172.888 187.776C150.549 187.776 136.114 177.122 129.069 163.202"
                fill={dark ? '#DC9C24' : 'black'}
            />
        </g>
        <defs>
            <clipPath id="clip0_95_37">
                <rect width="256" height="256" rx="128" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default Js;
