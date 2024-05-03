import { useState } from 'react';

import Toast from '@/components/Toast';

import User from '@/assets/svg/temp/user.svg';

export default function Requests() {
    const [isLoading, setIsLoading] = useState(false);

    const handleAccept = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Toast('success', <p>Accepted</p>);
        }, 1000);
    };

    const handleDecline = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Toast('success', <p>Declined</p>);
        }, 1000);
    };

    return (
        <div className=" flex w-full flex-col gap-4 ">
            <div className=" flex w-full items-center gap-2 ">
                <hr className=" w-full " />
                <div className=" flex w-full flex-col items-center justify-center md:flex-row ">
                    <p className=" whitespace-nowrap ">You have 2 new &nbsp;</p>
                    <span className=" text-nowrap text-primary-color ">connection requests</span>
                </div>
                <hr className=" w-full " />
            </div>

            <div className=" rounded-md ">
                <div className=" flex w-full flex-col items-center justify-between gap-4 rounded-md bg-secondary-color p-4 md:flex-row md:gap-0 ">
                    <div className=" flex items-center gap-4 ">
                        <div>
                            <img className=" w-16 " alt="user" src={User} />
                        </div>
                        <div>
                            <h3 className=" text-2xl font-medium ">Saran S M</h3>
                            <h6 className=" text-sm ">Senior Manager</h6>
                            <span className=" text-xs font-medium text-primary-color ">721 connections</span>
                        </div>
                    </div>
                    {isLoading ? (
                        <div className="text-primary inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                    ) : (
                        <div className=" flex gap-2 ">
                            <button onClick={handleAccept} className=" rounded-md bg-primary-color px-6 py-2 text-secondary-color ">
                                Accept
                            </button>
                            <button onClick={handleDecline} className=" rounded-md border-2 border-slate-200 bg-secondary-color px-6 py-2 text-slate-400 ">
                                Decline
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
