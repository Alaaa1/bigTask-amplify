import { Authenticator } from '@aws-amplify/ui-react';
import { Storage, Auth } from 'aws-amplify';

function UploadPicture() {
    async function onChange(e) {
        const { attributes } = await Auth.currentAuthenticatedUser();
        console.log(attributes);
        const file = e.target.files[0];
        await Storage.put(attributes.sub, file, {
            level: "private",
            contentType: "image/jpg", // contentType is optional
        });
    }

    return (
        <Authenticator hideSignUp>
            <p>Please upload your profile image</p>
            <input type="file" onChange={onChange} />;
        </Authenticator>
    );
}

export default UploadPicture;