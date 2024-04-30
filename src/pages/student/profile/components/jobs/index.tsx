import Globe from '@/assets/images/student/globe.png';

export default function Jobs() {
    return (
        <div className=" rounded-md bg-secondary-color p-5 md:w-full ">
            <div className=" flex items-center gap-8 ">
                <h2 className=" text-3xl font-medium text-text-accent-color ">
                    Experience
                </h2>
            </div>

            <div className=" w-full ">
                {/* Job Component starts here */}
                <div className=" my-8 md:flex md:gap-8 ">
                    <div className=" flex max-w-full justify-center rounded-full md:block md:w-28  ">
                        <img className=" w-32 " src={Globe} alt="experience" />
                    </div>

                    <div className=" mt-4 md:mt-0 ">
                        {/* Title of job */}
                        <h2 className=" text-xl ">Full Stack Intern</h2>
                        {/* Company name & Location */}
                        <div className=" my-4 flex gap-8 text-sm font-light ">
                            <span> ReachHub</span>
                            <span>from Remote</span>
                        </div>
                        {/* Time frame of each titles */}
                        <div className=" flex flex-col text-sm font-light md:flex-row md:gap-8 ">
                            <span>November 2023 - present</span>
                            <span className=" text-primary-color ">
                                5 months
                            </span>
                        </div>
                        {/* Skills learned */}
                        <div className=" mt-4 ">
                            <h3>Skills Gained</h3>
                            <div className=" flex flex-wrap gap-2 ">
                                <div className=" w-fit rounded-xl bg-slate-200 px-4 py-1 text-sm ">
                                    NextJS
                                </div>
                                <div className=" w-fit rounded-xl bg-blue-200 px-4 py-1 text-sm ">
                                    Strapi
                                </div>
                                <div className=" w-fit rounded-xl bg-pink-200 px-4 py-1 text-sm ">
                                    Retool
                                </div>
                                <div className=" w-fit rounded-xl bg-orange-200 px-4 py-1 text-sm ">
                                    AWS EC2
                                </div>
                                <div className=" w-fit rounded-xl bg-cyan-100 px-4 py-1 text-sm ">
                                    PostgreSQL
                                </div>
                                <div className=" w-fit rounded-xl bg-violet-200 px-4 py-1 text-sm ">
                                    FastAPI
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
