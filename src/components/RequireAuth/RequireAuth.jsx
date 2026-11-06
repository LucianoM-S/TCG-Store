import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function RequireAuth({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div style={{ padding: "3rem", textAlign: "center" }}>
                Verificando sesión...
            </div>
        );
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                state={{ from: `${location.pathname}${location.search}` }}
                replace
            />
        );
    }

    return children;
}

export default RequireAuth;