interface Job {
    profilePic: string;
    title: string;
    company: string;
    location: string;
    about: string;
}

interface Post {
    job: Job;
}

export default function Posting(props: Post) {
    const { job } = props;

    return (
        <div className=" flex flex-col items-center justify-between gap-4 rounded-md bg-secondary-color p-4 shadow-sm md:flex-row md:gap-0 ">
            <div className=" flex flex-col items-center gap-6 md:flex-row ">
                <div>
                    <img className=" w-24 " alt=" user " src={job.profilePic} />
                </div>
                <div className=" flex w-full flex-col items-center gap-2 md:items-start ">
                    <h2 className=" text-xl ">{job.title}</h2>
                    <div className=" flex gap-8 ">
                        <span className=" text-sm font-thin ">{job.company}</span>
                        <span className=" text-sm font-thin ">{job.location}</span>
                    </div>
                    <p className=" w-3/4 text-sm font-light ">{job.about}</p>
                </div>
            </div>
            <div>
                <button className=" text-primary-color ">View More</button>
            </div>
        </div>
    );
}
