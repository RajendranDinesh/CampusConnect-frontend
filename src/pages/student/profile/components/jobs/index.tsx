import { experiences } from '../../controllers/index';

export default function Jobs() {
    const getRandomColor = () => {
        const colors = ['#595959', '#386FA4', '#DAB6C4', '#FEFFA5', '#CEE5F2', '#7D7ABC'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className=" rounded-md bg-secondary-color p-5 shadow-md md:w-full ">
            <div className=" flex items-center gap-8 ">
                <h2 className=" text-3xl font-medium text-text-accent-color ">Experience</h2>
            </div>

            <div className="w-full">
                {experiences.map((experience, index) => (
                    <div key={index} className="my-8 md:flex md:gap-8">
                        <div className="flex max-w-full justify-center rounded-full md:block md:w-28">
                            <img className="w-32" src={experience.image} alt="experience" />
                        </div>
                        <div className="mt-4 md:mt-0">
                            {/* Title of job */}
                            <h2 className="text-xl">{experience.timeframes[0].title}</h2>
                            {/* Company name & Location */}
                            <div className="my-4 flex gap-8 text-sm font-light">
                                <span>{experience.company}</span>
                                <span>from {experience.location}</span>
                            </div>
                            {/* Time frame of each titles */}
                            {experience.timeframes.map((timeframe, timeframeIndex) => (
                                <div key={timeframeIndex} className="flex flex-col text-sm font-light md:flex-row md:gap-8">
                                    <span>{timeframe.timeframe}</span>
                                    <span className="text-primary-color">{timeframe.duration}</span>
                                    {timeframeIndex > 0 && <span>Role: {timeframe.title}</span>}
                                </div>
                            ))}
                            {/* Skills learned */}
                            <div className="mt-4">
                                <h3>Skills Gained</h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.skills.map((skill, index) => (
                                        <div key={index} style={{ backgroundColor: getRandomColor() }} className={`w-fit rounded-xl px-4 py-1 text-sm`}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
