import LakshmiMills from '@/assets/images/jobs/lakshmi_mills.jpeg';
import RE from '@/assets/images/jobs/re.png';
import TCS from '@/assets/images/jobs/tcs.jpeg';
import TechM from '@/assets/images/jobs/tech_m.png';

import { Company } from '../listing/components/ListItem';

export const companies: Company[] = [
    {
        id: 0,
        logo: RE,
        name: 'Royal Enfield',
        roles: [
            { name: 'Assistant Mechanical Engineer', availability: 5, expectedSalray: [2.6, 3.5] },
            { name: 'Research Associate', availability: 2, expectedSalray: [2.5, 4] },
        ],
        isEligible: false,
        totalApplicants: 30,
    },
    {
        id: 1,
        logo: TCS,
        name: 'Tata Consultancy Services',
        roles: [
            { name: 'Tester', availability: 6, expectedSalray: [3.5, 4.5] },
            { name: 'Full Stack Developer', availability: 24, expectedSalray: [4.5, 7.8] },
        ],
        isEligible: true,
        totalApplicants: 1432,
    },
    {
        id: 2,
        logo: TechM,
        name: 'Tech Mahindra',
        roles: [{ name: 'Data Analyst', availability: 5, expectedSalray: [3.8, 5.1] }],
        isEligible: true,
        totalApplicants: 867,
    },
    {
        id: 3,
        logo: LakshmiMills,
        name: 'Laskmi Mills',
        roles: [{ name: 'Assistant Field Officer', availability: 2, expectedSalray: [3, 4.6] }],
        isEligible: false,
        totalApplicants: 32,
    },
];
