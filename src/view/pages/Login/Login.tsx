import { useState } from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle login logic here
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>

                <div className="mt-1 mb-4">
                    <button onClick={()=> navigate("/home")} className="text-sm text-blue-500 hover:text-blue-900 underline">

                    </button>
                </div>

            </form>
        </div>
    );
}
