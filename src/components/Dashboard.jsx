import Profile from './Profile';
import {useEffect, useState} from "react";

const Dashboard = () => {

    const [profile, setProfile] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/api/profile",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP Error: ${response.status}`
                );
            }

            const data = await response.text();
            setProfile(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h3> I am Dash board</h3>
            <button onClick={fetchData}>Profile</button>
            <h2>Fetched data : {profile}</h2>
            <Profile/>
        </>
    );
}

export default Dashboard;