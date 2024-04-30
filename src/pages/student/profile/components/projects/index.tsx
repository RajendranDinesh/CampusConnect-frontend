import Image1 from '@/assets/images/student/temp/text-bg.png';
import Image2 from '@/assets/images/student/temp/plant-bg.png';
import Image3 from '@/assets/images/student/temp/dark-bg.png';

export default function Project() {
    return (
        <div className=" rounded-md bg-secondary-color p-5 md:w-full ">
            <div className=" flex items-center gap-8 ">
                <h2 className=" text-3xl font-medium text-text-accent-color ">
                    Projects
                </h2>
                <span className=" text-neutral-500 ">3 of 12</span>
            </div>

            {/* cards container */}
            <div className=" flex flex-col gap-8 py-4 md:flex-row ">
                {/* card */}
                <div className=" md:w-1/3 ">
                    <img src={Image1} alt="text-generation" />
                    <div className=" p-2 ">
                        {/* title of project */}
                        <h3 className=" text-base ">
                            Text generation using transformers
                        </h3>
                        {/* major technology & completion date */}
                        <div className=" flex gap-4 text-sm text-neutral-500 ">
                            <span>LLM</span>
                            <span>10.04.2024</span>
                        </div>
                    </div>
                </div>

                <div className=" md:w-1/3 ">
                    <img src={Image2} alt="disease-prediction" />
                    <div className=" p-2 ">
                        <h3 className=" text-base ">
                            Plant disease prediction
                        </h3>
                        <div className=" flex gap-4 text-sm text-neutral-500 ">
                            <span>CNN</span>
                            <span>10.07.2023</span>
                        </div>
                    </div>
                </div>

                <div className=" md:w-1/3 ">
                    <img src={Image3} alt="dark-pattern-busting" />
                    <div className=" p-2 ">
                        <h3 className=" text-base ">Dark pattern buster</h3>
                        <div className=" flex gap-4 text-sm text-neutral-500 ">
                            <span>Text classification</span>
                            <span>20.02.2023</span>
                        </div>
                    </div>
                </div>
            </div>

            <span className=" cursor-pointer self-end text-primary-color hover:underline ">
                SHOW ALL (12)
            </span>
        </div>
    );
}
