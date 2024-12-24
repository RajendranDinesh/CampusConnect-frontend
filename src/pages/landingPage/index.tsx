import { useEffect } from 'react';

import Header from './components/header';

import LandingCover from '@/assets/images/landingPage/landing.png';

export default function LandingPage() {
    useEffect(() => {
        const passphrase = localStorage.getItem(`tocopass`);

        if (passphrase !== null) window.location.href = '/student';
    });

    return (
        <>
            <Header />
            <main className="h-full w-full flex-col items-center justify-center md:flex">
                <h1 className=" mt-2 text-6xl font-extralight text-text-accent-color ">Your Professional Journey Starts Here</h1>
                <img src={LandingCover} />
            </main>
        </>
    );
}
