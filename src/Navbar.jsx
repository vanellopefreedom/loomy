import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center bg-white justify-between sticky top-0  left-0 right-0 bottom-0 py-4 px-4 z-50 w-full max-w-[640px] mx-auto">
                <div className="">
                    <a href="/" className="text-2xl block font-bold text-[#E94560]">Loomy</a>
                </div>

                <div className="flex gap-4">
                    <a href="/play" className="font-bold text-[#374151] active:text-amber-50">Play</a>
                    <a href="/messages" className="font-bold text-[#374151]">Messages</a>
                </div>

                <div className="user">
                    <a href="/profile">
                        <i className="ri-user-3-line cursor-pointer text-3xl font-extrabold text-gray-500"></i>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
