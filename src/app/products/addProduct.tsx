"use client"
import { SyntheticEvent, useState } from "react"
import type { Brand } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"

const AddProduct = ({ brands }: { brands: Brand[] }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.post('/api/products', {
            name: name,
            price: Number(price),
            brandId: Number(brand)
        })
        setName("")
        setPrice("")
        setBrand("")
        router.refresh()
        setIsOpen(false)
    }

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <button className="btn" onClick={handleModal}>Add New</button>

            <div className={isOpen ? "modal modal-open" : "modal"}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add New Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className='label font-bold'>Product Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input input-bordered' placeholder='product name' />
                        </div>
                        <div className="form-control w-full">
                            <label className='label font-bold'>Price</label>
                            <input type="text" className='input input-bordered' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' />
                        </div>
                        <div className="form-control w-full">
                            <label className='label font-bold'>Brand</label>
                            <select className='select select-bordered' value={brand} onChange={(e) => setBrand(e.target.value)}>
                                <option value="" disabled>Select a Brand</option>
                                {brands.map((brand) => (
                                    <option value={brand.id} key={brand.id}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-action">
                            <button type='button' className='btn' onClick={handleModal}>close</button>
                            <button type='submit' className='btn'>save</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default AddProduct