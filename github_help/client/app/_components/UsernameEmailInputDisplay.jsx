export default function UsernameEmailInputDisplay({username, email, inputDisplay, handleClick, handleChange, isInputDisabled}) {
    const usernameInputDisplay = 
    (
        <div>
            <label htmlFor="login-username-input">
                <span className="underlined">Username</span>
                /<span onClick={handleClick}>Email</span>
            </label>
            <input required type="text" id="login-username-input" value={username} onChange={handleChange} disabled={isInputDisabled}/>
        </div>
    )

    const emailInputDisplay = 
    (
        <div>
            <label htmlFor="login-email-input">
                <span onClick={handleClick}>Username</span>
                /<span className="underlined">Email</span>   
            </label>
            <input required type="email" id="login-email-input" value={email} onChange={handleChange} disabled={isInputDisabled}/>
        </div>
    )

    if (inputDisplay === 'username') {
        return (
            usernameInputDisplay
        )
    } else if (inputDisplay === 'email') {
        return (
            emailInputDisplay
        )
    }
}