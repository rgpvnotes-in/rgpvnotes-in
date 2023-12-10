export const typeFilters = [
    {
        cssClass: 'grading',
        text: 'Grading System',
    },
    {
        cssClass: 'non-grading',
        text: 'Non Grading System',
    },
    {
        cssClass: 'lateral-entry',
        text: 'Lateral Entry',
    },
    {
        cssClass: 'cbcs',
        text: 'CBCS',
    },
    {
        cssClass: 'cbgs',
        text: 'CBGS',
    },
    {
        cssClass: 'as-per-coa',
        text: 'As per COA',
    },
];

export const programList = [
    {
        programLink: '/be/',
        programName: 'Bachelor of Engineering',
        programCategory: [
            {
                name: 'non-grading',
                image: 'assets/img/program/be-non-grading.png',
            },
            { name: 'grading', image: 'assets/img/program/be-grading.png' },
            { name: 'cbcs', image: 'assets/img/program/be-cbcs.png' },
            { name: 'cbgs', image: 'assets/img/program/be-cbgs.png' },
        ],
    },
    {
        programLink: '/btech/',
        programName: 'Bachelor of Technology',
        programCategory: [
            {
                name: 'non-grading',
                image: 'assets/img/program/btech-non-grading.png',
            },
            { name: 'grading', image: 'assets/img/program/btech-grading.png' },
        ],
    },
];

export const programNamesArray = [
    {
        _id: 1,
        _order: 1,
        _display: true,
        shortDisplayText: 'MBA',
        longDisplayText: 'Master in Business Administration',
        folderName: 'mba',
        associatedSchemes: [1],
    },
    {
        _id: 2,
        _order: 2,
        _display: true,
        shortDisplayText: 'M.Arch',
        longDisplayText: 'Master of Architecture',
        folderName: 'march',
        associatedSchemes: [1],
    },
    {
        _id: 3,
        _order: 3,
        _display: true,
        shortDisplayText: 'B.Tech',
        longDisplayText: 'Bachelor of Technology',
        folderName: 'btech',
        associatedSchemes: [1, 2],
    },
    {
        _id: 4,
        _order: 4,
        _display: true,
        shortDisplayText: 'BE',
        longDisplayText: 'Bachelor of Engineering',
        folderName: 'be',
        associatedSchemes: [1, 2, 4, 5],
    },
    {
        _id: 5,
        _order: 5,
        _display: true,
        shortDisplayText: 'BE-PTDC',
        longDisplayText: 'Bachelor of Engineering - Part Time Diploma Courses',
        folderName: 'be-ptdc',
        associatedSchemes: [1, 2],
    },
    {
        _id: 6,
        _order: 6,
        _display: true,
        shortDisplayText: 'B.Tech-PTDC',
        longDisplayText: 'Bachelor of Technology - Part Time Diploma Courses',
        folderName: 'btech-ptdc',
        associatedSchemes: [],
    },
    {
        _id: 7,
        _order: 7,
        _display: true,
        shortDisplayText: 'B.Pharm (PCI)',
        longDisplayText: 'Bachelor of Pharmacy - Pharmacy Council of India',
        folderName: 'bpharm-(pci)',
        associatedSchemes: [1],
    },
    {
        _id: 8,
        _order: 8,
        _display: true,
        shortDisplayText: 'B.Pharm',
        longDisplayText: 'Bachelor of Pharmacy ',
        folderName: 'bpharm',
        associatedSchemes: [1, 2, 3, 4, 5],
    },
    {
        _id: 9,
        _order: 9,
        _display: true,
        shortDisplayText: 'B.Arch',
        longDisplayText: 'Bachelor Of Architecture',
        folderName: 'barch',
        associatedSchemes: [1, 4, 5, 6],
    },
    {
        _id: 10,
        _order: 10,
        _display: true,
        shortDisplayText: 'M.E',
        longDisplayText: 'Master of Engineering',
        folderName: 'me',
        associatedSchemes: [1],
    },
    {
        _id: 11,
        _order: 11,
        _display: true,
        shortDisplayText: 'M.Tech',
        longDisplayText: 'Master of Technology',
        folderName: 'mtech',
        associatedSchemes: [1],
    },
    {
        _id: 12,
        _order: 12,
        _display: true,
        shortDisplayText: 'M.Tech (Part Time)',
        longDisplayText: 'Master of Technology (Part Time)',
        folderName: 'mtech-(part-time)',
        associatedSchemes: [1],
    },
    {
        _id: 13,
        _order: 13,
        _display: true,
        shortDisplayText: 'M.Pharm',
        longDisplayText: 'Master of Pharmacy',
        folderName: 'mpharm',
        associatedSchemes: [1, 2],
    },
    {
        _id: 14,
        _order: 14,
        _display: true,
        shortDisplayText: 'M.Pharm PCI',
        longDisplayText: 'Master of Pharmacy - Pharmacy Council of India',
        folderName: 'mpharm-pci',
        associatedSchemes: [1],
    },
    {
        _id: 15,
        _order: 15,
        _display: true,
        shortDisplayText: 'MCA 2 Year',
        longDisplayText: 'Master of Computer Applications - 2 Year',
        folderName: 'mca-2-year',
        associatedSchemes: [1],
    },
    {
        _id: 16,
        _order: 16,
        _display: true,
        shortDisplayText: 'MCA',
        longDisplayText: 'Master of Computer Applications',
        folderName: 'mca',
        associatedSchemes: [1, 2],
    },
    {
        _id: 17,
        _order: 17,
        _display: true,
        shortDisplayText: 'MCA Dual Degree',
        longDisplayText: 'Master of Computer Applications Dual Degree',
        folderName: 'mca-dual-degree',
        associatedSchemes: [1],
    },
    {
        _id: 18,
        _order: 18,
        _display: true,
        shortDisplayText: 'MBA Integrated',
        longDisplayText: 'Master in Business Administration Integrated ',
        folderName: 'mba-integrated',
        associatedSchemes: [1],
    },
    {
        _id: 19,
        _order: 19,
        _display: true,
        shortDisplayText: 'DDI-PG',
        longDisplayText: 'Dual Degree Integrated Post Graduate',
        folderName: 'ddi-pg',
        associatedSchemes: [1],
    },
    {
        _id: 20,
        _order: 20,
        _display: true,
        shortDisplayText: 'Diploma',
        longDisplayText: 'Diploma',
        folderName: 'diploma',
        associatedSchemes: [],
    },
    {
        _id: 21,
        _order: 21,
        _display: true,
        shortDisplayText: 'Ph.D',
        longDisplayText: 'Doctor of Philosophy',
        folderName: 'phd',
        associatedSchemes: [],
    },
    {
        _id: 22,
        _order: 22,
        _display: true,
        shortDisplayText: 'Ph.D Entrance',
        longDisplayText: 'Doctor of Philosophy Entrance',
        folderName: 'phd-entrance',
        associatedSchemes: [],
    },
    {
        _id: 23,
        _order: 23,
        _display: true,
        shortDisplayText: 'PGCPMB',
        longDisplayText:
            'Post Graduate Certificate Programme in Medical Biotechnology',
        folderName: 'pgcpmb',
        associatedSchemes: [],
    },
    {
        _id: 24,
        _order: 24,
        _display: true,
        shortDisplayText: 'Pharm D',
        longDisplayText: 'Diploma in Pharmacy',
        folderName: 'pharm-d',
        associatedSchemes: [1],
    },
    {
        _id: 25,
        _order: 25,
        _display: true,
        shortDisplayText: 'B.Design',
        longDisplayText: 'Bachelor of Design',
        folderName: 'b-design',
        associatedSchemes: [],
    },
];

