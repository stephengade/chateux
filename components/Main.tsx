import React from 'react'
import { ChatBody } from './ChatBody';
import { ChatInput } from './ChatInput';
import { ChatSideBar } from './ChatSideBar';



export const Main = ({ }) => {
    return (
        <section className="flex flex-row justify-center md:justify-between overflow-hidden">
            <div className="w-1/5 hidden md:block">
                <ChatSideBar />
            </div>
            <div className="w-full md:w-4/5 overflow-hidden">
                <ChatBody />
            </div>
        </section>
    );
}