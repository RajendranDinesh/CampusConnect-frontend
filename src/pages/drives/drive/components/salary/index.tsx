import { Company } from '@/pages/drives/listing/components/ListItem';

interface Stats {
    company: Company;
}

export default function Salray(props: Stats) {
    const { company } = props;

    return (
        <div className=" flex flex-col gap-6 rounded-md bg-secondary-color p-4 py-6 shadow-md ">
            {/* Heading */}
            <div className=" flex justify-between ">
                <h5>Expected Salary</h5>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_403_3455)">
                        <path
                            d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C23.9966 15.1815 22.7312 18.2318 20.4815 20.4815C18.2318 22.7312 15.1815 23.9966 12 24ZM12 2.00001C10.0222 2.00001 8.08879 2.5865 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80689 19.0679 4.93215C17.1931 3.05742 14.6513 2.00292 12 2.00001Z"
                            fill="var(--primary-color)"
                        />
                        <path d="M13.9998 19.0002H11.9998V12.0002H9.99985V10.0002H11.9998C12.5303 10.0002 13.039 10.211 13.4141 10.586C13.7891 10.9611 13.9998 11.4698 13.9998 12.0002V19.0002Z" fill="var(--primary-color)" />
                        <path d="M12 7.99963C12.8284 7.99963 13.5 7.32806 13.5 6.49963C13.5 5.67121 12.8284 4.99963 12 4.99963C11.1716 4.99963 10.5 5.67121 10.5 6.49963C10.5 7.32806 11.1716 7.99963 12 7.99963Z" fill="var(--primary-color)" />
                    </g>
                    <defs>
                        <clipPath id="clip0_403_3455">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            {/* Content */}
            <div>
                {company.roles.map((role, index) => (
                    <div key={index} className=" flex justify-between whitespace-nowrap text-sm text-slate-400 ">
                        <h6>{role.name}</h6>
                        <div>
                            {role.expectedSalray.map((salary, sId) => (
                                <span className=" font-medium text-primary-color " key={sId}>
                                    {salary}
                                    {sId != role.expectedSalray.length - 1 && <>&nbsp;-&nbsp;</>}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
