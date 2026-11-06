import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./Auth.module.css";

function getAuthErrorMessage(code) {
    const messages = {
        "auth/invalid-credential":
            "El email o la contraseña son incorrectos.",
        "auth/invalid-email":
            "Ingresá un email válido.",
        "auth/user-disabled":
            "Esta cuenta se encuentra deshabilitada.",
        "auth/user-not-found":
            "No encontramos una cuenta con esos datos.",
        "auth/wrong-password":
            "El email o la contraseña son incorrectos.",
        "auth/too-many-requests":
            "Hubo demasiados intentos. Esperá un momento y volvé a intentar.",
        "auth/network-request-failed":
            "No se pudo conectar. Revisá tu conexión a internet.",
    };

    return messages[code] ||
        "No se pudo iniciar sesión. Intentá nuevamente.";
}

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setSubmitting(true);

        try {
            await login(email, password);

            const destination =
                location.state?.from || "/";

            navigate(destination, { replace: true });
        } catch (err) {
            setError(getAuthErrorMessage(err.code));
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section className={styles.container}>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <h1>Iniciar sesión</h1>
                <p className={styles.subtitle}>
                    Ingresá a tu cuenta de TCG Store.
                </p>

                {error && (
                    <p className={styles.error} role="alert">
                        {error}
                    </p>
                )}

                <label htmlFor="login-email">
                    Email
                </label>
                <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    disabled={submitting}
                />

                <label htmlFor="login-password">
                    Contraseña
                </label>
                <input
                    id="login-password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    disabled={submitting}
                />

                <button
                    type="submit"
                    disabled={submitting}
                    className={styles.submit}
                >
                    {submitting ? "Ingresando..." : "Iniciar sesión"}
                </button>

                <p className={styles.footerText}>
                    ¿Todavía no tenés cuenta?{" "}
                    <Link to="/register">Registrate</Link>
                </p>
            </form>
        </section>
    );
}

export default Login;