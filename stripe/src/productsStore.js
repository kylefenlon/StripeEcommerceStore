// Oakley hYDRA price_1Mlwu8Lj4ioafja9pzDfti0y
// Rayan Aviator price_1Mlwv5Lj4ioafja9tLLlWBqh
// Oakley Latch price_1MlwvzLj4ioafja98iZZdK7n
// Oakley Frogskins Sunglasses price_1MlwwWLj4ioafja9Us1LpxQ0
// Rayban Wayfarer Sunglasses price_1Mlwx4Lj4ioafja9D8lZBj3y
// Rayban Erika Sunglasses price_1MlwxrLj4ioafja93IFH8gFt

const products = [
    {
        id: "price_1Mlwu8Lj4ioafja9pzDfti0y",
        title: "Oakley Hydra Sunglasses",
        price: 135.99,
    },
    {
        id: "price_1Mlwv5Lj4ioafja9tLLlWBqh",
        title: "RayBan Aviator Sunglasses",
        price: 125.99,
    },
    {
        id: "price_1MlwvzLj4ioafja98iZZdK7n",
        title: "Oakley Latch Sunglasses",
        price: 94.99,
    },
    {
        id: "price_1MlwwWLj4ioafja9Us1LpxQ0",
        title: "Oakley Frogskins Sunglasses",
        price: 70.99,
    },
    {
        id: "price_1Mlwx4Lj4ioafja9D8lZBj3y",
        title: "Rayban Wayfarer Sunglasses",
        price: 135.99,
    },
    {
        id: "6price_1MlwxrLj4ioafja93IFH8gFt",
        title: "Rayban Erika Sunglasses",
        price: 111.99,
    }
]

const getProductData = (id) => {
    let productData = products.find(product => product.id === id)

    if (productData === undefined) {
        console.log("Product not found as this ID " + id + " does not exist");
        return undefined;
    }

    return productData;
}

export { products, getProductData }