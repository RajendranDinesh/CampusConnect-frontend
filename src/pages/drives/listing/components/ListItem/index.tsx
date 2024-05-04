interface Level {
    id: number;
    name: string;
    conductedBy: string;
    criteria: string;
}

interface Role {
    name: string;
    availability: number;
    expectedSalray: number[];
}

export interface Company {
    id: number;
    logo: string;
    name: string;
    roles: Role[];
    isEligible: boolean;
    totalApplicants: number;
    levels: Level[];
}

interface Listing {
    company: Company;
}

export default function Listing(props: Listing) {
    const { company } = props;

    return (
        <>
            <div className=" flex h-[16vh] gap-6 md:h-[12vh] md:gap-8 ">
                <img className=" aspect-square max-w-24 rounded-full " alt="company" src={company.logo} />
                <div className=" flex flex-col justify-center ">
                    <h2 className=" text-xl font-medium md:text-3xl ">{company.name}</h2>
                    <div>
                        {company.roles.map((role, roleIndex) => (
                            <span key={roleIndex} className=" text-sm font-thin ">
                                {role.name}
                                {roleIndex != company.roles.length - 1 && <>,</>}&nbsp;
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center gap-8 ">
                {company.isEligible ? (
                    <div className=" flex items-center gap-2 text-green-600 ">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.80018 20.5299C7.40631 20.5306 7.01617 20.4535 6.65218 20.303C6.28819 20.1525 5.95753 19.9315 5.67918 19.6529L0.0861816 14.0609L1.50018 12.6459L7.09318 18.2389C7.28071 18.4263 7.53502 18.5316 7.80018 18.5316C8.06535 18.5316 8.31965 18.4263 8.50718 18.2389L22.5002 4.24585L23.9142 5.65985L9.92118 19.6529C9.64283 19.9315 9.31217 20.1525 8.94818 20.303C8.58419 20.4535 8.19406 20.5306 7.80018 20.5299Z" fill="#02B033" />
                        </svg>
                        <span>Eligible</span>
                    </div>
                ) : (
                    <div className=" flex items-center gap-2 text-red-600 ">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_403_3565)">
                                <path d="M15.293 7.29297L12 10.586L8.70703 7.29297L7.29303 8.70697L10.586 12L7.29303 15.293L8.70703 16.707L12 13.414L15.293 16.707L16.707 15.293L13.414 12L16.707 8.70697L15.293 7.29297Z" fill="#F60000" />
                                <path
                                    d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22Z"
                                    fill="#F60000"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_403_3565">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Not Eligible</span>
                    </div>
                )}
                <button className=" rounded-md bg-primary-color p-2 text-background-color hover:opacity-70 md:px-4 md:py-3 ">View Details</button>
            </div>
        </>
    );
}
