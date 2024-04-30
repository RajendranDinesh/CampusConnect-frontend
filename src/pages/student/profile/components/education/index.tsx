import BITLogo from '@/assets/images/student/bitsathy.jpeg';

export default function Education() {
    return (
        <div className=" rounded-md bg-secondary-color p-5 md:w-full ">
            <div className=" flex items-center gap-8 ">
                <h2 className=" text-3xl font-medium text-text-accent-color ">
                    Education
                </h2>
            </div>

            <div className=" w-full ">
                <div className=" my-8 md:flex md:gap-8 ">
                    <div className=" flex max-w-full justify-center rounded-full md:block md:w-28  ">
                        <img
                            className=" w-32 "
                            src={BITLogo}
                            alt="experience"
                        />
                    </div>

                    <div className=" mt-4 md:mt-0 ">
                        {/* Title of job */}
                        <h2 className=" text-xl ">
                            Bannari Amman Institute of Technology
                        </h2>
                        {/* Degree and filed */}
                        <div className=" my-4 flex text-sm font-light ">
                            <span>
                                Bachelors in Artificial Intelligence and Machine
                                Learning
                            </span>
                        </div>
                        {/* Time frame of course */}
                        <div className=" flex flex-col text-sm font-light md:flex-row md:gap-8 ">
                            <span>November 2022 - May 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
