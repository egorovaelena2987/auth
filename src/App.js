import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './Login';
import Logout from './Logout';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1>Wait a few seconds...</h1>
  return (
    <div>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
