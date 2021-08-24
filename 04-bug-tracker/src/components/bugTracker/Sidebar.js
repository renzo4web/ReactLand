import React from "react";
import BugSidebar from "./BugSidebar";
import SubmitBug from "./SubmitBug";

const Sidebar = () => {
    const username = "renzo4web";

    const mockData = [
        {
            bug: "MArketing video review",
            reporter: "SCoot",
            createdAt: "14/01/2001",
            status: "in-progress",
            assignee: "Steve",
            severity: "low",
        },
        {
            bug: "Replace Primer",
            reporter: "Dadel",
            createdAt: "20/01/2001",
            assignee: "Dowetre",
            status: "to-do",
            severity: "Major",
        },
        {
            bug: "Streamline support tickets",
            reporter: "Monica",
            createdAt: "20/01/2005",
            status: "open",
            assignee: "Carlos",
            severity: "Medium",
        },
        {
            bug: "Like option not workin",
            reporter: "Alonso",
            createdAt: "20/01/2005",
            status: "open",
            assignee: "Hamilton",
            severity: "none",
        },
        {
            bug: "Email campaing",
            reporter: "Max",
            createdAt: "20/01/2001",
            assignee: "Pierre",
            status: "to-be-tested",
            severity: "Medium",
        },
        {
            bug: "This App",
            reporter: "Renzo",
            createdAt: "20/01/2001",
            assignee: "Pierre",
            status: "completed",
            severity: "none",
        },
    ];

    return (
        <aside className="sidebar__container">
            <img style={{display:'block'}} src={`https://github.com/${username}.png?size=50`} alt=""/>

            <SubmitBug/>

            <h3>Bugs Assigneed:</h3>
            <ul>
                {/* TODO : FILTER ONLY BUGS ASSIGNED TO CURRENT USER */}

                {mockData.map((bug) => (
                    <li key={bug.bug}>
                        <BugSidebar {...bug} />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
