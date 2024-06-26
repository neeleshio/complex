import React from 'react';

const Name = () => {
    return (
        <div className="max-w-[61rem] leading-[4.5rem] md:leading-[4.3rem] sm:leading-[3.7rem]">
            <h1 className="inline text-[4rem] font-semibold md:text-[3.8rem] sm:text-[3rem]">
                Hi <span className="wave">👋</span>, I'm Neelesh.
            </h1>
            <span
                className="text-[4rem] text-cgrey font-semibold pl-4 md:text-[3.8rem] sm:text-[3rem]"
                aria-label="designation">
                A Frontend Software Development Engineer.
            </span>
        </div>
    );
};

export default Name;
