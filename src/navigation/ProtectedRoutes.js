import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const loggedinuser = useSelector((state) => state.auth)
    console.log(loggedinuser);
    return loggedinuser.isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes