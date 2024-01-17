import { Navigate, Route } from "react-router-dom";


const useAuth = () => {
  const user = { loggedIn: false };
  if (localStorage.getItem('token')) {
    user.loggedIn = true;
  }
  return user.loggedIn;
};

function PrivateRoute({ element,  isAuthenticated, ...rest }) {
  const isAuth = useAuth();
  if (isAuth) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}


export default PrivateRoute
