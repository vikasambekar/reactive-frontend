import {useState} from "react";
import {useDispatch} from "react-redux";
import {login, loginUser} from "@/src/redux/userSlice";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const handleLogin = async (e) => {

        e.preventDefault();

        dispatch(
            loginUser({
                username,
                password
            })
        );

        setMessage("Login Successful");
    };

    return (
        <>
            <h3>Login</h3>

            <form onSubmit={handleLogin}>

                <div>
                    <label>Username</label>
                    <br/>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />
                </div>

                <br/>

                <div>
                    <label>Password</label>
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                </div>

                <br/>

                <button type="submit">
                    Login
                </button>

            </form>

            <p>{message}</p>
        </>
    );
}

export default Login;