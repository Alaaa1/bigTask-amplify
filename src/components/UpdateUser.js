import { useState } from 'react';
import { API, Auth } from 'aws-amplify';

function UpdateUser() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function updateUser() {
        const user = await Auth.currentAuthenticatedUser();
        const token = user.signInUserSession.idToken.jwtToken;
        const username = user.username;
        const apiName = 'api-service-dev';
        const path = `/v1/users/${username}`;
        const myInit = {
            headers: {
                Authorization: token
            },
            body: {
                "name": username,
                "email": email,
                "newPassword": password
            }
        };

        const response = await API.put(apiName, path, myInit);
        console.log(response);
        return response;
    }
    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    async function handleUserCreation(e) {
        e.preventDefault();
        return await updateUser();
    }
    return (
        <div>
            <form onSubmit={handleUserCreation}>
                <label><br></br>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label><br></br><br></br>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label><br></br><br></br>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default UpdateUser;