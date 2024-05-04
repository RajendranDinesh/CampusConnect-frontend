import { useState } from 'react';

import { chats } from './controller';

import ChatInterface from './components/chat';
import Layout from './layout';
import User from './components/user';

import Search from '@/assets/svg/search.svg';

export default function Chat() {
    const [activeChat, setActiveChat] = useState<undefined | number>(undefined);

    const changeActiveChat = (id: number) => {
        setListHidden(!isListHidden);
        setActiveChat(id);
    };

    const [isListHidden, setListHidden] = useState(false);

    return (
        <Layout>
            <div className=" bg-background-color p-4 md:p-8 md:px-16 ">
                <div className=" flex w-full gap-8 ">
                    <div className={` ${isListHidden && `hidden`} flex w-full flex-col gap-4 md:flex md:w-1/4 `}>
                        <div className=" flex gap-4 rounded-md bg-secondary-color px-2 py-2 shadow-sm ">
                            <input className=" min-w-[60%] p-2 " name="searchPeople" placeholder="Search" />
                            <button className=" p-2 ">
                                <img alt="search" src={Search} />
                            </button>
                        </div>
                        <div className=" scrollbar max-h-96 w-full overflow-y-auto rounded-md bg-secondary-color shadow-md ">
                            <div>
                                {chats.map((chat, index) => {
                                    return <User activeId={activeChat} name={chat.name} id={index} changeTo={changeActiveChat} key={index} />;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={` ${!isListHidden && `hidden`} w-full md:block `}>
                        {activeChat === undefined && <>How about we chat with someone?</>}
                        {typeof activeChat === 'number' && <ChatInterface id={activeChat} hideList={setListHidden} />}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