export const schemeNamesArray = [
    {
        _id: 1,
        _order: 1,
        _display: true,
        shortDisplayText: 'Grading System',
        longDisplayText: 'Grading System',
        folderName: 'grading',
    },
    {
        _id: 2,
        _order: 2,
        _display: true,
        shortDisplayText: 'Non Grading System',
        longDisplayText: 'Non Grading System',
        folderName: 'non-grading',
    },
    {
        _id: 3,
        _order: 3,
        _display: true,
        shortDisplayText: 'Lateral Entry',
        longDisplayText: 'Lateral Entry',
        folderName: 'lateral-entry',
    },
    {
        _id: 4,
        _order: 4,
        _display: true,
        shortDisplayText: 'CBCS',
        longDisplayText: 'CBCS',
        folderName: 'cbcs',
    },
    {
        _id: 5,
        _order: 5,
        _display: true,
        shortDisplayText: 'CBGS',
        longDisplayText: 'CBGS',
        folderName: 'cbgs',
    },
    {
        _id: 6,
        _order: 6,
        _display: true,
        shortDisplayText: 'As per COA',
        longDisplayText: 'As per COA',
        folderName: 'as-per-coa',
    },
];

export const yearArray = [
    {
        _id: 1,
        _order: 1,
        _display: true,
        longDisplayText: 'First Year',
        shortDisplayText: '1st year',
    },
    {
        _id: 2,
        _order: 2,
        _display: true,
        longDisplayText: 'Second Year',
        shortDisplayText: '2nd year',
    },
    {
        _id: 3,
        _order: 3,
        _display: true,
        longDisplayText: 'Third Year',
        shortDisplayText: '3rd year',
    },
    {
        _id: 4,
        _order: 4,
        _display: true,
        longDisplayText: 'Fourth Year',
        shortDisplayText: '4th year',
    },
];

export const branchArray = [
    {
        _id: 1,
        _order: 1,
        _display: true,
        longDisplayText: 'Computer Science',
        branchShortCode: 'CS',
    },
    {
        _id: 2,
        _order: 2,
        _display: true,
        longDisplayText: 'Mechanical',
        branchShortCode: 'ME',
    },
    {
        _id: 3,
        _order: 3,
        _display: true,
        longDisplayText: 'Civil',
        branchShortCode: 'CE',
    },
    {
        _id: 4,
        _order: 4,
        _display: true,
        longDisplayText: 'Information Technology',
        branchShortCode: 'IT',
    },
    {
        _id: 5,
        _order: 5,
        _display: true,
        longDisplayText: 'Electronics & Comm',
        branchShortCode: 'EC',
    },
];

export const semesterArray = [
    {
        _id: 1,
        _order: 1,
        _display: true,
        longDisplayText: '1st semester',
        branchShortCode: '1st sem',
    },
    {
        _id: 2,
        _order: 2,
        _display: true,
        longDisplayText: '2nd semester',
        branchShortCode: '2nd sem',
    },
    {
        _id: 3,
        _order: 3,
        _display: true,
        longDisplayText: '3rd semester',
        branchShortCode: '3rd sem',
    },
    {
        _id: 4,
        _order: 4,
        _display: true,
        longDisplayText: '4th semester',
        branchShortCode: '4th sem',
    },
    {
        _id: 5,
        _order: 5,
        _display: true,
        longDisplayText: '5th semester',
        branchShortCode: '5th sem',
    },
    {
        _id: 6,
        _order: 6,
        _display: true,
        longDisplayText: '6th semester',
        branchShortCode: '6th sem',
    },
    {
        _id: 7,
        _order: 7,
        _display: true,
        longDisplayText: '7th semester',
        branchShortCode: '7th sem',
    },
    {
        _id: 8,
        _order: 8,
        _display: true,
        longDisplayText: '8th semester',
        branchShortCode: '8th sem',
    },
];