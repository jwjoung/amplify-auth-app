import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Amplify Auth App</h1>
        <p>This is a sample authentication app using Amazon Cognito.</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
