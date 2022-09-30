import React, { useState } from 'react'

interface ChatScreenProps {

}

export const ChatInput: React.FC<ChatScreenProps> = ({ }) => {
    const [text, setText] = useState<string | any>("")

    const handleChange = (e: any) => {
        setText(e.target.value)
    }

    const handleSend = () => {
           if(text.length <= 0) return alert("Alaye, type something 🙄")
        alert(`Ok, you want to send: ${text}`);
        setText("")
    }


    return (
        <div className="flex flex-row items-center gap-5 w-full md:w-[80%] mb-[2px] rounded-[5px] bg-white absolute bottom-0 border-solid border-[1px] border-siloBlue ">
            <label htmlFor="chatInput" />
            <input value={text} onChange={handleChange} id="chatInput" type="text" placeholder="start typing..." className="py-1 w-full accent-siloBlue outline-none border-none shadow-2xl" />
            <button onClick={handleSend} className="bg-siloBlue text-white px-3 py-1 absolute right-0">Shoot!</button>
        </div>
    );
}