import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

import Toast from '@/components/Toast';
import { BASE_URL } from '@/networking';

export default function Header() {
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleHide = () => {
        setIsHidden(!isHidden);
    };

    const handleLogin = () => {
        setIsLoading(true);

        Toast('info', <p>Redirecting for google authentication.</p>);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        window.location.href = `${BASE_URL}auth/google`;
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) redirect('student');
    }, []);

    return (
        <header>
            <nav className="bg-gray-100">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <div>
                                <a href="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
                                    <svg width="50" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M120 22C120 9.84974 110.15 0 98 0H22C9.84974 0 0 9.84974 0 22V98C0 110.15 9.84974 120 22 120H98C110.15 120 120 110.15 120 98V22ZM10.8375 46.192C8.7735 50.08 7.7415 54.52 7.7415 59.512C7.7415 64.552 8.7735 69.04 10.8375 72.976C12.9495 76.864 15.9255 79.912 19.7655 82.12C23.6055 84.28 28.0215 85.36 33.0135 85.36C39.3495 85.36 44.6775 83.68 48.9975 80.32C50.7171 78.9635 52.1933 77.4168 53.4261 75.68C56.4213 71.4603 52.4678 66.496 47.2932 66.496V66.496C44.1564 66.496 41.5027 68.6012 38.9759 70.4599C38.7709 70.6107 38.5594 70.7534 38.3415 70.888C36.7575 71.896 34.9095 72.4 32.7975 72.4C29.5335 72.4 26.9175 71.248 24.9495 68.944C23.0295 66.592 22.0695 63.448 22.0695 59.512C22.0695 55.624 23.0295 52.528 24.9495 50.224C26.9175 47.872 29.5335 46.696 32.7975 46.696C34.9095 46.696 36.7575 47.2 38.3415 48.208C38.5594 48.3426 38.7709 48.4853 38.9759 48.6361C41.5027 50.4948 44.1564 52.6 47.2932 52.6V52.6C52.4678 52.6 56.4256 47.6304 53.4127 43.4233C52.1826 41.7057 50.7108 40.1806 48.9975 38.848C44.6775 35.44 39.3495 33.736 33.0135 33.736C28.0215 33.736 23.6055 34.84 19.7655 37.048C15.9255 39.208 12.9495 42.256 10.8375 46.192ZM65.4 46.192C63.336 50.08 62.304 54.52 62.304 59.512C62.304 64.552 63.336 69.04 65.4 72.976C67.512 76.864 70.488 79.912 74.328 82.12C78.168 84.28 82.584 85.36 87.576 85.36C93.912 85.36 99.24 83.68 103.56 80.32C105.28 78.9635 106.756 77.4168 107.989 75.68C110.984 71.4603 107.03 66.496 101.856 66.496V66.496C98.7189 66.496 96.0652 68.6012 93.5384 70.4599C93.3334 70.6107 93.1219 70.7534 92.904 70.888C91.32 71.896 89.472 72.4 87.36 72.4C84.096 72.4 81.48 71.248 79.512 68.944C77.592 66.592 76.632 63.448 76.632 59.512C76.632 55.624 77.592 52.528 79.512 50.224C81.48 47.872 84.096 46.696 87.36 46.696C89.472 46.696 91.32 47.2 92.904 48.208C93.1219 48.3426 93.3334 48.4853 93.5384 48.6361C96.0652 50.4948 98.7189 52.6 101.856 52.6V52.6C107.03 52.6 110.988 47.6304 107.975 43.4233C106.745 41.7057 105.273 40.1806 103.56 38.848C99.24 35.44 93.912 33.736 87.576 33.736C82.584 33.736 78.168 34.84 74.328 37.048C70.488 39.208 67.512 42.256 65.4 46.192Z"
                                            fill="url(#paint0_linear_4834_1021)"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear_4834_1021" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0077B5" />
                                                <stop offset="1" stopColor="#0E6795" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className="px-4 font-bold">Campus Connect</span>
                                </a>
                            </div>

                            <div className="hidden items-center space-x-1 md:hidden">
                                <a href="#" className="px-3 py-5 text-gray-700 hover:text-gray-900">
                                    Features
                                </a>
                            </div>
                        </div>

                        <div className="hidden items-center space-x-1 md:flex" onClick={handleLogin}>
                            <button className="h-10 w-24 rounded bg-primary-color px-3 py-2 text-background-color transition duration-300">
                                {isLoading ? (
                                    <div className="text-primary inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </div>

                        <div className="flex items-center md:hidden">
                            <button className="mobile-menu-button" onClick={handleHide}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu ${isHidden && `hidden md:hidden `}`}>
                    <div className="items-center space-x-1 md:flex" onClick={handleLogin}>
                        <button className="h-10 w-24 rounded bg-primary-color px-3 py-2 text-background-color transition duration-300">
                            {isLoading ? (
                                <div className="text-primary inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
