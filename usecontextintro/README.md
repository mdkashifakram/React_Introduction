Scenario I:
---------------------------------------------------------------

import React, { useContext, createContext } from 'react';

// Create a context
const ThemeContext = createContext();

function App() {
  const theme = 'dark'; // The value to be shared

  return (
    <ThemeContext.Provider value={theme}>
      <Component1 />
    </ThemeContext.Provider>
  );
}

function Component1() {
  return (
    <div>
      <Component2 />
    </div>
  );
}

function Component2() {
  // Use the context value
  const theme = useContext(ThemeContext);

  return (
    <div>
      The current theme is {theme}.
    </div>
  );
}

export default App;








Scenario II:
-------------------------------------------------------------------
const UserContext = createContext();

function App() {
  const user = { name: 'Alice', loggedIn: true };  // User data
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return <UserProfile />;
}

function UserProfile() {
  const user = useContext(UserContext);  // Access user data
  return <div>User is {user.loggedIn ? 'logged in' : 'logged out'}</div>;
}
