import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import RequireAuth from "./components/RequireAuth/RequireAuth.jsx";

import { useAuth } from "./context/AuthContext.jsx";

function AuthRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <p style={{ textAlign: "center", padding: "3rem" }}>
                Verificando sesión...
            </p>
        );
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <ItemListContainer greeting="¡Bienvenidos a TCG Store!" />
                    }
                />

                <Route
                    path="/category/:id"
                    element={<ItemListContainer greeting="Productos" />}
                />

                <Route
                    path="/item/:id"
                    element={<ItemDetailContainer />}
                />

                <Route path="/cart" element={<Cart />} />

                <Route
                    path="/login"
                    element={
                        <AuthRoute>
                            <Login />
                        </AuthRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <AuthRoute>
                            <Register />
                        </AuthRoute>
                    }
                />

                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;