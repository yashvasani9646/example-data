import React from 'react'

const UnemployeList = () => {

    const Employees = [
        {
            id: 1,
            name: "Amit",
            department: "IT",
            salary: 60000,
            projects: [
                { title: "CRM", completed: true },
                { title: "ERP", completed: false }
            ],
            rating: 4.5
        },

        {
            id: 2,
            name: "Neha",
            department: "HR",
            salary: 40000,
            projects: [
                { title: "Hiring Portal", completed: true }
            ],
            rating: 3.8
        },

        {
            id: 3,
            name: "Rahul",
            department: "IT",
            salary: 75000,
            projects: [
                { title: "Inventory", completed: true },
                { title: "Billing", completed: true }
            ],
            rating: 4.9
        },

        {
            id: 4,
            name: "Priya",
            department: "Finance",
            salary: 50000,
            projects: [
                { title: "Audit", completed: false }
            ],
            rating: 4.2
        }

    ];

    const SalrayData = Employees.filter((data) => {
        return data.department === "IT" && data.salary >= 65000
    })

    const ProjectCountData = Employees.filter((countData) => {
        return countData.projects.find((item) => item.completed === true)
    })

    const Rating = Employees.filter((ratestar) => {
        return ratestar.rating >= 4.9
    })

    const Store = Employees.filter((main) => {
        return main.projects.find((item) => item.completed === true && main.rating >= 4
        )
    })
        .map((emp) => ({
            ...emp, bonus: emp.salary * 0.10
        }))



    return (
        <div>
            
            <h1> Task:1 "The salary of employees who are in the IT department and have a salary greater than 65,000." </h1>

            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {SalrayData.map((tabeldata) =>
                    (
                        <tr key={tabeldata.id}>
                            <td>{tabeldata.id}</td>
                            <td>{tabeldata.name}</td>
                            <td>{tabeldata.department}</td>
                            <td>{tabeldata.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h1> Task:2 "The name of the employee whose project is completed." </h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>


                    </tr>
                </thead>

                <tbody>
                    {ProjectCountData.map((tabeldata) =>
                    (
                        <tr key={tabeldata.id}>
                            <td>{tabeldata.id}</td>
                            <td>{tabeldata.name}</td>
                            <td>{tabeldata.department}</td>
                            <td>{tabeldata.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



            <h1> Task:3 "The name and rating of the first employee whose rating is greater than 4.8." </h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Rating</th>



                    </tr>
                </thead>

                <tbody>
                    {Rating.map((tabeldata) =>
                    (
                        <tr key={tabeldata.id}>
                            <td>{tabeldata.id}</td>
                            <td>{tabeldata.name}</td>
                            <td>{tabeldata.department}</td>
                            <td>{tabeldata.salary}</td>
                            <td>{tabeldata.rating}</td>

                        </tr>
                    ))}
                </tbody>
            </table>



            <h1> Task:4 "List the employees who have at least one project submitted (true) and whose rating is above 4." </h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Rating</th>



                    </tr>
                </thead>

                <tbody>
                    {Store.map((tabeldata) =>
                    (
                        <tr key={tabeldata.id}>
                            <td>{tabeldata.id}</td>
                            <td>{tabeldata.name}</td>
                            <td>{tabeldata.department}</td>
                            <td>{tabeldata.salary}</td>
                            <td>{tabeldata.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1> Task:5 "Show the name, department, and bonus of employees who have completed at least one project." </h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Bonus (10%)</th>

                    </tr>
                </thead>

                <tbody>
                    {Store.map((tabeldata) =>
                    (
                        <tr key={tabeldata.id}>
                            <td>{tabeldata.name}</td>
                            <td>{tabeldata.department}</td>
                            <td>{tabeldata.bonus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}

export default UnemployeList