import { Company } from '@/pages/drives/listing/components/ListItem';

interface Stats {
    company: Company;
}

export default function Stats(props: Stats) {
    const { company } = props;

    return (
        <div className=" flex flex-col gap-6 rounded-md bg-secondary-color p-4 py-6 shadow-md ">
            <div className=" flex justify-between gap-4 ">
                <h5 className=" whitespace-nowrap ">Total Number of applicants</h5>
                <span>{company.totalApplicants}</span>
            </div>
            <div>
                <h5>Positions Available</h5>
                <div className=" flex flex-col px-4 ">
                    {company.roles.map((role, roleId) => (
                        <div key={roleId} className=" flex justify-between gap-6 ">
                            <h6 className=" whitespace-nowrap text-sm text-slate-400 ">{role.name}</h6>
                            <span className=" text-sm font-medium text-primary-color ">{role.availability}</span>
                        </div>
                    ))}
                    <hr className=" my-2 w-3/4 self-center " />
                    <div className=" flex justify-between gap-6 ">
                        <h6 className=" whitespace-nowrap text-sm text-slate-400 ">Total</h6>
                        <span className=" text-sm font-medium text-text-color ">{company.roles.reduce((counter, role) => counter + role.availability, 0)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
