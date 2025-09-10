import React from 'react'

const Link = () => {
  return (
    <>

    <section className="flex flex-col items-center p-4 mt-2 bg-[#F9FAFB] rounded-2xl max-w-[640px] mx-auto">
    <h2>STEP 1: COPY YOUR LINK</h2>

    <span>{window.location.href}</span>

    <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
    </section>
    </>
  )
}

export default Link
