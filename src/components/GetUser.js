import { Authenticator } from '@aws-amplify/ui-react';
import { API, Storage, Auth } from 'aws-amplify';
import { useState } from 'react';

function GetUser() {

    const [user, setUser] = useState(null);
    const [key, setKey] = useState(null);

    async function getData() {
        const user = await Auth.currentAuthenticatedUser();
        const sub = user.attributes.sub;
        console.log("user", user);
        console.log(sub);
        const key = `private/us-east-1:e6fc63f5-9605-4c41-9b7b-182cbcef0e71/${sub}`;
        const token = user.signInUserSession.idToken.jwtToken;
        const apiName = 'api-service-dev';
        const path = '/v1/users/alaa';
        const myInit = {
            headers: {
                Authorization: token
            } // OPTIONAL
        };

        const response = await API.get(apiName, path, myInit);

        // inside your template or JSX code. Note <a download> doesn't work here because it is not same origin
        setKey(key);
        setUser(response.db[0]);
        return response;
    }


    return (
        <Authenticator hideSignUp>
            <button onClick={getData}>Fetch Data</button>
            <div>{user ? (<div>
                <p>Email: {user.sk}</p>
                <p>Username: {user.pk}</p>
                <p>Password: {user.password}</p>
                <img src={`https://api-service-pics-bucket.s3.amazonaws.com/${key}`} alt="pfp"></img>
            </div>) : ("no users")}</div>
        </Authenticator>
    );
}

export default GetUser;