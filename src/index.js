import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Amplify, API } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:390077f2-33e6-4d20-9678-482a7ce32e11',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_IaABKtRyM',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '3ltjg3kk5h2f5qvtf7i9pkp2bc',

  },
  oauth: {
    domain: 'https://calouserlogin.auth.us-east-1.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'profile',
      'openid',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'token', // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
  Storage: {
    AWSS3: {
      bucket: 'api-service-pics-bucket', //REQUIRED -  Amazon S3 bucket name
      region: 'us-east-1', //OPTIONAL -  Amazon service region
    }
  },
  API: {
    endpoints: [
      {
        name: "api-service-dev",
        endpoint: "https://g0dxj0d39h.execute-api.us-east-1.amazonaws.com/dev"
      }
    ]
  }
});

API.configure();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
