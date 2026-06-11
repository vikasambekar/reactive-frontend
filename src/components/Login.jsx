import { useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:8080/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const token = await response.text();

            localStorage.setItem("token", token);

            setMessage("Login Successful");

            console.log("JWT Token:", token);

        } catch (error) {
            console.error(error);
            setMessage("Login Failed");
        }
    };

    return (
        <>
            <h3>Login</h3>

            <form onSubmit={handleLogin}>

                <div>
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                </div>

                <br />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>{message}</p>
        </>
    );
}

export default Login;