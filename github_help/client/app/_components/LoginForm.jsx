"use client"

import UsernameEmailInputDisplay from "./UsernameEmailInputDisplay";

import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();

    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [usernameEmailInputDisplay, setUsernameEmailInputDisplay] = useState('username')

    function handleUsernameEmailInputDisplayChange() {
        if (usernameEmailInputDisplay === 'username') {
            setUsernameEmailInputDisplay('email');
            setUsername('')
        } else if (usernameEmailInputDisplay === 'email') {
            setUsernameEmailInputDisplay('username');
            setEmail('')
        }
    }

    function handleChange(event) {
        if (event.target.id === "login-username-input") {
            setUsername(event.target.value);
        } else if (event.target.id === "login-email-input") {
            setEmail(event.target.value);
        } else if (event.target.id === "login-password-input") {
            setPassword(event.target.value);
        } else if (event.target.id === "login-phone-input") {
            setPhone(event.target.value);
        }
    }
    
    function handleReset() {
        setUsername('');
        setEmail('');
        setPassword('');
        setPhone('');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let isPerson = false;

        if (phone.length > 0) {
            isPerson = false;
        } else {
            isPerson = true;
        }

        if (isPerson) {

            const user = {
                username, 
                email, 
                password,
            }

            const res = await fetch('http://localhost:8080/login', {
                method: 'POST',
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user),
            })

            if (res.status === 201) {
                // router.refresh();
                // requests the route in the background and refetch any data we need
                router.push('/');
            } else {
                router.push('/not-found');
            }

        } else {
            router.push('/not-found');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <UsernameEmailInputDisplay 
                        username={username} 
                        email={email} 
                        inputDisplay={usernameEmailInputDisplay} 
                        handleClick={handleUsernameEmailInputDisplayChange}
                        handleChange={handleChange}
                        isInputDisabled={isInputDisabled}
                    />
                    <div>
                        <label htmlFor="login-password-input">Password</label>
                        <input type="password" id="login-password-input" value={password} onChange={handleChange} disabled={isInputDisabled}/>
                    </div>
                </div>
                <div>
                    <button>OK</button>
                    <button onClick={handleReset}>Reset Fields</button>
                </div>
                <div className="not-required" aria-hidden>
                    <label htmlFor="login-phone-input">Phone</label>
                    <input autoComplete="off" type="tel" id="login-phone-input" value={phone} onChange={handleChange} />
                </div>
            </form>

            
        </div>
    )
}