import { projects } from '../../controllers';

export default function Project() {
    return (
        <div className=" rounded-md bg-secondary-color p-5 shadow-md md:w-full ">
            <div className=" flex items-center gap-8 ">
                <h2 className=" text-3xl font-medium text-text-accent-color ">Projects</h2>
                {/* <span className=" text-neutral-500 ">3 of 12</span> */}
            </div>

            {/* cards container */}
            <div className=" flex flex-col gap-8 py-4 md:flex-row ">
                {/* card */}
                {projects.map((project, index) => (
                    <div className=" md:w-1/3 " key={index}>
                        <img src={project.cardBg} alt="text-generation" />
                        <div className=" p-2 ">
                            {/* title of project */}
                            <h3 className=" text-base ">{project.title}</h3>
                            {/* major technology & completion date */}
                            <div className=" flex gap-4 text-sm text-neutral-500 ">
                                <span>{project.tech}</span>
                                <span>{project.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <span className=" cursor-pointer self-end text-primary-color hover:underline ">SHOW ALL (12)</span> */}
        </div>
    );
}
