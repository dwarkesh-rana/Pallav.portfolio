import { ClientProfile } from '../types'

export const RESUME_DATA: ClientProfile = {
    name: 'Pallav Zapadiya',
    titles: [
        'Office Assistant',
        'Legal Documentation Assistant',
        'Administrative Professional',
    ],
    summary:
        'Detail-oriented Commerce graduate with practical experience supporting legal documentation, property registration processes, and office administration. Skilled in preparing legal documents, maintaining accurate records, coordinating with clients, and managing day-to-day administrative operations. Proficient in Microsoft Office, Tally ERP, and data management, with a commitment to accuracy, professionalism, and efficient office support.',
    location: {
        city: 'Bhavnagar',
        state: 'Gujarat',
        country: 'India',
    },
    workHistory: [
        {
            role: 'Office Assistant',
            organization: 'Advocate Kamalesh Kokadiya',
            location: 'Not Provided',
            duration: 'June 2024 – December 2025',
            responsibilities: [
                'Prepared and reviewed Sale Deeds, affidavits, agreements, and supporting legal documentation for property transactions.',
                'Assisted in title verification by examining ownership records and supporting property documents.',
                'Coordinated with clients to collect required documentation and facilitate timely property registration.',
                'Maintained accurate physical and digital records through organized filing and data entry.',
                'Managed document formatting, printing, scanning, and photocopying to support daily legal operations.',
                'Assisted with office correspondence and administrative tasks to ensure smooth workflow.',
            ],
        },
    ],
    educationHistory: [
        {
            degree: 'Bachelor of Commerce (B.Com)',
            institution: 'M.J. College of Commerce',
            boardOrUniversity: 'Maharaja Krishnakumarsinhji Bhavnagar University',
            year: '2024',
            score: '49.25%',
        },
        {
            degree: 'Higher Secondary Certificate (HSC - 12th)',
            institution: 'Shree B.M. Commerce High School',
            boardOrUniversity: 'Gujarat Secondary & Higher Secondary Education Board (GHSEB)',
            year: '2021',
            score: '61.28%',
        },
        {
            degree: 'Secondary School Certificate (SSC - 10th)',
            institution: 'Shree B.M. Commerce High School',
            boardOrUniversity: 'Gujarat Secondary Education Board (GSEB)',
            year: '2019',
            score: '70.33%',
        },
    ],
    skills: {
        technical: [
            {
                category: 'Office Software',
                items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Office Suite'],
            },
            {
                category: 'Legal Documentation',
                items: [
                    'Sale Deed Drafting Support',
                    'Property Documentation',
                    'Title Verification',
                    'Registration Documentation',
                ],
            },
            {
                category: 'Administrative Skills',
                items: [
                    'Data Entry',
                    'Record Management',
                    'Filing & Archiving',
                    'Client Coordination',
                    'Office Correspondence',
                ],
            },
            {
                category: 'Accounting',
                items: ['Tally ERP'],
            },
        ],
        soft: [
            'Detail-Oriented',
            'Organized Documentation',
            'Strong Communication',
            'Time Management',
            'Confidential Record Handling',
            'Team Collaboration',
        ],
    },
    languages: [
        { name: 'Gujarati', fluency: 'Native' },
        { name: 'Hindi', fluency: 'Professional' },
        { name: 'English', fluency: 'Working' },
    ],
    contact: {
        email: 'pallavzapadiya97@gmail.com',
        phone: '+919723639597',
        whatsapp: 'https://wa.me/919723639597',
        displayPhone: '+91 97236 39597',
    },
}
