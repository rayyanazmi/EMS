// const employees = [
//     {
//         id: 1,
//         email: "employee1@example.com",
//         password: "1234",
//         tasks: [
//             {
//                 active: true,
//                 newTask: true,
//                 completed: false,
//                 failed: false,
//                 taskTitle: "Design Homepage",
//                 taskDescription: "Create a responsive design for the homepage.",
//                 taskDate: "2024-11-20",
//                 category: "Design"
//             },
//             {
//                 active: false,
//                 newTask: false,
//                 completed: true,
//                 failed: false,
//                 taskTitle: "Fix Login Issue",
//                 taskDescription: "Debug and fix the login authentication problem.",
//                 taskDate: "2024-11-10",
//                 category: "Bug Fix"
//             }
//         ]
//     },
//     {
//         id: 2,
//         email: "employee2@example.com",
//         password: "1234",
//         tasks: [
//             {
//                 active: true,
//                 newTask: false,
//                 completed: false,
//                 failed: false,
//                 taskTitle: "Develop Dashboard",
//                 taskDescription: "Create the main dashboard layout with charts.",
//                 taskDate: "2024-11-15",
//                 category: "Development"
//             },
//             {
//                 active: false,
//                 newTask: false,
//                 completed: true,
//                 failed: false,
//                 taskTitle: "Update API Documentation",
//                 taskDescription: "Add recent updates to the API docs.",
//                 taskDate: "2024-11-12",
//                 category: "Documentation"
//             }
//         ]
//     },
//     {
//         id: 3,
//         email: "employee3@example.com",
//         password: "1234",
//         tasks: [
//             {
//                 active: false,
//                 newTask: false,
//                 completed: true,
//                 failed: false,
//                 taskTitle: "Create Onboarding Guide",
//                 taskDescription: "Write an onboarding guide for new employees.",
//                 taskDate: "2024-11-05",
//                 category: "HR"
//             },
//             {
//                 active: true,
//                 newTask: true,
//                 completed: false,
//                 failed: false,
//                 taskTitle: "Plan Marketing Campaign",
//                 taskDescription: "Brainstorm and document ideas for the next campaign.",
//                 taskDate: "2024-11-22",
//                 category: "Marketing"
//             }
//         ]
//     },
//     {
//         id: 4,
//         email: "employee4@example.com",
//         password: "1234",
//         tasks: [
//             {
//                 active: true,
//                 newTask: false,
//                 completed: false,
//                 failed: false,
//                 taskTitle: "Optimize Database Queries",
//                 taskDescription: "Improve the performance of database queries.",
//                 taskDate: "2024-11-18",
//                 category: "Database"
//             },
//             {
//                 active: false,
//                 newTask: false,
//                 completed: true,
//                 failed: false,
//                 taskTitle: "Deploy Application",
//                 taskDescription: "Deploy the latest version of the web app.",
//                 taskDate: "2024-11-14",
//                 category: "DevOps"
//             }
//         ]
//     },
//     {
//         id: 5,
//         email: "employee5@example.com",
//         password: "1234",
//         tasks: [
//             {
//                 active: false,
//                 newTask: true,
//                 completed: false,
//                 failed: false,
//                 taskTitle: "Conduct User Testing",
//                 taskDescription: "Organize and conduct usability tests with users.",
//                 taskDate: "2024-11-25",
//                 category: "User Experience"
//             },
//             {
//                 active: true,
//                 newTask: false,
//                 completed: false,
//                 failed: false,
//                 taskTitle: "Update Product Catalog",
//                 taskDescription: "Add new products to the e-commerce website.",
//                 taskDate: "2024-11-19",
//                 category: "Content"
//             }
//         ]
//     }
// ];

const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    }
];

const admin = [{
        "id": 1,
        "email": "admin@example.com",
        "password": "1234"
    }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

