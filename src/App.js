import React from 'react';
// import { 
//   withAuthenticator
// } from '@aws-amplify/ui-react';


import { AmplifyProvider, Authenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
    
  return (
    <AmplifyProvider>
      <Authenticator variation='modal'>
        {
          ({ signOut, user }) => (
            <>
              <h1>
                Hello {user?.username}, from AWS Amplify
              </h1>
              <Button
                onClick={signOut}
              >
                Sign Out
              </Button>
            </>
          )
        }
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;
