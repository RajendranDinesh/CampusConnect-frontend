import { companies } from '@/pages/tnp/controllers';

interface Props {
    companyId: number;
}

export default function Departmentes(props: Props) {
    const { companyId } = props;

    return (
        <div className=" w-full pb-4 ">
            <div className=" mx-6 flex flex-col rounded-md bg-secondary-color shadow-md md:mx-0 md:min-w-full ">
                <h1 className=" px-4 pt-4 text-2xl font-medium text-text-accent-color ">Departments</h1>
                <div className=" w-full ">
                    <div className=" w-full py-2 ">
                        <div className=" overflow-x-auto md:overflow-hidden ">
                            <table className=" text-surface w-full text-left text-sm font-light">
                                <thead className="border-b border-neutral-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-normal">
                                            Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies
                                        .filter((company) => company.id == Number(companyId))[0]
                                        .allowedDepts.map((dept, index) => (
                                            <tr className="border-b border-neutral-200 hover:bg-neutral-100" key={index}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                <td className="whitespace-nowrap text-wrap px-6 py-4 ">{dept}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
