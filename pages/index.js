import Dashboard from "@/src/components/Dashboard";
import StatusCard from "@/src/components/StatusCard";
import {useContext} from "react";
import {UserContext} from "@/src/components/context/UserContext";
import Login from "@/src/components/Login";
import { useSelector } from "react-redux";

const Home = () => {

    const user =
        useSelector(
            state => state.user
        );

    console.log({user});

    const userContx = useContext(UserContext);
    return (
        <>
            <Login />
            <Dashboard />
            <StatusCard name={userContx.name} />
        </>
    )
}

export default Home;
