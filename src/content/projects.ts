export const projects = [
    {
        id: 1,
        name: 'Personally Identifiable Information (PII) Data Detector',
        date: 'February 2024 - May 2024',
        description: 'The Personally Identifiable Information (PII) Data Detector is an individual machine learning project developed as part of the CSC532 Machine Learning course. The goal of this project is to detect personally identifiable information (PII) in student writing using machine learning techniques. Additionally, a web application was developed with machine learning integration to allow users to write text, and the system will identify PII automatically.',
        tools: 'Next.js, Go, Flask, TypeScript, Python, PostgreSQL, Docker, Firebase, Google Cloud Run, GitHub Actions',
        jumpIdDesktop: "pii-desktop",
        jumpIdMobile: "pii-mobile",
        img: [
            {
                url: '/images/pii_1.png',
                alt: 'pii-1'
            },
            {
                url: '/images/pii_2.png',
                alt: 'pii-2'
            }
        ],
        imgPattern: [
            1, 1
        ],
        link: [
            {
                url: 'https://github.com/jedipw/PIIDataDetector',
                buttonName: 'View Repository'
            },
            {
                url: 'https://www.kaggle.com/competitions/pii-detection-removal-from-educational-data',
                buttonName: 'View Competition'
            }
        ]
    },
    {
        id: 2,
        name: 'Jedipw: My personal web portfolio',
        date: 'January 2024',
        description: 'Jedipw is my first personal web portfolio designed to showcase my skills, projects, awards, and provide my contact information. This project allows me to brush up on React.js, as well as learn how to deploy the website on Google Cloud Platform.',
        tools: 'React.js, TypeScript, Bootstrap',
        jumpIdDesktop: "jedipw-desktop",
        jumpIdMobile: "jedipw-mobile",
        img: [
            {
                url: '/images/jedipw_1.jpg',
                alt: "jedipw-1"
            },
            {
                url: '/images/jedipw_2.jpg',
                alt: "jedipw-2"
            },
        ],
        imgPattern: [
            2
        ],
        link: [
            {
                url: 'https://github.com/jedipw/jedipw-portfolio',
                buttonName: 'View Repository'
            }
        ]

    },
    {
        id: 3,
        name: 'BakingUp: Smart Bakery Management for Home Bakery Business',
        date: 'January 2024 - Present',
        description: 'BakingUp is a mobile application developed as part of the CSC498-CSC499 Computer Science developed as part of the CSC498-CSC499 Computer Science Capstone Project. This project is a group project completed by 3 students. The goal of this project is to help facilitate home bakery entrepreneurs and begineer bakers in accurately calculating production costs, setting optimal pricing for products, tracking inventory efficiently with the help of OCR technology, and minimizing waste',
        tools: 'Flutter, Go, PostgreSQL, GitHub Actions, Gemini API',
        jumpIdDesktop: "bakingup-desktop",
        jumpIdMobile: "bakingup-mobile",
        img: [
            {
                url: '/images/bakingup_1.png',
                alt: "bakingup-1"
            },
            {
                url: '/images/bakingup_2.png',
                alt: "bakingup-2"
            },
            {
                url: '/images/bakingup_3.png',
                alt: "bakingup-3"
            },
            {
                url: '/images/bakingup_4.png',
                alt: "bakingup-4"
            },
            {
                url: '/images/bakingup_5.png',
                alt: "bakingup-5"
            },
            {
                url: '/images/bakingup_6.png',
                alt: "bakingup-6"
            },
            {
                url: '/images/bakingup_7.png',
                alt: "bakingup-7"
            },
            {
                url: '/images/bakingup_8.png',
                alt: "bakingup-8"
            },
            {
                url: '/images/bakingup_9.png',
                alt: "bakingup-9"
            },
        ],
        imgPattern: [
            3, 3, 3
        ],
        link: [
            {
                url: 'https://github.com/BakingUp/BakingUp-Frontend',
                buttonName: 'View Repository (Frontend)'
            },
            {
                url: 'https://github.com/BakingUp/BakingUp-Backend',
                buttonName: 'View Repository (Backend)'
            }
        ]
    },
    {
        id: 4,
        name: 'PayStation: AI Mobile App for Stationery Items Detection and Payment at KMUTT Bookstore',
        date: 'August 2023 - January 2024',
        description: 'PayStation is a mobile application project developed as part of CSC340 Artificial Intelligence coursework. This project is a group project completed by 5 students. It is an AI mobile application that enables KMUTT Bookstore customers to take pictures of 20 different types of stationery items. The system will automatically generate the payment bills, allowing customers to pay for those items conveniently! Through my involvement in this project, I gained practical knowledge of the machine learning process. This encompasses tasks such as data collection, data preprocessing/augmentation, model training, utilizing MongoDB as the database, and integrating the machine learning model with both the frontend and backend systems.',
        tools: 'Flutter, Express.js, TypeScript, MongoDB, YoloV8',
        jumpIdDesktop: "paystation-desktop",
        jumpIdMobile: "paystation-mobile",
        img: [
            {
                url: '/images/paystation_1.png',
                alt: 'paystation-1'
            },
            {
                url: '/images/paystation_2.png',
                alt: 'paystation-2'
            },
            {
                url: '/images/paystation_3.png',
                alt: 'paystation-3'
            },
            {
                url: '/images/paystation_4.png',
                alt: 'paystation-4'
            },
            {
                url: '/images/paystation_5.png',
                alt: 'paystation-5'
            },
        ],
        imgPattern: [
            3, 1, 1
        ],
        link: [
            {
                url: 'https://github.com/jedipw/paystation_frontend',
                buttonName: 'View Repository (Frontend)'
            },
            {
                url: 'https://github.com/jedipw/paystation_backend',
                buttonName: 'View Repository (Backend)'
            }
        ]
    },
    {
        id: 5,
        name: 'Store Sales - Time Series Forecasting: Use machine learning to predict grocery sales',
        date: 'August 2023 - December 2023',
        description: 'Store Sales - Time Series Forecasting is a Kaggle competition that I took with a team of 5 members as part of CSC345 Data Science coursework. The goal is to build a machine learning model that can accurately predicts the unit sales for thousands of items sold at different Favorita stores. This project allows me to gain basic skills in data visualization with PowerBI, as well as to perform data preprocessing and data modeling with various models, such as LightGBM, CatBoostRegressor, XGBRegressor, K-NearestRegressor, etc.',
        tools: 'Python, NumPy, Pandas, Scikit-learn',
        jumpIdDesktop: "store-sales-desktop",
        jumpIdMobile: "store-sales-mobile",
        img: [
            {
                url: '/images/store_sale_1.jpg',
                alt: 'store_sales-1'
            }
        ],
        imgPattern: [
            1
        ],
        link: [
            {
                url: 'https://www.kaggle.com/c/store-sales-time-series-forecasting',
                buttonName: 'View Competition'
            }
        ]
    },
    {
        id: 6,
        name: 'HealJai: Mobile App for Anonymous Consultation with Psychiatrists',
        date: 'April 2023 - June 2023',
        description: 'HealJai is a partially functional mobile application project developed as part of CSC291 Computer Science Integrated Project II. This project is a group project completed by six students. The application will allow users to consult with psychiatrists anonymously using the real-time group chat system. One user can consult with multiple psychiatrists simultaneously. This project has enabled me to gain basic knowledge of Socket.io, learn how to connect the back-end system with Flutter, acquire skills in UX/UI design using Figma, and learn how to deploy the backend on an Azure virtual machine.',
        tools: 'Flutter, Express.js, JavaScript, Firebase, Socket.io',
        jumpIdDesktop: "healjai-desktop",
        jumpIdMobile: "healjai-mobile",
        img: [
            {
                url: '/images/healjai_1.png',
                alt: 'healjai-1'
            },
            {
                url: '/images/healjai_2.png',
                alt: 'healjai-2'
            },
            {
                url: '/images/healjai_3.png',
                alt: 'healjai-3'
            },
        ],
        imgPattern: [
            3
        ],
        link: [
            {
                url: 'https://github.com/jedipw/HealJai',
                buttonName: 'View Repository (Frontend)'
            },
            {
                url: 'https://github.com/jedipw/backend-healjai',
                buttonName: 'View Repository (Backend)'
            }
        ]
    },
    {
        id: 7,
        name: 'ModSport: Mobile App for Workout Facility Reservation at KMUTT',
        date: 'March 2023 - June 2023',
        description: 'ModSport is a mobile application project developed as part of CSC231 Agile Software Engineering and CSC234 User-Centered Mobile Application Development coursework. This project is a group project completed by 6 students. The primary objective of ModSport is to provide users with a seamless and user-friendly platform for reserving sports facilities in KMUTT Bangmod Campus. Users can browse through the available facilities, check their availability, and secure their reservations with just a few taps on their mobile devices. ModSport also empowers the sports facility staff members. They have the ability to disable reservations for specific sport facilities when they are temporarily unavailable to the public. This project allowed me to gain more front-end development skills using Flutter, work with Cloud Firestore and Firebase Cloud Messaging, collaborate in an Agile environment, and enhance my project management abilities.',
        tools: 'Flutter, Firebase',
        jumpIdDesktop: "modsport-desktop",
        jumpIdMobile: "modsport-mobile",
        img: [
            {
                url: '/images/modsport_1.png',
                alt: 'modsport-1'
            },
            {
                url: '/images/modsport_2.png',
                alt: 'modsport-2'
            },
            {
                url: '/images/modsport_3.png',
                alt: 'modsport-3'
            },
            {
                url: '/images/modsport_4.png',
                alt: 'modsport-4'
            },
            {
                url: '/images/modsport_5.png',
                alt: 'modsport-5'
            },
            {
                url: '/images/modsport_6.png',
                alt: 'modsport-6'
            },
            {
                url: '/images/modsport_7.png',
                alt: 'modsport-7'
            },
            {
                url: '/images/modsport_8.png',
                alt: 'modsport-8'
            },
        ],
        imgPattern: [
            4, 4
        ],
        link: [
            {
                url: 'https://github.com/jedipw/ModSport',
                buttonName: 'View Repository'
            }
        ]
    },
    {
        id: 8,
        name: 'Modlifes: A social web application for KMUTT students',
        date: 'August 2022 - December 2022',
        description: 'Modlife is a web application project developed as part of CSC290 Computer Science Integrated Project I. This project is a group project completed by every CS22 student, with each group divided into subgroups of three people. Each group is responsible for creating one module, which contains several features on the web page. The web application contains many features that can enhance students\' life at KMUTT, such as writing personal blogs, making announcements, shopping, writing short notes, etc.I was responsible as a team leader of Dating Module which is a module that allows students to find new friends based on their age, gender, faculty preferences, or activities they want to join, inspired by Tinder. This project provided me with the opportunity to acquire skills in both front-end and back-end development, as well as expertise in database schema design, wireframe design, and API documentation design.',
        tools: 'React.js, TypeScript, Express.js, PostgreSQL',
        jumpIdDesktop: "modlifes-desktop",
        jumpIdMobile: "modlifes-mobile",
        img: [
            {
                url: '/images/modlifes_1.jpg',
                alt: 'modlifes-1'
            },
            {
                url: '/images/modlifes_2.png',
                alt: 'modlifes-2'
            },
            {
                url: '/images/modlifes_3.jpg',
                alt: 'modlifes-3'
            },
            {
                url: '/images/modlifes_4.jpg',
                alt: 'modlifes-4'
            },
            {
                url: '/images/modlifes_5.png',
                alt: 'modlifes-5'
            },
            {
                url: '/images/modlifes_6.png',
                alt: 'modsport-6'
            },
        ],
        imgPattern: [
            2, 2, 2
        ],
        link: [
            {
                url: 'https://github.com/CSSIT22/studentlife',
                buttonName: 'View Repository'
            }
        ]
    }
];