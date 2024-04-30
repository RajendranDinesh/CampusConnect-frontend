import MainSection from './components/main';
import ProjectSection from './components/projects';
import JobSection from './components/jobs';
import Education from './components/education';

export default function Profile() {
    return (
        <div className=" h-max bg-background-color p-8 ">
            <div className=" flex h-max w-full flex-col justify-evenly gap-6 md:flex-row ">
                {/* left container */}
                <div className=" flex flex-col gap-6 md:w-8/12 ">
                    <MainSection />
                    <ProjectSection />
                    <JobSection />
                    <Education />

                    {/* Card template
                    <div className=" rounded-md bg-secondary-color p-5 md:w-full ">
                        <div className=" flex items-center gap-8 ">
                            <h2 className=" text-3xl font-medium text-text-accent-color ">
                                __Section_name__
                            </h2>
                        </div>
                    </div> */}
                </div>

                {/* right container */}
                <div className=" flex flex-col gap-6 md:w-1/4 ">
                    <div className=" flex gap-6 rounded-md bg-secondary-color p-5 md:flex-col ">
                        <div className=" flex w-full flex-col items-center justify-between rounded-md border-2 border-solid border-slate-500 px-4 py-2 md:flex-row ">
                            <h3 className=" text-xl ">Roll Number</h3>
                            <span className=" font-medium text-primary-color ">
                                7376222AL128
                            </span>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-2 rounded-md bg-secondary-color p-5 ">
                        <h1 className=" text-3xl font-medium text-text-accent-color ">
                            About
                        </h1>
                        <p className=" text-text-color ">
                            I&apos;m more experienced in web projects, but have
                            started to work with projects on machine learning.
                        </p>
                    </div>

                    <div className=" flex flex-col gap-6 rounded-md bg-secondary-color p-5 ">
                        <h1 className=" text-3xl font-medium text-text-accent-color ">
                            Skills & Endoresments
                        </h1>

                        <div className=" flex flex-col gap-4 ">
                            <div className=" flex items-center justify-between rounded-md border-2 border-solid border-slate-500 px-4 py-2 ">
                                <h3 className=" text-xl ">PyTorch</h3>
                                <span className=" text-4xl font-medium text-primary-color">
                                    3
                                </span>
                            </div>

                            <div className=" flex items-center justify-between rounded-md border-2 border-solid border-slate-500 px-4 py-2 ">
                                <h3 className=" text-xl ">Transformers</h3>
                                <span className=" text-4xl font-medium text-primary-color ">
                                    7
                                </span>
                            </div>
                        </div>

                        <span className=" cursor-pointer self-end text-primary-color hover:underline ">
                            Show All (7)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
