import { useAuth } from '../providers/AuthProvider';
import { login, logout } from '../services/AuthService';

const AuthActions = () => {
  const user = useAuth();

  if (user === undefined) {
    return <p>loading</p>;
  }

  if (user) {
    return (
      <button className="font-dot" onClick={logout}>
        🚪
      </button>
    );
  }

  if (user === null) {
    return (
      <button className="font-dot" onClick={login}>
        Join Room
      </button>
    );
  }

  return null;
};

export default AuthActions;
