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
        levels: [
            {
                id: 0,
                name: 'INTERNAL SELECTION',
                conductedBy: 'T&P TEAM',
                criteria: 'Dashboard metrics',
            },
            {
                id: 1,
                name: 'WRITTEN TEST',
                conductedBy: 'Royal Enfield Team',
                criteria: 'Technical knowledge and aptitude',
            },
            {
                id: 2,
                name: 'GROUP DISCUSSION',
                conductedBy: 'Royal Enfield HR',
                criteria: 'Communication and teamwork skills',
            },
            {
                id: 3,
                name: 'TECHNICAL INTERVIEW',
                conductedBy: 'Royal Enfield Technical Team',
                criteria: 'Technical expertise and problem-solving skills',
            },
            {
                id: 4,
                name: 'FINAL RESULT',
                conductedBy: 'Royal Enfield HR',
                criteria: 'Overall performance in all levels',
            },
        ],
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
        levels: [
            {
                id: 0,
                name: 'INTERNAL SELECTION',
                conductedBy: 'T&P TEAM',
                criteria: 'Dashboard metrics',
            },
            {
                id: 1,
                name: 'ONLINE ASSESSMENT',
                conductedBy: 'TCS Recruitment Team',
                criteria: 'Aptitude and technical skills',
            },
            {
                id: 2,
                name: 'TECHNICAL INTERVIEW',
                conductedBy: 'TCS Technical Team',
                criteria: 'Technical expertise and problem-solving skills',
            },
            {
                id: 3,
                name: 'MANAGERIAL INTERVIEW',
                conductedBy: 'TCS Management',
                criteria: 'Leadership and communication skills',
            },
            {
                id: 4,
                name: 'FINAL RESULT',
                conductedBy: 'TCS HR',
                criteria: 'Overall performance in all levels',
            },
        ],
    },
    {
        id: 2,
        logo: TechM,
        name: 'Tech Mahindra',
        roles: [{ name: 'Data Analyst', availability: 5, expectedSalray: [3.8, 5.1] }],
        isEligible: true,
        totalApplicants: 867,
        levels: [
            {
                id: 1,
                name: 'APTITUDE',
                conductedBy: 'TechM TEAM',
                criteria: 'Marks attained in the round',
            },
            {
                id: 2,
                name: 'ESSENTIAL SKILLS ASSESSMENT ',
                conductedBy: 'TechM Recruitment Team',
                criteria: 'Technical skills and knowledge',
            },
            {
                id: 3,
                name: 'TECHNICAL INTERVIEW',
                conductedBy: 'TechM Technical Team',
                criteria: 'Technical expertise and problem-solving skills',
            },
            {
                id: 4,
                name: 'HR INTERVIEW',
                conductedBy: 'TechM HR',
                criteria: 'Communication ,teamwork and adaptability skills',
            },
            {
                id: 5,
                name: 'FINAL RESULT',
                conductedBy: 'TechM Management',
                criteria: 'Overall performance in all levels',
            },
        ],
    },
    {
        id: 3,
        logo: LakshmiMills,
        name: 'Laskmi Mills',
        roles: [{ name: 'Assistant Field Officer', availability: 2, expectedSalray: [3, 4.6] }],
        isEligible: false,
        totalApplicants: 32,
        levels: [
            {
                id: 0,
                name: 'INTERNAL SELECTION',
                conductedBy: 'T&P TEAM',
                criteria: 'Dashboard metrics',
            },
            {
                id: 1,
                name: 'WRITTEN EXAMINATION',
                conductedBy: 'Laskmi Mills Recruitment Team',
                criteria: 'General awareness and aptitude',
            },
            {
                id: 2,
                name: 'GROUP DISCUSSION',
                conductedBy: 'Laskmi Mills HR',
                criteria: 'Communication and teamwork skills',
            },
            {
                id: 3,
                name: 'PERSONAL INTERVIEW',
                conductedBy: 'Laskmi Mills Management',
                criteria: 'Overall performance and personality assessment',
            },
            {
                id: 4,
                name: 'FINAL RESULT',
                conductedBy: 'Laskmi Mills Management',
                criteria: 'Overall performance in all levels',
            },
        ],
    },
];
