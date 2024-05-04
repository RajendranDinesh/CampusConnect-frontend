import { companies } from '../controllers';

import ListItem from './components/ListItem';

export default function List() {
    return (
        <div className=" bg-background-color p-4 md:p-8 md:px-16 ">
            {/* Text section */}
            <div className=" mb-12 flex w-full items-center gap-2 ">
                <hr className=" w-full " />
                <div className=" flex flex-col items-center justify-center md:flex-row ">
                    <p className=" whitespace-nowrap font-light ">UPCOMING DRIVES</p>
                </div>
                <hr className=" w-full " />
            </div>

            <div className=" flex flex-col gap-4 ">
                {companies.map((company, index) => (
                    <div
                        onClick={() => {
                            window.location.href = `drives/${company.id}`;
                        }}
                        className=" flex flex-col justify-between gap-6 rounded-md bg-secondary-color p-4 shadow-sm md:flex-row md:gap-0 "
                        key={index}>
                        <ListItem company={company} />
                    </div>
                ))}
            </div>
        </div>
    );
}
