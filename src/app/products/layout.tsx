import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Products"
}

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-10">{children}</div>
    )
}

export default ProductLayout