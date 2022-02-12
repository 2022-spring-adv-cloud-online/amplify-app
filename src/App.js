import React from 'react';
import { 
  Authenticator
  , Button 
} from '@aws-amplify/ui-react';

const App = () => {
  return (
    <Authenticator 
      variation='modal'
    >
      {({signOut, user}) => (
        <>
          <h1>
            Hello {user.username}
          </h1>
          <Button
            onClick={signOut}
          >
            Sign Out
          </Button>
        </>
      )}
    </Authenticator>
  );
};

export default App;