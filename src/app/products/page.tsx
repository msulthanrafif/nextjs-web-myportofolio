import { PrismaClient } from "@prisma/client"
import AddProduct from "./addProduct"

const prisma = new PrismaClient()

const getProducts = async () => {
    const res = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            brandId: true,
            brand: true
        }
    })
    return res
}

const getBrands = async () => {
    const res = await prisma.brand.findMany()
    return res
}

const Product = async () => {
    const [products, brands] = await Promise.all([getProducts(), getBrands()])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="z-10 max-w-5xl w-full flex-col items-start justify-between font-mono mt-10 text-sm lg:flex">
                <div className="my-2">
                    <AddProduct brands={brands} />
                </div>

                <table className='table w-full'>
                    <thead className="bg-gray-200">
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => (
                            <tr key={product.id}>
                                <td>{i + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.brand.name}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Product