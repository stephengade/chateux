import React from 'react'

interface ChatScreenProps {

}

export const ChatScreen: React.FC<ChatScreenProps> = ({ }) => {
    return (
        <div className="">


            <input type="text" className="w-[300px] absolute py-3 px-2 accent-siloBlue border-solid border-[1px] border-siloBlue " />  <button className="bg-siloBlue text-white px-3 py-2">SEND</button>
        </div>
    );
}