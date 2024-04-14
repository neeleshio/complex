import { BRCardFull } from '@/src/components/Blogs';
import BRCardLarge from '@/src/components/Blogs/BRCardLarge';
import BRCardMedium from '@/src/components/Blogs/BRCardMedium';
import BRCardSmall from '@/src/components/Blogs/BRCardSmall';
import React from 'react';

const Blogs = () => {
    return (
        <section>
            <section className="w-[98rem] m-auto pt-10 mt-10 mb-32">
                <h2 className="text-[3rem] mb-[2.4rem]">Latest Blogs</h2>
                <BRCardFull />
                <div className="flex gap-16 mt-[4rem]">
                    <BRCardLarge />
                    <BRCardLarge />
                </div>
                <div className="flex gap-16 mt-16">
                    <BRCardLarge />
                    <BRCardLarge />
                </div>
                <div className="flex gap-16 mt-16">
                    <BRCardMedium />
                    <BRCardMedium />
                    <BRCardMedium />
                </div>
            </section>
            <section className="bg-[#ffffff]">
                <div className="py-[8rem] w-[98rem] m-auto">
                    <h2 className="text-[3.2rem] mb-[4rem]">More from Blog Wall</h2>
                    <div>
                        <div>
                            <div className="flex gap-24 my-[3.2rem]">
                                <BRCardSmall />
                                <BRCardSmall />
                            </div>
                            <hr className="text-[#d0d0d0]" />
                        </div>
                        <div>
                            <div className="flex gap-24 my-[3.2rem]">
                                <BRCardSmall />
                                <BRCardSmall />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Blogs;
