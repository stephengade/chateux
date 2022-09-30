import React from 'react'

interface ChatScreenProps {

}

export const ChatInput: React.FC<ChatScreenProps> = ({ }) => {
    return (
        <div className="flex flex-row items-center gap-5 w-full md:w-[75%] rounded-[5px] bg-white absolute bottom-0 border-solid border-[1px] border-siloBlue ">
            <label htmlFor="chatInput" />
            <input id="chatInput" type="text" placeholder="start typing..." className="py-1 w-full accent-siloBlue outline-none border-none " />
            <button className="bg-siloBlue text-white px-3 py-1 absolute right-0">SEND</button>
        </div>
    );
}