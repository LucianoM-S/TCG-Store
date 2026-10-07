import { products } from "../mock/asyncMock.js"

export const getProductById = (productId) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const product = products.find(
                (product) => product.id === productId
            )

            if (product) {
                resolve(product)
            } else {
                reject(new Error("Producto no encontrado"))
            }

        }, 500)

    })
}