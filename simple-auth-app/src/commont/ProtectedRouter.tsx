import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRouter = () => {
    const {isLoggedIn} = useAuth();

    if(!isLoggedIn){
        return <Navigate to = {'/login'} replace/>
    }

    return <Outlet />;
};

export default ProtectedRouter;