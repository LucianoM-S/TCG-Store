import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./Auth.module.css";

function getAuthErrorMessage(code) {
    const messages = {
        "auth/email-already-in-use":
            "Ya existe una cuenta registrada con ese email.",
        "auth/invalid-email":
            "El email ingresado no es válido.",
        "auth/weak-password":
            "La contraseña es demasiado débil. Usá al menos 6 caracteres.",
        "auth/operation-not-allowed":
            "El registro con email y contraseña no está habilitado.",
        "auth/network-request-failed":
            "No se pudo conectar. Revisá tu conexión a internet.",
        "auth/too-many-requests":
            "Hubo demasiados intentos. Esperá un momento y volvé a intentar.",
    };

    return messages[code] ||
        "No se pudo crear la cuenta. Revisá los datos e intentá nuevamente.";
}

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        setSubmitting(true);

        try {
            await register(email, password, name);
            navigate("/", { replace: true });
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
                <h1>Crear cuenta</h1>
                <p className={styles.subtitle}>
                    Unite a la comunidad de TCG Store.
                </p>

                {error && (
                    <p className={styles.error} role="alert">
                        {error}
                    </p>
                )}

                <label htmlFor="register-name">
                    Nombre y apellido
                </label>
                <input
                    id="register-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    maxLength={100}
                    disabled={submitting}
                />

                <label htmlFor="register-email">
                    Email
                </label>
                <input
                    id="register-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    disabled={submitting}
                />

                <label htmlFor="register-password">
                    Contraseña
                </label>
                <input
                    id="register-password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    minLength={6}
                    required
                    disabled={submitting}
                />

                <label htmlFor="confirm-password">
                    Confirmar contraseña
                </label>
                <input
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) =>
                        setConfirmPassword(event.target.value)
                    }
                    minLength={6}
                    required
                    disabled={submitting}
                />

                <button
                    type="submit"
                    disabled={submitting}
                    className={styles.submit}
                >
                    {submitting ? "Creando cuenta..." : "Registrarme"}
                </button>

                <p className={styles.footerText}>
                    ¿Ya tenés cuenta?{" "}
                    <Link to="/login">Iniciá sesión</Link>
                </p>
            </form>
        </section>
    );
}

export default Register;