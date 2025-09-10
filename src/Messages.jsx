import React from 'react';
import Navbar from './Navbar';

const Messages = () => {
    const welcomeMessage = "Welcome to Loomy! Share your link to get new messages.";
    const male = '/male.jpeg';
    const female = '/female.jpeg';
const messages = [
    { id: 1, content: "Hey there! Just wanted to say you're doing an amazing job. Keep it up! lol i'm lying", timestamp: "Yesterday", image: male },
    { id: 2, content: "I really appreciate your positive attitude. It brightens my day!", timestamp: "2 days ago", image: female },
    { id: 3, content: "Your creativity is inspiring. I love seeing the unique ideas you come up with.", timestamp: "3 days ago", image: male },
    { id: 4, content: "Thank you for being such a great listener. It means a lot to me.", timestamp: "1 week ago", image: female },
    { id: 5, content: "Your dedication to the project is incredible. It's really making a difference!", timestamp: "3 weeks ago", image: female },
    { id: 6, content: "I admire how you always find solutions to tough problems. You're a rockstar!", timestamp: "1 month ago", image: male },
    { id: 7, content: "Thanks for always bringing such great energy to the team. It’s contagious!", timestamp: "2 months ago", image: female },
    { id: 8, content: "Your attention to detail is phenomenal. It really elevates our work!", timestamp: "3 months ago", image: male },
    { id: 9, content: "I’m so grateful for your willingness to help out whenever someone’s stuck.", timestamp: "4 months ago", image: female },
    { id: 10, content: "Your leadership in tough situations always keeps us on track. Amazing work!", timestamp: "5 months ago", image: male },
    { id: 11, content: "Thanks for sharing your knowledge so generously. It’s helped me grow a lot!", timestamp: "6 months ago", image: female },
    { id: 12, content: "Your enthusiasm for new challenges is truly motivating. Keep shining!", timestamp: "7 months ago", image: male },
    { id: 13, content: "I appreciate how you always make time to give thoughtful feedback.", timestamp: "8 months ago", image: female },
    { id: 14, content: "Your ability to stay calm under pressure is something we all admire!", timestamp: "9 months ago", image: male }
];

    // Combine welcomeMessage with messages array
    const messageList = [
        { id: 0, content: welcomeMessage, timestamp: "2 weeks ago", image: female },
        ...messages
    ];

    return (
        <>
            <div className='max-w-[640px] mx-auto'>
                <ul>
                    {messageList.map((message, index) => (
                        <li key={message.id} className='flex items-center px-4 py-2.5 relative max-w-[640px] border-b border-gray-200'>
                            <img className='size-18 h-auto rounded-xl border border-black shadow-lg' src={message.image} alt="" />
                            <div className="flex flex-col mx-4 gap-0.5 justify-between">
                                <p className='text-[#000] text-[14px] w-[95%] font-bold line-clamp-2'>{message.content}</p>
                                <span className='text-[#6B7280] text-sm font-medium'>{message.timestamp}</span>
                            </div>
                            <i className={`ri-circle-fill text-sm absolute ${index === 4 || index === 5 || index === 6 ? 'right-[10px]' : 'right-[15px]'} text-[#F59E0B]`}></i>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Messages;