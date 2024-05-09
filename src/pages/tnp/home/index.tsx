import { onGoingDrives, upcomingDrives } from '../controllers';

export default function Home() {
    return (
        <div className=" bg-background-color p-8 ">
            <div className=" flex flex-col gap-8 md:flex-row ">
                <div className=" rounded-md bg-secondary-color px-4 py-2 ">
                    <div className=" flex items-center gap-2 ">
                        <div className=" h-2 w-2 rounded-full bg-green-500 " />
                        <h1 className=" text-3xl ">Ongoing Drives</h1>
                    </div>
                    <hr />
                    <div className=" p-4 ">
                        {onGoingDrives.map((drive, dIndex) => (
                            <div key={dIndex} className=" flex flex-col items-center gap-4 md:flex-row ">
                                <img alt="logo" className=" w-24 " src={drive.image} />
                                <div className=" flex flex-col justify-center ">
                                    <h3 className=" text-xl md:text-2xl ">{drive.name}</h3>
                                    <div className=" flex items-center text-slate-400 md:gap-8 md:whitespace-nowrap ">
                                        <h6>Total Number of Applicants</h6>
                                        <span className=" text-primary-color ">{drive.totalApplicants}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" h-fit rounded-md bg-secondary-color px-4 py-2 ">
                    <div className=" flex items-center gap-2 ">
                        <div className=" h-2 w-2 rounded-full bg-yellow-400 " />
                        <h1 className=" text-3xl ">Upcoming Drives</h1>
                    </div>
                    <hr />
                    <div className=" p-4 ">
                        {upcomingDrives.map((drive, dIndex) => (
                            <div key={dIndex} className=" flex flex-col items-center gap-4 md:flex-row ">
                                <img alt="logo" className=" w-24 " src={drive.image} />
                                <div className=" flex flex-col justify-center ">
                                    <h3 className=" flex-xl md:text-2xl ">{drive.name}</h3>
                                    <div className=" flex items-center text-slate-400 md:gap-8 md:whitespace-nowrap ">
                                        <h6>Total Number of Applicants</h6>
                                        <span className=" text-primary-color ">{drive.totalApplicants}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
