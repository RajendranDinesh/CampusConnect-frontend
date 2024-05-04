import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { companies } from '../controllers';
import Stats from './components/stats';
import Salray from './components/salary';

export default function Drive() {
    const { id } = useParams();

    const [companyData] = useState(companies.filter((company) => company.id === Number(id))[0]);

    const [activeLevel, setLevel] = useState(0);

    const changeLevel = (level: number) => {
        setLevel(level);
    };

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
                <div className=" flex w-full flex-col ">
                    <div className=" flex h-[18vh] w-full gap-8 rounded-md bg-secondary-color p-4 shadow-md md:h-[16vh] ">
                        <img className=" aspect-square max-w-24 rounded-full " alt="company" src={companyData.logo} />
                        <div className=" flex flex-col justify-center py-2 ">
                            <h2 className=" text-lg font-medium md:text-3xl ">{companyData.name}</h2>
                        </div>
                    </div>

                    <div className=" w-full p-4 ">
                        <div className=" mb-4 flex w-full items-center gap-2 self-center pt-10 md:mb-12 ">
                            <hr className=" w-full " />
                            <div className=" flex flex-col items-center justify-center md:flex-row ">
                                <p className=" whitespace-nowrap font-light ">LEVELS</p>
                            </div>
                            <hr className=" w-full " />
                        </div>

                        <div className=" flex flex-col gap-2 ">
                            {companyData.levels.map((level, index) => (
                                <div className=" flex flex-col gap-4 " key={index}>
                                    <div className=" flex flex-col gap-3 md:gap-0 ">
                                        <div className=" flex items-center " onClick={() => changeLevel(index)}>
                                            <button className={` flex h-12 w-12 items-center justify-center rounded-full text-2xl md:h-12 md:w-12 ${activeLevel === index ? ` bg-primary-color text-secondary-color ` : ` border-2 border-primary-color text-primary-color `} `}>
                                                <span>{index + 1}</span>
                                            </button>
                                            <div className=" whitespace-nowrap p-3 md:px-10 ">
                                                <span>{level.name}</span>
                                            </div>
                                        </div>
                                        <div className={` ${activeLevel === index ? `flex` : `hidden`} flex-col gap-4 rounded-md bg-secondary-color p-8 shadow-sm md:m-6 md:mx-16 `}>
                                            <div className=" flex w-full justify-between ">
                                                <h4 className=" font-medium ">Conducted by</h4>
                                                <span className=" font-light text-slate-400 ">{level.conductedBy}</span>
                                            </div>
                                            <div className=" flex w-full justify-between ">
                                                <h4 className=" font-medium ">Criteria</h4>
                                                <span className=" font-light text-slate-400 ">{level.criteria}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 ">
                    {/* Applicant Statics card */}
                    <Stats company={companyData} />

                    {/* Expected Salary Card */}
                    <Salray company={companyData} />

                    {companyData.isEligible && (
                        <div className=" flex justify-center ">
                            <button className=" rounded-sm bg-primary-color p-8 py-3 font-light text-secondary-color ">REGISTER</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
