import { useState } from 'react';

import Connections from './components/connections';
import Layout from './layout';
import Requests from './components/requests';

import Globe from '@/assets/svg/globe.svg';
import UserTime from '@/assets/svg/user_time.svg';

export default function Feed() {
    // 0 -> Connections view, 1 -> Request view
    const [currentView, setCurrentView] = useState(0);

    return (
        <Layout>
            <div className=" flex min-h-96 flex-col gap-8 bg-background-color p-4 md:p-8 md:px-16 ">
                <div className=" flex flex-col justify-between gap-6 md:flex-row md:gap-12 ">
                    <div className=" flex h-fit gap-2 overflow-x-scroll rounded-md md:w-1/3 md:flex-col md:gap-0 md:overflow-x-auto md:bg-secondary-color  ">
                        <div className={` flex w-full rounded-md border-primary-color bg-secondary-color hover:cursor-pointer hover:border-2 md:rounded-b-none md:rounded-t-md md:border-0 ${currentView === 0 && 'border-2'} `}>
                            {currentView === 0 && <div className=" hidden min-h-full rounded-tl-md bg-primary-color p-2 md:block " />}
                            <div className=" flex w-full flex-col items-center justify-between rounded-tr-md p-4 py-6 md:flex-row " onClick={() => setCurrentView(0)}>
                                <div className=" flex flex-col items-center gap-2 md:flex-row ">
                                    <img className=" max-w-8 " alt="your connections" src={Globe} /> <h4>Connections</h4>
                                </div>
                                <span>28</span>
                            </div>
                        </div>
                        <hr />
                        <div className={` flex w-full rounded-md border-primary-color bg-secondary-color hover:cursor-pointer hover:border-2 md:rounded-b-md md:rounded-t-none md:border-0 ${currentView === 1 && 'border-2'} `}>
                            {currentView === 1 && <div className=" hidden min-h-full rounded-bl-md bg-primary-color p-2 md:block " />}
                            <div className=" flex w-full flex-col items-center justify-between rounded-tr-md p-4 py-6 md:flex-row " onClick={() => setCurrentView(1)}>
                                <div className=" flex flex-col items-center gap-2 md:flex-row ">
                                    <img alt="requests" src={UserTime} /> <h4>Requests</h4>
                                </div>
                                <span>2</span>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full ">
                        {currentView === 0 && <Connections />}
                        {currentView === 1 && <Requests />}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
