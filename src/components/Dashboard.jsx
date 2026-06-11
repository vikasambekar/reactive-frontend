import Profile from './Profile';
import {useEffect, useState} from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const [profile, setProfile] = useState(null);

    const {
        username,
        token
    } = useSelector(
        state => state.user
    );

    const fetchData = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/api/profile",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
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
            <h3> I am Dash board, user from redux: {username}</h3>
            <button onClick={fetchData}>Profile</button>
            <h2>Fetched data : {profile}</h2>
            <Profile/>
        </>
    );
}

export default Dashboard;