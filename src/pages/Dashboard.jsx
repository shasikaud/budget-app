// RDR
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName };
}

const Dashboard = () => {
    const { userName } = useLoaderData();

    return (
        <div>
            Dashboard
            <h4> Welcome {userName} </h4>
        </div>
    )
}

export default Dashboard;