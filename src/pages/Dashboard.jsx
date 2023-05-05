// RDR
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// components
import Intro from "../components/Intro";

// libraries
import { toast } from "react-toastify";

// loader
export function dashboardLoader() {
    console.log("dashboardLoader()");
    const userName = fetchData("userName");
    return { userName };
}

// action
// form submits to this page, this function, so form data is accessible via request param
export async function dashboardAction({ request }) {
    console.log("dashboardAction()");
    const data = await request.formData();
    // const userName = data.get("userName");
    const formData = Object.fromEntries(data);
    try {
        // throw new Error();
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        return toast.success(`Welcome ${formData.userName}!`);
    } catch (e) {
        throw new Error("There was a problem creating your account!");
    }
}

const Dashboard = () => {
    const { userName } = useLoaderData();

    return (
        <div>
            <h4> {userName ? (<p>userName</p>) : <Intro/>} </h4>
        </div>
    )
}

export default Dashboard;