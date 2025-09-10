import React from 'react'
import { toPng, toJpeg } from "html-to-image";
import { useRef, useState } from "react";
import Link from './Link';


const Card = () => {

    const cardRef = useRef(null);
    const [currentPostIndex, setCurrentPostIndex] = useState(0); // State for dynamic post cycling

    const posts = [
        { id: 1, content: "Send me anonymous confessions", title: "Confessions" },
        { id: 2, content: "They're a 10 but....", title: "Dealbreakers" },
        { id: 3, content: "Share an opinion, idea, or feedback that'll get you cancelled anonymously.", title: "Cancelled" },
        { id: 4, content: "If you could change anything about me, what could it be?", title: "TBH" },
        { id: 5, content: "Confess a secret you've never told anyone but always wanted to let out.", title: "Secret" },
        { id: 6, content: "What’s the biggest regret you carry silently?", title: "Regret" },
        { id: 7, content: "Share an unfiltered thought you often hide from friends or family.", title: "Unfiltered" },
        { id: 8, content: "What’s one thing you desperately wish people understood about you?", title: "Misunderstood" },
        { id: 9, content: "Reveal a fear that still keeps you up at night.", title: "Fear" },
        { id: 10, content: "What’s a memory you replay in your head but never speak of?", title: "Memory" },
        { id: 11, content: "If you could tell your younger self one painful truth, what would it be?", title: "Truth" },
        { id: 12, content: "Admit something you envy about others but never show.", title: "Envy" },
        { id: 13, content: "What’s the harshest judgement you secretly hold about society?", title: "Judgement" },
        { id: 14, content: "Share the loneliest thought you’ve had that no one knows about.", title: "Lonely" },
        { id: 15, content: "What’s a vulnerability you wish you could express more openly?", title: "Vulnerability" }
    ];

    const downloadImage = async (format = "png") => {
        if (!cardRef.current) return;

        const options = {
            cacheBust: true,
            pixelRatio: 8, // sharper on mobile/retina
            style: { margin: 0 }, // avoids weird clipping
        };

        let dataUrl;
        if (format === "jpeg") {
            dataUrl = await toJpeg(cardRef.current, { ...options, quality: 0.95 });
        } else {
            dataUrl = await toPng(cardRef.current, options);
        }

        const link = document.createElement("a");
        link.download = `card.${format}`;
        link.href = dataUrl;
        link.click();
        const shade = document.querySelector('.shade');
        shade.classList.add('animate-pulse');
    };

    const handleNextPost = () => {
        setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    };

    const female = '/female.jpeg';
    const male = '/male.jpeg';
    const neutral = '/neutral.jpeg';

    return (
        <>
            <section className="flex flex-col items-center gap-4 p-4 mt-4">
                {/* Card to export */}
                <div className="shade w-full bg-transparent h-auto 2md:w-fit" ref={cardRef}>
                    <div
                        className="flex flex-col items-center w-[90%] max-w-[370px] pt-12 gap-4 rounded-3xl mx-auto bg-[#E94560] shadow-lg overflow-hidden"
                    >
                        <div className="flex w-full justify-center">
                            <img
                                className="size-20 rounded-2xl shadow-2xl border border-black bg-[#eee]"
                                src={female}
                                alt="pfp"
                            />
                        </div>
                        <div className="w-full bg-white">
                            <h2 className="text-2xl text-[#F59E0B] text-center py-2.5 font-bold">
                                {posts[currentPostIndex].title}
                            </h2>
                            <p className='text-center font-bold pt-1.5 pb-6 px-12 text-[#374151] max-w-[350px] mx-auto'>{posts[currentPostIndex].content}</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-2.5">
                    <i onClick={() => downloadImage("png")} className="ri-download-line text-[#374151] not-odd:shadow-md text-3xl font-bold cursor-pointer"></i>
                    <i onClick={handleNextPost} className="ri-exchange-2-line text-3xl px-1.5 flex items-center bg-[#fff] font-bold rounded-lg cursor-pointer text-[#E94560]"></i>
                </div>
            </section>

            <Link />
        </>
    );
}

export default Card
