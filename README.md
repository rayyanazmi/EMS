# Employee Management System

## Overview
The **Employee Management System** is a web application designed to streamline task management and enhance collaboration between administrators and employees. Built with modern technologies like React.js and TailwindCSS, this system provides separate dashboards for administrators and employees, ensuring role-based functionality and a smooth user experience.

---

## Features

### Login Page
- **Secure Authentication**: Users must log in with valid credentials.
- **Role-Based Access**: Depending on the role (Admin or Employee), users are redirected to the appropriate dashboard.

### Admin Dashboard
- **User-Friendly Interface**: A clean and organized layout for easy navigation.
- **Task Assignment**: Admins can assign tasks to employees, track their progress, and manage deadlines efficiently.
- **Overview Section**: A summary of the team's tasks and performance metrics at a glance.

### Employee Dashboard
- **Task Tracker**: Employees can view assigned tasks with detailed descriptions and deadlines.
- **Progress Updates**: Employees can update the status of their tasks directly from the dashboard.
- **Efficient Workflow**: Streamlined communication with admins to ensure clarity and productivity.

---

## Technologies Used

### Frontend
- **React.js**: Ensures a responsive and dynamic user interface.
- **JavaScript**: Core language for implementing functionality.
- **TailwindCSS**: For designing an intuitive and visually appealing layout.

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd employee-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure

```
employee-management-system/
├── public/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Login, Admin Dashboard, and Employee Dashboard
│   ├── styles/         # TailwindCSS configurations
│   ├── utils/          # Utility functions and helpers
│   ├── App.js          # Main application entry point
│   ├── index.js        # Renders the React app
├── package.json        # Project dependencies
└── README.md           # Documentation
```

---

## Screenshots

### Login Page
![Screenshot Login 2025-01-20 164228](https://github.com/user-attachments/assets/ef401fe4-c26f-4dec-9367-3987c593b4c6)

### Admin Dashboard
![Screenshot admin_dash 2025-01-20 164203](https://github.com/user-attachments/assets/ee1316b1-d211-4520-8ff4-2987d0165feb)

### Employee Dashboard
![Screenshot Em1 2025-01-20 164250](https://github.com/user-attachments/assets/300c6c8b-16d3-4536-b9ee-4336c004da9a)

---

## Future Enhancements
- Add notifications for employees regarding task updates.
- Implement analytics for admins to view overall performance trends.
- Incorporate a messaging feature for real-time communication.
- Enhance security with OAuth2 or JWT-based authentication.

---

## Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your message here'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- React.js for a robust frontend framework.
- TailwindCSS for efficient styling.
- The Open Source community for inspiration and tools.

---

Thank you for checking out the **Employee Management System**! Feel free to reach out for any questions or suggestions.
