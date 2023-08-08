import { useState } from 'react';
import { API } from 'aws-amplify';

function UnauthedFuncs() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // async function getData() {
    // const apiName = 'api-service-dev';
    // const path = '/v1/users';
    // const myInit = {
    //     headers: {} // OPTIONAL
    // };

    // const response = await API.get(apiName, path, myInit);
    // setUsers(response.db[0]);
    // return response;
    // }
    async function createUser() {
        const apiName = 'api-service-dev';
        const path = '/v1/users';
        const myInit = {
            headers: {},
            body: {
                "name": username,
                "email": email,
                "password": password
            }
        };

        const response = await API.post(apiName, path, myInit);
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
        return await createUser();
    }
    return (
        <div>
            {/* <button onClick={getData}>Fetch Data</button>
            <p>{users ? (users.sk) : ("no users")}</p> */}
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

export default UnauthedFuncs;