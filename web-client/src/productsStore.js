// Oakley hYDRA price_1Mlwu8Lj4ioafja9pzDfti0y
// Rayan Aviator price_1Mlwv5Lj4ioafja9tLLlWBqh
// Oakley Latch price_1MlwvzLj4ioafja98iZZdK7n
// Oakley Frogskins Sunglasses price_1MlwwWLj4ioafja9Us1LpxQ0
// Rayban Wayfarer Sunglasses price_1Mlwx4Lj4ioafja9D8lZBj3y
// Rayban Erika Sunglasses price_1MlwxrLj4ioafja93IFH8gFt

import OakleyHyrda from './Images/OakleyHydra.png'
import RayBanAviators from './Images/RayBanAviators.png'
import OakleyLatch from './Images/OakleyLatch.png'
import OakleyFrogskins from './Images/OakleyFrogskins.png'
import RayBanWayfarers from './Images/RayBanWayfarers.png'
import RayBanErika from './Images/RayBanErika.png'

const products = [
    {
        id: "price_1Mlwu8Lj4ioafja9pzDfti0y",
        img: OakleyHyrda,
        title: "Oakley Hydra Sunglasses",
        price: 135.99,
    },
    {
        id: "price_1Mlwv5Lj4ioafja9tLLlWBqh",
        img: RayBanAviators,
        title: "RayBan Aviator Sunglasses",
        price: 125.99,
    },
    {
        id: "price_1MlwvzLj4ioafja98iZZdK7n",
        img: OakleyLatch,
        title: "Oakley Latch Sunglasses",
        price: 94.99,
    },
    {
        id: "price_1MlwwWLj4ioafja9Us1LpxQ0",
        img: OakleyFrogskins,
        title: "Oakley Frogskins Sunglasses",
        price: 70.99,
    },
    {
        id: "price_1Mlwx4Lj4ioafja9D8lZBj3y",
        img: RayBanWayfarers,
        title: "Rayban Wayfarer Sunglasses",
        price: 135.99,
    },
    {
        id: "6price_1MlwxrLj4ioafja93IFH8gFt",
        img: RayBanErika,
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