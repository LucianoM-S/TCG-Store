const products = [
    {
        id: 1,
        title: "DON!!",
        price: 12000,
        category: "Singles",
        image: "/image/don.webp",
        stock: 10,
        description: "Pack de cartas DON!! para One Piece Card Game."
    },
    {
        id: 2,
        title: "Booster Box OP17",
        price: 400000,
        category: "Sellados",
        image: "/image/boosterop17.webp",
        stock: 5,
        description: "Booster Box de la expansión OP17."
    },
    {
        id: 3,
        title: "Dados",
        price: 5000,
        category: "Accesorios",
        image: "/image/dado.webp",
        stock: 20,
        description: "Dados para utilizar durante tus partidas."
    },
    {
        id: 4,
        title: "Deck Protector",
        price: 15000,
        category: "Accesorios",
        image: "/image/deckbox.webp",
        stock: 15,
        description: "Protectores para cartas de One Piece Card Game."
    },
    {
        id: 5,
        title: "Starter Deck",
        price: 30000,
        category: "Sellados",
        image: "/image/st30.webp",
        stock: 8,
        description: "Starter Deck para comenzar a jugar."
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}