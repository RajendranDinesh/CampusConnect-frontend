import { useNavigate } from 'react-router-dom';

import BackGround from '@/assets/images/student/profile-bg.png';
import PRd from '@/assets/images/student/DineshBlazer.jpg';

export default function ProfileMain() {
    const navigate = useNavigate();

    return (
        <div className=" relative rounded-md  bg-secondary-color shadow-md md:w-full ">
            <div className=" flex justify-end p-2 md:absolute md:right-0 md:top-0 md:block ">
                <button onClick={() => navigate('./edit')} className=" rounded-md border-2 px-6 py-2 text-sm font-light md:border-0 md:bg-secondary-color ">
                    Edit Profile
                </button>
            </div>
            {/* Cover picture */}
            <div className=" hidden h-1/2 w-full md:block ">
                <img src={BackGround} className=" rounded-t-md " />
            </div>

            <div className=" h-1/2 md:flex md:justify-evenly ">
                {/* Profile picture */}
                <div className=" flex w-full justify-center rounded-full py-4 md:-mt-12 md:w-44 ">
                    <img src={PRd} className=" w-36 select-none rounded-full md:h-44 md:w-44 md:border-8 md:border-solid md:border-white " />
                </div>

                <div className=" flex h-full flex-col justify-center gap-4 md:gap-6 ">
                    {/* User name and tagline */}
                    <div className=" flex flex-col gap-2 px-2">
                        <h1 className=" self-center text-2xl font-extrabold md:self-start md:text-4xl ">DINESH P R</h1>
                        <p>Student at BITSathy, Aspiring to be a Machine Learning engineer, Open to offers</p>
                    </div>

                    <div className=" flex flex-col gap-4 p-4 md:flex-row md:gap-8 md:p-0 ">
                        <button className=" rounded-md bg-primary-color px-4 py-2 text-background-color ">Contact Info</button>
                        <button className=" rounded-md border-2 border-solid border-primary-color px-4 py-2 text-primary-color ">143 Connections</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
