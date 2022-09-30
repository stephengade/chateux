import React from 'react'
import { ChatInput } from './ChatInput';


interface ChatBodyProps {

}

export const ChatBody: React.FC<ChatBodyProps> = ({ }) => {
    return (
        <section className="chat__body h-screen w-auto bg-[url('../public/Images/WA.jpg')] ">


            <ChatInput />
        </section>
    );
}