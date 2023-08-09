import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from "react-router-dom"

function AuthedFuncs() {
    return (
        <Authenticator hideSignUp>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                    <button><Link to={"/uploadPicture"}>Upload your proifle picutre:</Link></button>
                    <button><Link to={"/getInfo"}>Get User Info:</Link></button>
                </main>
            )}
        </Authenticator>
    );
}

export default AuthedFuncs;