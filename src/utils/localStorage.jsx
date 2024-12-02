const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Homepage",
                taskDescription: "Create a responsive design for the homepage.",
                taskDate: "2024-11-20",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Fix Login Issue",
                taskDescription: "Debug and fix the login authentication problem.",
                taskDate: "2024-11-10",
                category: "Bug Fix"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Develop Dashboard",
                taskDescription: "Create the main dashboard layout with charts.",
                taskDate: "2024-11-15",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update API Documentation",
                taskDescription: "Add recent updates to the API docs.",
                taskDate: "2024-11-12",
                category: "Documentation"
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "1234",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Create Onboarding Guide",
                taskDescription: "Write an onboarding guide for new employees.",
                taskDate: "2024-11-05",
                category: "HR"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Plan Marketing Campaign",
                taskDescription: "Brainstorm and document ideas for the next campaign.",
                taskDate: "2024-11-22",
                category: "Marketing"
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Optimize Database Queries",
                taskDescription: "Improve the performance of database queries.",
                taskDate: "2024-11-18",
                category: "Database"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Deploy Application",
                taskDescription: "Deploy the latest version of the web app.",
                taskDate: "2024-11-14",
                category: "DevOps"
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "1234",
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Conduct User Testing",
                taskDescription: "Organize and conduct usability tests with users.",
                taskDate: "2024-11-25",
                category: "User Experience"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Update Product Catalog",
                taskDescription: "Add new products to the e-commerce website.",
                taskDate: "2024-11-19",
                category: "Content"
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

    console.log(employees, admin)
}

