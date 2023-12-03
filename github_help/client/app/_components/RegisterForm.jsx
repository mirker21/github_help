"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterForm() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (event) => {
        if (event.target.id === "register-name-input") {
            setName(event.target.value);
        } else if (event.target.id === "register-username-input") {
            setUsername(event.target.value);
        } else if (event.target.id === "register-email-input") {
            setEmail(event.target.value);
        } else if (event.target.id === "register-password-input") {
            setPassword(event.target.value);
        } else if (event.target.id === "register-confirm-password-input") {
            setConfirmPassword(event.target.value);
        } else if (event.target.id === "register-phone-input") {
            setPhone(event.target.value);
        }
    }
    
    function handleReset() {
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhone('')
    }

    let isPasswordConfirmed = true;
        
    let isPerson = false;

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (password === confirmPassword) {
            isPasswordConfirmed = true;
        } else {
            isPasswordConfirmed = false;
        }

        if (phone.length > 0) {
            isPerson = false;
        } else {
            isPerson = true;
        }

        if (isPasswordConfirmed && isPerson) {
        
            const newUser = {

                    name,
                    username,
                    email,
                    password,
                    confirm_password: confirmPassword,

            }

            const newUserRes = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser)
            })

            console.log(newUserRes)

            if (newUserRes.status === 201) {
                // router.refresh();
                // requests the route in the background and refetches any data we need
                router.push('/account/login');
            } else {
                router.push('/not-found');
            }
        } else {
            router.push('/not-found');
        }

    }

    // useEffect(() => {
    //     // useEffect allows us to do async functions.
    //     // On the initial render, we need to check 
    //     // to see if the user has logged in. If so, then the
    //     // user should get redirected to "/".
    //     // If not, the user should only be allowed to
    //     // navigate around /account

    //     const checkLogin = async () => {
    //     const isLoggedIn = await checkLoginStatus()
    //         if (isLoggedIn === false) {
    //             console.log('still here!')
    //         } else {
    //             setIsInputDisabled(true);
    //             router.push('/')
    //         }
    //     }
    //     checkLogin()
    // }, [])

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="register-name-input">Name</label>
                    <input required type="text" id="register-name-input" value={name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="register-username-input">Username</label>
                    <input required type="text" id="register-username-input" value={username} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="register-email-input">Email</label>
                    <input required type="email" id="register-email-input" value={email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="register-password-input">Password</label>
                    <input required type="password" id="register-password-input" value={password} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="register-confirm-password-input">Confirm Password</label>
                    <input required type="password" id="register-confirm-password-input" value={confirmPassword} onChange={handleChange} />
                </div>
                
                

                {!isPasswordConfirmed && <p>Please ensure that your password is typed correctly.</p>}
            </div>

            <div>
                <button type="submit">OK</button>
                <button type="button" onClick={handleReset}>Reset Fields</button>
            </div>

            <div className="not-required" aria-hidden>
                <label htmlFor="register-phone-input">Phone</label>
                <input autoComplete="off" type="tel" id="register-phone-input" value={phone} onChange={handleChange} />
            </div>
        </form>
    )
}