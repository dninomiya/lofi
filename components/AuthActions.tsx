import { useAuth } from '../providers/AuthProvider';
import { login, logout } from '../services/AuthService';

const AuthActions = () => {
  const user = useAuth();

  if (user === undefined) {
    return <p>loading</p>;
  }

  if (user) {
    return <button onClick={logout}>🚪</button>;
  }

  if (user === null) {
    return <button onClick={login}>Join Room</button>;
  }

  return null;
};

export default AuthActions;
