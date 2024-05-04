import { useState } from 'react';

import Dinesh from '@/assets/images/student/DineshBlazer.jpg';

export default function Layout({ children }: React.PropsWithChildren) {
    const [isHidden, setIsHidden] = useState(true);

    const handleHide = () => {
        setIsHidden(!isHidden);
    };

    return (
        <>
            <header>
                <nav className="bg-secondary-color">
                    <div className="mx-auto px-4">
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
                                    </a>
                                </div>

                                <div className="hidden flex-col items-center space-x-1 py-4 md:flex">
                                    <a href="/feed" className="flex-col items-center px-3 text-text-color md:flex">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Feed
                                    </a>
                                </div>

                                <div className="hidden flex-col items-center space-x-1 py-4 md:flex">
                                    <a href="/network" className="flex-col items-center px-3 text-text-color md:flex">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Network
                                    </a>
                                </div>

                                <div className="hidden flex-col items-center space-x-1 py-4 md:flex">
                                    <a href="/jobs" className="flex-col items-center px-3 text-text-color md:flex">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Jobs
                                    </a>
                                </div>

                                <div className="hidden flex-col items-center space-x-1 py-4 md:flex">
                                    <a href="/chat" className="flex-col items-center px-3 text-text-color md:flex">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Chat
                                    </a>
                                </div>

                                <div className="hidden flex-col items-center space-x-1 py-4 md:flex">
                                    <a href="/drives" className="flex-col items-center px-3 text-primary-color md:flex">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_403_3695)">
                                                <path
                                                    d="M19 2V0H17V2H15V0H13V2H11V0H9V2H7V0H5V2H3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V2H19ZM19 21C19 21.2652 18.8946 21.5196 18.7071 21.7071C18.5196 21.8946 18.2652 22 18 22H6C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21V4H19V21ZM17 9H7V7H17V9ZM17 13H7V11H17V13ZM13 17H7V15H13V17Z"
                                                    fill="var(--primary-color)"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_403_3695">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Drive
                                    </a>
                                </div>
                            </div>

                            <a href="/student" className=" hidden content-center items-center md:flex ">
                                <div className=" content-center items-center gap-3 md:flex ">
                                    <div className=" h-14 w-14 ">
                                        <img src={Dinesh} alt="drives" className=" rounded-full " />
                                    </div>
                                    <span className=" text-2xl text-text-color ">DINESH P R</span>
                                </div>
                            </a>

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
                        <div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                                Feed
                            </a>
                        </div>

                        <div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                                Network
                            </a>
                        </div>

                        <div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                                Jobs
                            </a>
                        </div>

                        <div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                                Chat
                            </a>
                        </div>

                        <div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                                Drive
                            </a>
                        </div>

                        <div>
                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
                                Sign In
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <hr className=" w-full " />
            <footer className=" flex items-center bg-background-color py-10 ">
                <div className=" flex w-full flex-col-reverse gap-16 md:flex-row md:gap-24 md:px-32 ">
                    <div className=" flex flex-col items-center ">
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
                        <h2 className=" font-light ">
                            Campus
                            <span className=" text-primary-color ">Connect</span>
                        </h2>
                    </div>
                    <div className=" px-12 text-sm font-light md:px-0 ">
                        <h3 className=" text-lg font-normal ">Navigation</h3>
                        <div className=" flex max-w-lg flex-wrap gap-x-32 gap-y-4 ">
                            <div>
                                <a href="/about" className=" hover:underline ">
                                    About
                                </a>
                            </div>
                            <div>
                                <a href="/privacy-policy" className=" hover:underline ">
                                    Privacy policy
                                </a>
                            </div>
                            <div>
                                <a href="/placement-cell" className=" hover:underline ">
                                    Placement Cell
                                </a>
                            </div>
                            <div>
                                <a href="/support-desk" className=" hover:underline ">
                                    Support Desk
                                </a>
                            </div>
                            <div>
                                <a href="/commuity-guidelines" className=" hover:underline ">
                                    Community Guidelines
                                </a>
                            </div>
                            <div>
                                <a href="/terms-and-conditions" className=" hover:underline ">
                                    Terms and Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
