import {UserContext} from "@/src/components/context/UserContext";
import {useContext} from "react";


export default function UserInfo() {
    const user = useContext(UserContext);
    return (
        <>
            <h1> Welcome {user.name}</h1>
        </>
    );
}
