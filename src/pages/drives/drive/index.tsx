import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { companies } from '../controllers';
import Stats from './components/stats';
import Salray from './components/salary';

export default function Drive() {
    const { id } = useParams();

    const [companyData] = useState(companies.filter((company) => company.id === Number(id))[0]);

    return (
        <div className=" flex flex-col bg-background-color ">
            {/* Text section */}
            <div className=" mb-4 flex w-10/12 items-center gap-2 self-center pt-10 md:mb-12 ">
                <hr className=" w-full " />
                <div className=" flex flex-col items-center justify-center md:flex-row ">
                    <p className=" whitespace-nowrap font-light ">DRIVE DETAILS</p>
                </div>
                <hr className=" w-full " />
            </div>

            <div className=" flex flex-col gap-4 px-2 md:flex-row md:gap-8 md:px-16 ">
                <div className=" flex h-[18vh] w-full gap-8 rounded-md bg-secondary-color p-4 shadow-md md:h-[16vh] ">
                    <img className=" aspect-square max-w-24 rounded-full " alt="company" src={companyData.logo} />
                    <div className=" flex flex-col justify-center py-2 ">
                        <h2 className=" text-lg font-medium md:text-3xl ">{companyData.name}</h2>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 ">
                    {/* Applicant Statics card */}
                    <Stats company={companyData} />

                    {/* Expected Salary Card */}
                    <Salray company={companyData} />

                    <div className=" flex justify-center ">
                        <button className=" rounded-sm bg-primary-color p-8 py-3 font-light text-secondary-color ">REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
