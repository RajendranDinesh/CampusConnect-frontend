import Image1 from '@/assets/images/student/temp/text-bg.png';
import Image2 from '@/assets/images/student/temp/plant-bg.png';
import Image3 from '@/assets/images/student/temp/dark-bg.png';
import Globe from '@/assets/images/student/globe.png';

export const projects = [
    {
        cardBg: Image1,
        title: 'Text Generation Using Transformers',
        tech: 'LLM',
        date: '10.04.2024',
    },
    {
        cardBg: Image2,
        title: 'Plant Disease Prediction',
        tech: 'CNN',
        date: '18.07.2023',
    },
    {
        cardBg: Image3,
        title: 'Dark Pattern Buster',
        tech: 'Text Classification',
        date: '28.02.2023',
    },
];

export const experiences = [
    {
        image: Globe,
        company: 'ReachHub',
        location: 'Remote',
        timeframes: [
            {
                timeframe: 'November 2023 - present',
                duration: '5 months',
                title: 'Full Stack Intern',
            },
            {
                timeframe: 'October 2023 - November 2023',
                duration: '1 month',
                title: 'Trainee',
            },
        ],
        duration: '5 months',
        skills: ['NextJS', 'Strapi', 'Retool', 'AWS EC2', 'PostgreSQL', 'FastAPI'],
    },
];

export const studies = [
    {
        instituteName: 'Bannari Amman Institute of Technology',
        degree: 'Bachelors',
        branch: 'Artificial Intelligence & Machine Learning',
        timeFrame: 'November 2022 - May 2026',
    },
    {
        instituteName: 'Indian Institute of Technology - Madras',
        degree: 'Masters',
        branch: 'Transformers',
        timeFrame: 'September 2026 - June 2028',
    },
];
