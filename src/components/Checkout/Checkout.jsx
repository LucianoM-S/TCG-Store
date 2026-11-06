import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { createOrder } from "../../services/orders.js";

import styles from "./index.module.css";

function Checkout() {
    const { user } = useAuth();
    const { cart, clear, totalPrice } = useCart();

    const [buyer, setBuyer] = useState({
        name: user?.displayName || "",
        phone: "",
        address: "",
        city: "",
        notes: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (cart.length === 0 && !orderId) {
        return <Navigate to="/cart" replace />;
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setBuyer((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (submitting || orderId) return;

        setError("");

        if (!user?.uid) {
            setError("Tu sesión no está activa. Iniciá sesión nuevamente.");
            return;
        }

        if (cart.length === 0) {
            setError("Tu carrito está vacío.");
            return;
        }

        const requiredFields = [
            ["name", "nombre y apellido"],
            ["phone", "teléfono"],
            ["address", "dirección"],
            ["city", "ciudad"],
        ];

        for (const [field, label] of requiredFields) {
            if (!buyer[field].trim()) {
                setError(`Completá el campo ${label}.`);
                return;
            }
        }

        setSubmitting(true);

        try {
            const generatedOrderId = await createOrder({
                user,
                buyer,
                cart,
            });

            setOrderId(generatedOrderId);
            clear();
        } catch (err) {
            console.error("Error al crear la orden:", err);

            setError(
                err.code === "permission-denied"
                    ? "Firebase no autorizó guardar la orden. Verificá las reglas de Firestore."
                    : "No se pudo registrar la compra. Tu carrito sigue intacto; intentá nuevamente."
            );
        } finally {
            setSubmitting(false);
        }
    }

    if (orderId) {
        return (
            <section className={styles.container}>
                <div className={styles.confirmation}>
                    <h1>¡Compra registrada!</h1>

                    <p>
                        Gracias por comprar en TCG Store.
                        Guardá el siguiente identificador como comprobante.
                    </p>

                    <div className={styles.orderId}>
                        <span>ID de tu orden</span>
                        <strong>{orderId}</strong>
                    </div>

                    <button
                        type="button"
                        className={styles.copyButton}
                        onClick={() => {
                            if (navigator.clipboard?.writeText) {
                                navigator.clipboard.writeText(orderId);
                            }
                        }}
                    >
                        Copiar ID
                    </button>

                    <Link to="/" className={styles.primaryButton}>
                        Volver al catálogo
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.container}>
            <h1>Finalizar compra</h1>

            <div className={styles.layout}>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <h2>Datos de entrega</h2>

                    <p className={styles.userInfo}>
                        Comprador: {user.email}
                    </p>

                    {error && (
                        <p className={styles.error} role="alert">
                            {error}
                        </p>
                    )}

                    <label htmlFor="buyer-name">
                        Nombre y apellido *
                    </label>
                    <input
                        id="buyer-name"
                        name="name"
                        autoComplete="name"
                        value={buyer.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        disabled={submitting}
                    />

                    <label htmlFor="buyer-phone">
                        Teléfono *
                    </label>
                    <input
                        id="buyer-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={buyer.phone}
                        onChange={handleChange}
                        required
                        maxLength={30}
                        disabled={submitting}
                    />

                    <label htmlFor="buyer-address">
                        Dirección *
                    </label>
                    <input
                        id="buyer-address"
                        name="address"
                        autoComplete="street-address"
                        value={buyer.address}
                        onChange={handleChange}
                        required
                        maxLength={200}
                        disabled={submitting}
                    />

                    <label htmlFor="buyer-city">
                        Ciudad *
                    </label>
                    <input
                        id="buyer-city"
                        name="city"
                        autoComplete="address-level2"
                        value={buyer.city}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        disabled={submitting}
                    />

                    <label htmlFor="buyer-notes">
                        Información adicional
                    </label>
                    <textarea
                        id="buyer-notes"
                        name="notes"
                        value={buyer.notes}
                        onChange={handleChange}
                        maxLength={500}
                        rows={3}
                        disabled={submitting}
                        placeholder="Piso, departamento o referencias para la entrega"
                    />

                    <button
                        type="submit"
                        className={styles.primaryButton}
                        disabled={submitting || cart.length === 0}
                    >
                        {submitting
                            ? "Registrando compra..."
                            : "Confirmar compra"}
                    </button>

                    {submitting && (
                        <p role="status">
                            Guardando tu orden en Firebase...
                        </p>
                    )}
                </form>

                <aside className={styles.summary}>
                    <h2>Resumen de compra</h2>

                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className={styles.summaryItem}
                        >
                            <span>
                                {product.title} × {product.quantity}
                            </span>
                            <strong>
                                ${(product.price * product.quantity).toLocaleString("es-AR")}
                            </strong>
                        </div>
                    ))}

                    <div className={styles.total}>
                        <span>Total</span>
                        <strong>
                            ${totalPrice.toLocaleString("es-AR")}
                        </strong>
                    </div>

                    <Link to="/cart" className={styles.backLink}>
                        Volver al carrito
                    </Link>
                </aside>
            </div>
        </section>
    );
}

export default Checkout;